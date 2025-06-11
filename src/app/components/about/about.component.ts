import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {
  @Input() data: any;

  // Efeito de título dinâmico
  titles = ["Desenvolvedor Front-End", "Desenvolvedor Full-Stack"];
  currentTitle = this.titles[0];
  private titleInterval: any;

  // Tagline estática para o novo efeito
  tagline = "Criando experiências digitais.";

  constructor() { }

  ngOnInit(): void {
    let i = 0;
    this.titleInterval = setInterval(() => {
      i = (i + 1) % this.titles.length;
      this.currentTitle = this.titles[i];
    }, 2000); // Troca a cada 2 segundos
  }

  ngOnDestroy(): void {
    if (this.titleInterval) {
      clearInterval(this.titleInterval);
    }
  }

  toggleTheme(): void {
    document.body.classList.toggle('theme-brutalist');
  }
} 