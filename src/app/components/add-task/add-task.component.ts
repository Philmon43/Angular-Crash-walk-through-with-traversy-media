import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  'text': string;
  'day': string;
  reminder: boolean = false;
  'showAddTask': boolean;
  'subscribtion': Subscription;

  constructor(private uiservice: UiService) {
    this.subscribtion = this.uiservice
      .onToggle()
      .subscribe((v) => (this.showAddTask = v));
  }

  ngOnInit(): void {}

  onSubmit() {
    if (!this.text) {
      return alert('Please add a task!');
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    //emmit event with new task
    this.onAddTask.emit(newTask);

    //clear add task form after submit
    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
