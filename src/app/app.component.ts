import { Component, Renderer2, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PortfolioDataService } from './core/services/portfolio-data.service';
import { HomeComponent } from './features/home/home.component';

@Component({
  selector: 'app-root',
  template: '<app-home [data]="portfolioData" [isBrutalistTheme]="isBrutalistTheme" (themeToggle)="toggleTheme()"></app-home>',
  standalone: true,
  imports: [HomeComponent]
})
export class AppComponent implements OnInit {
  portfolioData: any;
  isBrutalistTheme = false;

  constructor(
    private portfolioDataService: PortfolioDataService,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.portfolioData = this.portfolioDataService.getData();
  }

  ngOnInit(): void {
    // Default theme doesn't need a class
  }

  toggleTheme(): void {
    this.isBrutalistTheme = !this.isBrutalistTheme;
    if (this.isBrutalistTheme) {
      this.renderer.addClass(this.document.body, 'theme-brutalist');
    } else {
      this.renderer.removeClass(this.document.body, 'theme-brutalist');
    }
  }
} 