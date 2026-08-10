import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../../shared/models/todo.model';

@Service()
export class TodoService {
  private http = inject(HttpClient);
  private apiUrl = 'https://jsonplaceholder.typicode.com/todos';

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.apiUrl}?_limit=5`);
  }
}
