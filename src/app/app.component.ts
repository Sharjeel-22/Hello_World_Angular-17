import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DemoComponent } from './demo/demo/demo.component';
import { CardModule } from 'primeng/card';
import { FilterComponent } from './demo/filter/filter/filter.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DemoComponent,FilterComponent,CardModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'World';
  owner = 'Sharjeel Rajpoot';
  searchedText = "";
}
