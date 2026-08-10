import { Component, inject, signal } from '@angular/core';
import { TodoService } from '../../core/services/todo';
import { Todo } from '../../shared/models/todo.model';
import { TodoItem } from '../todo-item/todo-item';

@Component({
  selector: 'app-todo-list',
  imports: [TodoItem],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList {
  private todoService = inject(TodoService);

  todos = signal<Todo[]>([]);
  loading = signal(true);

  ngOnInit(): void {
    this.todoService.getTodos().subscribe({
      next: (data) => {
        this.todos.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        console.error(`Error fetching todos`, err);
        this.loading.set(false);
      },
    });
  }

  onToggleComplete(id: number): void {
    this.todos.update((list) =>
      list.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );
  }

  onDeleteTodo(id: number): void {
    this.todos.update((list) => list.filter((t) => t.id !== id));
  }
}
