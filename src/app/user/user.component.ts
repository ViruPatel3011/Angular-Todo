import {
  Component,
  computed,
  EventEmitter,
  Input,
  input,
  Output,
  output,
} from '@angular/core';
import { type User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})

export class UserComponent {
  // Decorator based approach

  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;

  @Output() select = new EventEmitter<string>();

  // select = output<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  // Signal  based approach

  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(()=>{
  //   return 'assets/users/' + this.avatar();
  // });

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
