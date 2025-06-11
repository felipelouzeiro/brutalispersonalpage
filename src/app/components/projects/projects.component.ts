import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule, FaIconLibrary, IconName, IconPrefix } from '@fortawesome/angular-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight, faCode, faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  @Input() data: any;

  constructor(private library: FaIconLibrary) {
    library.addIcons(faGithub, faArrowRight, faCode, faStar);
  }

  // Mapeia uma tecnologia para um ícone do FontAwesome
  getTechIcon(tech: string): [IconPrefix, IconName] {
    const techLower = tech.toLowerCase();
    // Este mapeamento pode ser expandido conforme necessário
    if (techLower.includes('angular')) return ['fab', 'angular'];
    if (techLower.includes('react')) return ['fab', 'react'];
    if (techLower.includes('javascript') || techLower.includes('typescript')) return ['fab', 'js-square'];
    if (techLower.includes('sass')) return ['fab', 'sass'];
    // Adicione outros mapeamentos aqui
    return ['fas', 'code']; // Ícone padrão
  }
} 