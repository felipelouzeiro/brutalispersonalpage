import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() data: any;
  @Input() isBrutalistTheme: boolean = false;
  @Output() themeToggle = new EventEmitter<void>();

  emailText: string;

  constructor(private library: FaIconLibrary) {
    this.emailText = 'Clique para copiar';
  }
  
  ngOnInit(): void {
    this.library.addIcons(faLinkedin, faEnvelope);
    if (this.data && this.data.email) {
      this.emailText = this.data.email;
    }
  }

  copyEmail(): void {
    navigator.clipboard.writeText(this.data.email).then(() => {
      this.emailText = 'Copiado!';
      setTimeout(() => {
        this.emailText = this.data.email;
      }, 1500);
    });
  }

  toggleTheme(): void {
    this.themeToggle.emit();
  }
} 