import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: String = 'Task Tracking';
  'showAddTask': boolean;
  'subscribtion': Subscription;

  constructor(private uiservice: UiService) {
    this.subscribtion = this.uiservice
      .onToggle()
      .subscribe((v) => (this.showAddTask = v));
  }

  ngOnInit(): void {}
  toggleAddTask() {
    this.uiservice.toggleAddTask();
  }
}
