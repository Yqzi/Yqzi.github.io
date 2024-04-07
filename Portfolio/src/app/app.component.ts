import {  Component, ModuleWithProviders, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ExpCardComponent } from './exp-card/exp-card.component';
import { User } from './user.model';
import { Skills } from "./skills";
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ExpDetailsComponent } from './exp-details/exp-details.component';
import { MatIconModule } from '@angular/material/icon';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { AppRoutingModule } from './app.routing.module';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    CommonModule,
    RouterOutlet,
    ExpCardComponent,
    NgCircleProgressModule,
    ExpDetailsComponent,
    MatIconModule,
    ContactFormComponent,
    AppRoutingModule,
  ],
  providers: [
    (
      NgCircleProgressModule.forRoot() as ModuleWithProviders<NgCircleProgressModule>
    ).providers!,
  ],
})
export class AppComponent implements OnInit {
  skills = [
    ['FLUTTER', 80],
    ['ANGULAR', 45],
    ['PYTHON', 60],
    ['JAVASCRIPT', 45],
    ['FIREBASE', 60],
    ['TAILWIND', 45],
    ['SQL', 50],
    ['TYPESCRIPT', 45],
  ];

  user: User;
  options: Skills;
  options2: Skills;
  constructor(private activatedRoute: ActivatedRoute) {
    this.user = User.Yusuf();
    this.options = Skills.getOptions('#4882c2');
    this.options2 = Skills.getOptions('#9b834d');
  }

  ngOnInit(): void {
    this.activatedRoute.fragment.subscribe((value) => {
      this.jumpTo(value);
    });
  }

  jumpTo(section) {
    document.getElementById(section).scrollIntoView({behavior: 'smooth'})
  }
}
