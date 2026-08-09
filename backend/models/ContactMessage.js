import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  mode: {
    type: String,
    enum: ['general', 'project', 'feedback', 'other'],
    default: 'general'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const ContactMessage = mongoose.model('ContactMessage', contactSchema);

export default ContactMessage;
