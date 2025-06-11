import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../../components/about/about.component';
import { ExperiencesComponent } from '../../components/experiences/experiences.component';
import { SkillsComponent } from '../../components/skills/skills.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    AboutComponent,
    ExperiencesComponent,
    SkillsComponent,
    ProjectsComponent,
    FooterComponent
  ]
})
export class HomeComponent {
  @Input() data: any;
  @Input() isBrutalistTheme: boolean = false;
  @Output() themeToggle = new EventEmitter<void>();

  toggleTheme(): void {
    this.themeToggle.emit();
  }
} 