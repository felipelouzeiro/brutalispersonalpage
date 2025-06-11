import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule, FaIconLibrary, IconPrefix, IconName } from '@fortawesome/angular-fontawesome';

// Ícones "Solid" (Genéricos) que usamos
import { faCode, faCodeBranch, faAtom } from '@fortawesome/free-solid-svg-icons';

// Ícones "Brands" (Marcas) que usamos
import { 
  faAngular, faReact, faJs, faSass, faHtml5, faCss3, 
  faGitAlt, faFigma, faMicrosoft, faGithub, faJsSquare, faNodeJs
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  @Input() data: any;
  
  // Mapeamento de tamanho para o grid
  skillSizes: { [key: string]: string } = {
    'Angular': 'large',
    'React': 'medium',
    'TypeScript': 'medium',
    'JavaScript': 'medium',
  };

  constructor(private library: FaIconLibrary) {
    // Adicionando explicitamente cada ícone à biblioteca.
    library.addIcons(
      faCode, faCodeBranch, faAtom, // Solid
      faAngular, faReact, faJs, faSass, faHtml5, faCss3, 
      faGitAlt, faFigma, faMicrosoft, faGithub, faJsSquare, faNodeJs
    );
  }

  getIcon(iconName: string): [IconPrefix, IconName] {
    const iconMapping: { [key: string]: [IconPrefix, IconName] } = {
      'angular': ['fab', 'angular'],
      'react': ['fab', 'react'],
      'javascript': ['fab', 'js-square'],
      'typescript': ['fab', 'js-square'], // Usando 'js-square' como um substituto visual para TS
      'microsoft': ['fab', 'microsoft'],
      'sass': ['fab', 'sass'],
      'html5': ['fab', 'html5'],
      'css3': ['fab', 'css3'],
      'git-alt': ['fab', 'git-alt'],
      'figma': ['fab', 'figma'],
      'github': ['fab', 'github'],
      'ngrx': ['fas', 'code-branch'],
      'rxjs': ['fas', 'atom'],
    };

    return iconMapping[iconName] || ['fas', 'code'];
  }

  getTileSize(skillName: string): string {
    return this.skillSizes[skillName] || 'small';
  }

  getRandomAnimationValues(): any {
    const duration = Math.random() * 3 + 3; // 3 a 6 segundos
    const delay = Math.random() * 2; // 0 a 2 segundos
    return {
      'animation-duration': `${duration}s`,
      'animation-delay': `${delay}s`,
    };
  }
} 