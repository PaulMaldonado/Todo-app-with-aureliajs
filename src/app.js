export class App {
  constructor() {
    this.heading = 'Todos App',
    this.title = '',
    this.description = '',
    this.category = '',

    this.todos = []
  }

  addTodo() {
    if(this.title && this.description && this.category) {
      this.todos.push({
        title: this.title,
        description: this.description,
        category: this.category
      })

      this.title = '',
      this.description = '',
      this.category = ''
    }
  }

  removeTodo(todo) {
    let index = this.todos.indexOf(todo);

    if(index !== -1) {
      this.todos.splice(index, 1)
    }
  }
}
