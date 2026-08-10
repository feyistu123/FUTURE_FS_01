import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import ContactMessage from './models/ContactMessage.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 4000;
const emailRecipient = process.env.EMAIL_RECIPIENT || process.env.EMAIL_USER || 'hello@example.com';
const emailEnabled = Boolean(process.env.EMAIL_USER && process.env.EMAIL_PASS);

let transporter;
if (emailEnabled) {
  transporter = nodemailer.createTransport(
    process.env.EMAIL_HOST
      ? {
          host: process.env.EMAIL_HOST,
          port: Number(process.env.EMAIL_PORT || 587),
          secure: process.env.EMAIL_SECURE === 'true' || Number(process.env.EMAIL_PORT) === 465,
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
          },
          tls: {
            rejectUnauthorized: process.env.EMAIL_REJECT_UNAUTHORIZED !== 'false'
          }
        }
      : {
          host: 'smtp.gmail.com',
          port: 587,
          secure: false,
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
          },
          tls: {
            rejectUnauthorized: false
          }
        }
  );

  transporter.verify().then(() => {
    console.log('Email transporter successfully configured.');
  }).catch((error) => {
    console.error('Error verifying email transporter:', error.message || error);
  });
} else {
  console.warn('Email notification disabled: EMAIL_USER or EMAIL_PASS is missing.');
}

let dbUri = process.env.MONGODB_URI;

if (!dbUri) {
  const user = process.env.MONGODB_USER;
  const password = process.env.MONGODB_PASSWORD;
  const host = process.env.MONGODB_HOST;
  const dbName = process.env.MONGODB_DB || 'portfolio';
  if (user && password && host) {
    dbUri = `mongodb+srv://${encodeURIComponent(user)}:${encodeURIComponent(password)}@${host}/${dbName}?retryWrites=true&w=majority`;
  }
}

if (!dbUri) {
  console.error('Error: MongoDB connection information is missing.');
  console.error('Set MONGODB_URI or MONGODB_USER, MONGODB_PASSWORD, MONGODB_HOST, and optionally MONGODB_DB.');
  process.exit(1);
}

mongoose.connect(dbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 8000
});

const db = mongoose.connection;
db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
  console.error('Verify your Atlas connection string, cluster access, and network rules.');
});
db.once('open', () => console.log('Connected to MongoDB Atlas'));

app.post('/api/contact', async (req, res) => {
  const { name, email, message, mode } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please fill out all required fields.' });
  }

  try {
    const contact = new ContactMessage({ name, email, message, mode });
    await contact.save();

    if (emailEnabled && transporter) {
      const mailOptions = {
        from: `Portfolio Contact <${process.env.EMAIL_USER}>`,
        to: emailRecipient,
        subject: `New contact message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMode: ${mode || 'N/A'}\n\nMessage:\n${message}`,
        html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Mode:</strong> ${mode || 'N/A'}</p><p><strong>Message:</strong></p><p>${message.replace(/\n/g, '<br/>')}</p>`
      };

      try {
        await transporter.sendMail(mailOptions);
        console.log(`Contact notification email sent to ${emailRecipient}`);
      } catch (emailError) {
        console.error('Failed to send notification email:', emailError);
      }
    }

    res.status(201).json({ message: 'Contact message received.' });
  } catch (error) {
    console.error('Failed to save contact message:', error);
    res.status(500).json({ error: 'Unable to save message right now.' });
  }
});

app.get('/api/status', async (req, res) => {
  const mongoState = db.readyState === 1 ? 'connected' : 'disconnected';
  res.json({
    status: 'ok',
    mongo: mongoState,
    emailRecipient,
    uptime: process.uptime()
  });
});

app.get('/api/roadmap', (req, res) => {
  res.json({
    roadmap: [
      'Clone repository and install dependencies for frontend and backend',
      'Create MongoDB Atlas cluster and add connection string in .env',
      'Run backend server with nodemon and verify /api/status endpoint',
      'Develop React pages for homepage, projects, about, and contact sections',
      'Connect contact form to backend POST /api/contact endpoint',
      'Deploy frontend to Vercel/Netlify and backend to Render/Heroku',
      'Update README with live site URL, repository details, and project descriptions'
    ]
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
