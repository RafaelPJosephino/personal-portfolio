import React from 'react';
import './About.css';

const About = () => (
  <div className="about">
    <div className="about-content">
      <h2>About Me</h2>
      <p>Hello, my name is Rafael Puckoski Josephino.</p>
      <p>Faculty of Information Systems.</p>
      <p>I believe in Empathy, Inclusion, Loyalty, and Respect as essential values in all companies and teams.</p>
      
      <h3>Education</h3>
      <ul>
        <li>Vocational High School in Computer Science | <a href="https://cedupcriciuma.com.br/">Cedup - Abilio Paulo</a></li>
        <li>Information Systems | <a href="https://www.esucri.com.br">University Esucri</a></li>
        <li>Information Systems | <a href="https://www.cruzeirodosulvirtual.com.br/">University Cruzeiro do Sul</a></li>
      </ul>

      <h3>Skills & Tools</h3>
      <div>
        <a target="_blank" href="https://www.w3schools.com/default.asp" rel="nofollow noreferrer">
          <img alt="csharp" width="38px" src="https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/csharp/csharp-original.svg" />
        </a>
        <a target="_blank" href="https://dotnet.microsoft.com/en-us/" rel="nofollow noreferrer">
          <img alt="dotnetcore" width="38px" src="https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/dotnetcore/dotnetcore-original.svg" />
        </a>
        <a target="_blank" href="https://www.postman.com/" rel="nofollow noreferrer">
          <img alt="postman" width="38px" src="https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/postman/postman-original.svg" />
        </a>
        <a target="_blank" href="https://dbeaver.io/" rel="nofollow noreferrer">
          <img alt="dbeaver" width="38px" src="https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/dbeaver/dbeaver-original.svg" />
        </a>
        <a target="_blank" href="https://www.postgresql.org/docs/current/" rel="nofollow noreferrer">
          <img alt="PostgreSQL" width="38px" src="https://raw.githubusercontent.com/devicons/devicon/00f02ef57fb7601fd1ddcc2fe6fe670fef3ae3e4/icons/postgresql/postgresql-original-wordmark.svg" />
        </a>
        <a target="_blank" href="https://azure.microsoft.com/pt-br/products/devops" rel="nofollow noreferrer">
          <img alt="azuredevops" width="38px" src="https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/azuredevops/azuredevops-original.svg" />
        </a>
        <a target="_blank" href="https://git-scm.com/" rel="nofollow noreferrer">
          <img alt="git" width="38px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg" />
        </a>
        <a target="_blank" href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" rel="nofollow noreferrer">
          <img alt="javascript" width="38px" src="https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/javascript/javascript-original.svg" />
        </a>
        <a target="_blank" href="https://code.visualstudio.com/docs" rel="nofollow noreferrer">
          <img alt="VScode" width="38px" src="https://raw.githubusercontent.com/devicons/devicon/00f02ef57fb7601fd1ddcc2fe6fe670fef3ae3e4/icons/vscode/vscode-original-wordmark.svg" />
        </a>
        <a target="_blank" href="https://docs.sencha.com/extjs/6.5.3/index.html" rel="nofollow noreferrer">
          <img alt="git" width="25px" height="38px" src="https://docs.sencha.com/assets/images/sencha_logo_thumb.png" />
        </a>
      </div>

      <h3>Complementary Courses</h3>
      <ul>
        <li>DIO (Digital Innovation One)</li>
        <ul>
          <li><a target="_blank" href="https://www.dio.me/certificate/2682DEDC" rel="nofollow noreferrer">.NET Developer Training</a> (02/11/2023)</li>
          <li><a target="_blank" href="https://www.dio.me/certificate/00EEF16A" rel="nofollow noreferrer">React Developer Training</a> (19/07/2023)</li>
        </ul>
        <li>Yesbras</li>
        <ul>
          <li><a target="_blank" href="https://ybrcursos.com.br" rel="noreferrer">Smart Choice 2B English (Basic English)</a></li>
          <li><a target="_blank" href="https://ybrcursos.com.br" rel="noreferrer">Computer Maintenance</a></li>
        </ul>
      </ul>
    </div>
  </div>
);

export default About;
