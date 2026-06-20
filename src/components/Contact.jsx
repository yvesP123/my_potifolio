import { useState } from 'react'
import { MapPin, Phone, Mail, Send } from 'lucide-react'

const initialForm = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sent

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Enter your name'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email'
    if (!form.subject.trim()) next.subject = 'Enter a subject'
    if (!form.message.trim()) next.message = 'Enter a message'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return

    // No backend is wired up yet — replace this with an API call or
    // a service like Formspree/EmailJS when you're ready to receive messages.
    const mailto = `mailto:iraguhayves0788@gmail.com?subject=${encodeURIComponent(
      form.subject
    )}&body=${encodeURIComponent(`From: ${form.name} (${form.email})\n\n${form.message}`)}`
    window.location.href = mailto
    setStatus('sent')
    setForm(initialForm)
  }

  return (
    <section id="contact" className="section section-contact">
      <div className="container">
        <p className="eyebrow">get in touch</p>
        <h2 className="section-heading">Let's build something</h2>
        <p className="section-sub">
          Have a project in mind, or want to talk through an idea? Send a message — I read every one.
        </p>

        <div className="contact-grid">
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" value={form.name} onChange={handleChange} />
                {errors.name && <span className="form-error">{errors.name}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" value={form.email} onChange={handleChange} />
                {errors.email && <span className="form-error">{errors.email}</span>}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input id="subject" name="subject" type="text" value={form.subject} onChange={handleChange} />
              {errors.subject && <span className="form-error">{errors.subject}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" value={form.message} onChange={handleChange} />
              {errors.message && <span className="form-error">{errors.message}</span>}
            </div>

            <button type="submit" className="btn btn-solid">
              Send message <Send size={15} />
            </button>
            {status === 'sent' && <p className="form-success">Your email client should now be open — thank you.</p>}
          </form>

          <div className="contact-info">
            <h3>Contact information</h3>
            <p><MapPin size={18} /> Kigali, Rwanda</p>
            <p><Phone size={18} /> +250 788 517 392</p>
            <p><Mail size={18} /> iraguhayves0788@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  )
}
