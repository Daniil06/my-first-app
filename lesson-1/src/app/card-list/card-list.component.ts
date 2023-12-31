import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ITodo} from "../core/models/ITodo.model";

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent {
  @Input() todoList: ITodo[] | undefined;
  @Output() deleteCard: EventEmitter<ITodo> = new EventEmitter<ITodo>()
  @Output() editCard: EventEmitter<ITodo> = new EventEmitter<ITodo>()

onDelete(todo: ITodo) {
  this.deleteCard.emit(todo)
  console.log('todo in todoListComponent', todo)
  }

  onEdit(todo: ITodo) {
    this.editCard.emit(todo)
  }
}
