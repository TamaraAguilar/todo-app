import { Component, input, output } from '@angular/core';
import { Todo } from '../../shared/models/todo.model';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-todo-item',
  imports: [MatCardModule, MatCheckboxModule, MatButtonModule, MatIconModule],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.css',
})
export class TodoItem {
  todo = input.required<Todo>();
  toggleComplete = output<number>();
  deleteTodo = output<number>();

  onToggle(): void {
    this.toggleComplete.emit(this.todo().id);
  }

  onDelete(): void {
    this.deleteTodo.emit(this.todo().id);
  }
}
