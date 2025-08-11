import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-heading">ENTRE EM CONTATO</h2>
      <p className="contact-intro">
        Estou disponível para novos projetos e oportunidades. Sinta-se à vontade para me contatar
        através das minhas redes sociais e canais de contato direto.
      </p>

      <div className="contact-container">
        <div className="contact-info-container">
          <h3 className="info-title">Informações de Contato</h3>
          <p className="info-item">
            <strong>Email:</strong> <a href="mailto:rodrigoduartef1@hotmail.com">rodrigoduartef1@hotmail.com</a>
          </p>
          <p className="info-item">
            <strong>WhatsApp:</strong> <a href="https://wa.me/5561982250142" target="_blank" rel="noopener noreferrer">+55 (61) 98225-0142</a>
          </p>
          <div className="social-links-contact">
            <h3 className="info-title">Conecte-se comigo</h3>
            <a href="https://www.linkedin.com/in/rodrigo-duarte-461a99165/" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
            <a href="https://github.com/rodrigof12005/" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;