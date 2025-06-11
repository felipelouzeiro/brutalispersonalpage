import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioDataService {

  private data = {
    about: {
      title: 'Sobre mim',
      description: 'Desenvolvedor Front-end com paixão por criar interfaces dinâmicas e responsivas. Focado em explorar tecnologias para construir aplicações dentro das melhores práticas de desenvolvimento.',
      photoUrl: 'assets/images/profile-pic.png'
    },
    experiences: [
      {
        company: 'Empresa Fictícia',
        role: 'Desenvolvedor Front-end',
        period: '2022 - Presente',
        description: 'Desenvolvimento e manutenção de aplicações web utilizando Angular, TypeScript e SCSS.'
      },
      {
        company: 'Outra Empresa Fictícia',
        role: 'Desenvolvedor Web Jr',
        period: '2020 - 2022',
        description: 'Criação de landing pages e sites institucionais com HTML, CSS e JavaScript.'
      }
    ],
    skills: {
      title: 'Ferramentas e Tecnologias',
      list: [
        { name: 'Angular', icon: 'angular' },
        { name: 'React', icon: 'react' },
        { name: 'TypeScript', icon: 'typescript' },
        { name: 'JavaScript', icon: 'javascript' },
        { name: 'Dynamics CRM', icon: 'microsoft' },
        { name: 'SASS', icon: 'sass' },
        { name: 'HTML5', icon: 'html5' },
        { name: 'CSS3', icon: 'css3' },
        { name: 'NgRx', icon: 'ngrx' },
        { name: 'RxJS', icon: 'rxjs' },
        { name: 'Git', icon: 'git-alt' },
        { name: 'Figma', icon: 'figma' }
      ]
    },
    projects: [
      {
        title: 'Projeto Incrível',
        description: 'Um projeto que demonstra minhas habilidades em Angular e design responsivo.',
        details: 'Aqui você pode adicionar uma descrição muito mais detalhada sobre o projeto, falando sobre os desafios, as tecnologias empregadas, e os resultados alcançados. Este texto aparecerá no modal de detalhes.',
        image: 'assets/images/project1.png',
        technologies: ['Angular', 'SCSS', 'TypeScript'],
        repoUrl: 'https://github.com/brutalis',
        demoUrl: '#'
      },
      {
        title: 'Projeto Incrível',
        description: 'Um projeto que demonstra minhas habilidades em Angular e design responsivo.',
        details: 'Aqui você pode adicionar uma descrição muito mais detalhada sobre o projeto, falando sobre os desafios, as tecnologias empregadas, e os resultados alcançados. Este texto aparecerá no modal de detalhes.',
        image: 'assets/images/project1.png',
        technologies: ['Angular', 'SCSS', 'TypeScript'],
        repoUrl: 'https://github.com/brutalis',
        demoUrl: '#'
      },
      {
        title: 'Projeto Incrível',
        description: 'Um projeto que demonstra minhas habilidades em Angular e design responsivo.',
        details: 'Aqui você pode adicionar uma descrição muito mais detalhada sobre o projeto, falando sobre os desafios, as tecnologias empregadas, e os resultados alcançados. Este texto aparecerá no modal de detalhes.',
        image: 'assets/images/project1.png',
        technologies: ['Angular', 'SCSS', 'TypeScript'],
        repoUrl: 'https://github.com/brutalis',
        demoUrl: '#'
      },
      {
        title: 'Projeto Incrível',
        description: 'Um projeto que demonstra minhas habilidades em Angular e design responsivo.',
        details: 'Aqui você pode adicionar uma descrição muito mais detalhada sobre o projeto, falando sobre os desafios, as tecnologias empregadas, e os resultados alcançados. Este texto aparecerá no modal de detalhes.',
        image: 'assets/images/project1.png',
        technologies: ['Angular', 'SCSS', 'TypeScript'],
        repoUrl: 'https://github.com/brutalis',
        demoUrl: '#'
      },
      {
        title: 'Outro Projeto',
        description: 'Uma aplicação web desenvolvida com as mais recentes tecnologias do mercado.',
        details: 'Assim como no outro projeto, este espaço é reservado para aprofundar na descrição, explicando as particularidades e o que você aprendeu com ele.',
        image: 'assets/images/project2.png',
        technologies: ['React', 'Node.js', 'MongoDB'],
        repoUrl: null,
        demoUrl: '#'
      }
    ],
    contacts: {
      linkedin: 'https://www.linkedin.com/in/felipe-louzeiro-a5b580197/',
      github: 'https://github.com/brutalis',
      email: 'felipe.louzeiro@gmail.com'
    }
  };

  getData() {
    return this.data;
  }
} 