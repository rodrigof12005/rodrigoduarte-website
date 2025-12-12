import React from 'react';
import './Experience.css';

function Experience() {
  const experiences = [
    {
      company: 'Qintess',
      icon: '/logos/qintess-logo.jpeg',
      role: 'Desenvolvedor Fullstack',
      duration: 'Setembro 2025 ',
      description: 'Desenvolvimento e manutenção de sistemas para a SAEB (governo da Bahia , SEI , sistemas governamentais) utilizando PHP , Laravel , Javascript ,React , Vue, Metronic, Bootstrap , Jquery , Ajax , Rest API , CI/CD(GitLab , Jenkis , Sonar , Larastan , Kubernetes), Mysql , Postgres , Sql Server, Cloud , Scrum , Kanban.',
    },
    {
      company: 'Montreal',
      icon: '/logos/montreal-logo.webp',
      role: 'Desenvolvedor Fullstack',
      duration: 'Novembro 2024 - Julho 2025',
      description: 'Desenvolvimento e manutenção de sistemas utilizando PHP , CakePHP, Javascript , Angular , Bootstrap , Jquery , Ajax , Rest API , CI/CD(GitLab , Jenkis , Sonar),Mysql , Middleware , WSO2 ,Cloud , Apache, Scrum.',
    },
    {
      company: 'Likewater (PJ)',
      icon: '/logos/likewater-logo.jpeg',
      role: 'Analista Desenvolvedor Fullstack',
      duration: 'Agosto 2024 - Setembro 2024',
      description: 'Desenvolvimento e manutenção de sistemas em PHP com Laravel ,Javascript, Broker , Rest API , Mysql , Devops , Nginx , Oracle Cloud , Configuração de Web Servers .',
    },
    {
      company: 'CoffeeCode (PJ)',
      icon: '/logos/coffeecode-logo.webp',
      role: 'Desenvolvedor Backend',
      duration: 'Junho 2024 - Agosto 2024',
      description: 'Desenvolvimento e manutenção de sistemas e plugins em PHP para WordPress, WpEmerge, Woocommerce, Pagamentos, Docker (Devilbox), Javascript, Rest API ,Apache , Notion .',
    },
    {
      company: 'Sonda',
      icon: '/logos/sonda-logo.png',
      role: 'Desenvolvedor Fullstack',
      duration: 'Desembro 2021 - Agosto 2023',
      description: 'Desenvolvimento e manutenção de sistemas em PHP (Full Stack) para a Defensoria Pública da União-DPU utilizando as tecnologias Laravel(JWT,Passport), ReactJs, Javascript , Api Rest, Bootstrap, Html, Css, Git ,Administração de Banco de Dados , Ajax, Scrum ,Postman, Design patterns, Composer , Apache, Docker, Desenvolvimento para Android utilizando Low Code Kodular .',
    },
    {
      company: 'Confederação Nacional dos Municípios CNM',
      icon: '/logos/cnm-logo.png',
      role: 'Desenvolvedor Fullstack',
      duration: 'Outubro 2020 - Novembro 2021',
      description: 'Desenvolvimento e Manutenção de sistemas em PHP (Full Stack) utilizando as tecnologias Laravel, Codeigniter, Javascript , Api rest, Bootstrap , GIT, Administração de Banco de Dados (MySQL, Sql server e Postgres), Composer, Apache, Scrum.',
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <h2 className="experience-heading">EXPERIÊNCIAS PROFISSIONAIS</h2>
      <div className="experiences-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="company-info"> {/* Container para nome e ícone */}
              <h3 className="experience-company">{exp.company}</h3>
              {exp.icon && <img src={exp.icon} alt={`${exp.company} Logo`} className="company-logo" />}
            </div>
            <p className="experience-role">{exp.role}</p>
            <p className="experience-duration">{exp.duration}</p>
            <p className="experience-description">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;