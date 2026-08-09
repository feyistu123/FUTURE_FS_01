import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');
  const [sending, setSending] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSending(true);
    setStatus('');

    const formData = new FormData(event.target);
    const body = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });

      if (response.ok) {
        setStatus('Message sent successfully.');
        event.target.reset();
      } else {
        const result = await response.json();
        setStatus(result.error || 'Unable to send message. Please try again later.');
      }
    } catch (error) {
      setStatus('Network error. Please check the backend server and try again.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="section-header">
        <p className="section-label">Contact</p>
        <h2>Reach out to me</h2>
      </div>
      <p>If you want to connect about projects, roles, or freelance work, send your details below.</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input name="name" type="text" placeholder="Your name" required />
        </label>
        <label>
          Email
          <input name="email" type="email" placeholder="you@example.com" required />
        </label>
        <label>
          Message
          <textarea name="message" rows="5" placeholder="Tell me about your project" required />
        </label>
        <button type="submit" className="button primary" disabled={sending}>
          {sending ? 'Sending…' : 'Send Message'}
        </button>
        {status && <p className="form-status">{status}</p>}
      </form>
    </section>
  );
}
