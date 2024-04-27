import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule,InputTextModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  filter = model.required({
    alias:"filter"
  })

}
