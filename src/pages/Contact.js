// Contact.js
import React from 'react';
import './Contact.css';

const Contact = () => (
  <div className="contact">
    <div className="contact-content">
      <h2>Contact Me</h2>
      <p>If you'd like to get in touch, feel free to reach out through any of the platforms below:</p>
      <ul>
        <li>
          <strong>Email:</strong> <a href=".">rafael.puckoski.josephino@gmail.com</a>
        </li>
        <li>
          <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/rafael-puckoski-josephino/">LinkedIn Profile</a>
        </li>
        <li>
          <strong>GitHub:</strong> <a href="https://github.com/RafaelPJosephino">GitHub Profile</a>
        </li>
      </ul>
      <p>I look forward to hearing from you!</p>
    </div>
  </div>
);

export default Contact;
