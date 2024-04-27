import { Component,computed, inject, input} from '@angular/core';
import { TableModule } from 'primeng/table';
import { SnackService } from '../service/snacks.sarvice';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [TableModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss'
})
export class DemoComponent {
  filteredText = input.required({
    transform: (value: string) => value.toLocaleLowerCase(),
    alias: 'searchedText'
  });
  snackService = inject(SnackService);
  snacks = this.snackService.snacks;
  filteredSnacks = computed(() => this.snacks().filter(s => s.name.includes(this.filteredText())));
}
