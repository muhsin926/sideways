import React, { useState } from 'react';
import styles from './style.module.css';
import toast, { Toaster } from 'react-hot-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
        const formData = new FormData(event.target);
    
        formData.append("access_key", "058b3615-7e6b-4402-b72a-7e94a5f6e547");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          toast.success("Message sent successfully");
        }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className={styles.contactSection} id="contact" role="region" aria-label="Contact form section">
      <Toaster position="bottom-left" />
      <div className={styles.contactWrapper}>
        <div className={styles.leftSection}>
          <h2 className={styles.title}>Get in Touch</h2>
          <p className={styles.subtitle}>Let's connect and discuss your needs</p>
          
          <div className={styles.contactInfo} role="complementary" aria-label="Contact information">
            <div className={styles.contactItem}>
              <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" role="img">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d="M12 21s-8-4.5-8-11.8A8 8 0 0112 2a8 8 0 018 7.2c0 7.3-8 11.8-8 11.8z"/>
                <circle cx="12" cy="9" r="3" strokeWidth="2"/>
              </svg>
              <a 
                href="https://maps.app.goo.gl/BHqTbUxiC8G4JFwU6" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit our office at No. 134/1, Ground Floor, Lakshmaiah Block, Ganganagar, Bengaluru-560 024"
              >
                No. 134/1, Ground Floor, Lakshmaiah Block, Ganganagar, Bengaluru-560 024.
              </a>
            </div>
            
            <div className={styles.contactItem}>
              <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" role="img">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <a 
                href="mailto:devraj@sideways6.in"
                aria-label="Email us at devraj@sideways6.in"
              >
                devraj@sideways6.in
              </a>
            </div>
            
            <div className={styles.contactItem}>
              <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              <a href="tel:+919844431199">+91 98444 31199</a>
            </div>
          </div>

          <hr className={styles.divider} />
          
          <div className={styles.socialIcons}>
            <a href="https://www.facebook.com/Sideways6.in" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/eventsbysideways6/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2"/>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
              </svg>
            </a>
          </div>
          
        </div>
        
        <div className={styles.rightSection}>
          <form onSubmit={handleSubmit} className={styles.form} aria-label="Contact form">
            <div className={styles.inputGroup}>
              <label htmlFor="name" className={styles.label}>Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={styles.input}
                aria-required="true"
                aria-label="Enter your name"
              />
              {errors.name && <span className={styles.error}>{errors.name}</span>}
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={styles.input}
                aria-required="true"
                aria-label="Enter your email"
              />
              {errors.email && <span className={styles.error}>{errors.email}</span>}
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="message" className={styles.label}>Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className={styles.textarea}
                rows="4"
                aria-required="true"
                aria-label="Enter your message"
              ></textarea>
              {errors.message && <span className={styles.error}>{errors.message}</span>}
            </div>

            <button 
              type="submit" 
              className={styles.submitButton}
              aria-label="Submit contact form"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm; 