import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskservice: TaskService) {}

  ngOnInit(): void {
    this.taskservice.getTasks().subscribe((task) => (this.tasks = task));
  }

  deleteTask(task: Task) {
    this.taskservice
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      );
  }

  setToggleRemainder(task: Task) {
    task.reminder = !task.reminder;
    this.taskservice.updateTaskReminder(task).subscribe();
  }

  addNewTask(task: Task) {
    this.taskservice.postNewTask(task).subscribe((t) => this.tasks.push(t));
  }
}
