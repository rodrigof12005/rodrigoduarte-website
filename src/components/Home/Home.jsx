import React from 'react';
import './Home.css';

function Home() {

  const githubLink = 'https://github.com/rodrigof12005/';
  const linkedinLink = 'https://www.linkedin.com/in/rodrigo-duarte-461a99165/';
  const phoneNumber = '5561982250142'; 
  const whatsappMessage = 'Olá Rodrigo, vi seu currículo online e gostaria de conversar sobre uma oportunidade.';
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="home" className="section home-section">
      <p className="greeting">OLÁ,</p>
      <h1 className="introduction">EU SOU <span className="highlight">RODRIGO DUARTE</span>, <br /> UM DESENVOLVEDOR FULLSTACK.</h1>
      
      <div className="bio-container">
      <p className="description">
      Profissional formado em Gestão da Tecnologia da Informação com mais de 20 anos atuando na área de TI e atualmente cursando
       Pós em  Engenharia de Software, atuo com Desenvolvimento de Software utilizando PHP (Laravel ,Codeigniter
        ,Cake PHP , Symfony, Joomla, Orientado a Objetos , JWT, Eloquent,ORM ,Doctrine, Lumen, MVC , PHPUnit , Wordpress) ,Desing Pattern , System Desing, 
        Git/Gitlab (git flow , merge, branch), Postman , Docker , Restful API, Webservices , Javascript , ReactjS, Angular, Vuejs , Sass,
         Bootstrap, Amazon Web Services AWS, Oracle Cloud , Jenkis , Sonnar, CI/CD, RabbitMq, Mysql, Microsoft Sql Server, Postgresql  .
      </p>
      <div className="tech-logos">
          <img src="/logos/php-logo.png" alt="PHP" title='PHP'/>
          <img src="/logos/laravel-logo.webp" alt="Laravel" title='Laravel' />
          <img src="/logos/javascript-logo.png" alt="Javascript" title='Javascript'/>
          <img src="/logos/react-logo.jpeg" alt="React" title='React'/>
          <img src="/logos/angular-logo.webp" alt="Angular" title='Angular'/>
          <img src="/logos/symfony-logo.svg" alt="Symfony" title='Symfony'/>
          <img src="/logos/cakephp-logo.png" alt="CakePHP" title='CakePHP'/>
          <img src="/logos/wordpress-logo.png" alt="Wordpress" title='Wordpress'/>
          <img src="/logos/codeigniter-logo.svg" alt="Codeigniter" title='Codeigniter'/>
        </div>
        </div>

      <div className="action-buttons">
      <a href={githubLink} target='_blank' rel="noopener noreferrer" className="btn btn-portfolio">
            GIT HUB
        </a>
      <a href={linkedinLink} target='_blank' rel="noopener noreferrer" className="btn btn-portfolio">
            LINKEDIN
        </a>
        <a href={whatsappLink} target='_blank' rel="noopener noreferrer" className="btn btn-hireme">
            WhatsApp
        </a> 
        
       </div>
    </section>
  );
}

export default Home;