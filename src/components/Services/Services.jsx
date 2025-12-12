import React from 'react';
import './Services.css';

function Services() {
  const servicesList = [
    {
      title: 'Desenvolvimento Backend (PHP)',
      description: 'Criação de APIs robustas e escaláveis, utilizando frameworks como Laravel, Symfony, CakePHP, Codeigniter e Lumen para garantir performance e segurança.',
    },
    {
      title: 'Desenvolvimento Frontend (React.js, Angular, Bootstrap)',
      description: 'Construção de interfaces de usuário modernas, responsivas e intuitivas, com foco em React.js, Angular ou Bootstrap para uma experiência fluida.',
    },
    {
      title: 'Gerenciamento de Infraestrutura (Docker, Cloud)',
      description: 'Configuração e gerenciamento de ambientes de desenvolvimento e produção com Docker , serviços em Cloud , Windows Server , Linux, garantindo escalabilidade e alta disponibilidade.',
    },
    {
      title: 'Banco de Dados (MySQL, Postgresql , SQL Server)',
      description: 'Modelagem, otimização e gerenciamento de bancos de dados relacionais para garantir a integridade e o desempenho dos dados de sua aplicação.',
    },
    
  ];

  return (
    <section id="services" className="services-section">
      <h2 className="services-heading">SERVIÇOS QUE EU OFEREÇO</h2>
      

      <div className="services-list-container">
        {servicesList.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;