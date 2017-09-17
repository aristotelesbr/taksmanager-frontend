import { Component, Input } from '@angular/core';

import { Task } from '../shared/tasks.model';

@Component({
	selector: 'task-detail',
	templateUrl: './task-detail.component.html'
})

export class TaskDetailComponent{
	@Input() public task: Task;
}