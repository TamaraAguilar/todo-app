# Todo List App

**Versión de Angular:** Angular 22.x

## Ejecución

```bash
npm install
ng serve
```

Luego abrir `http://localhost:4200`.

## Estructura del proyecto

- `core/services`: `TodoService`, maneja las peticiones HTTP a JSONPlaceholder.
- `shared/models`: interfaz `Todo` compartida por los componentes.
- `todos/`: componentes (`todo-list`, `todo-item`, `todo-form`) comunicados vía `input()`/`output()`.
