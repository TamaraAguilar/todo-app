import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./todos/todo-list/todo-list').then((m) => m.TodoList),
  },
];
