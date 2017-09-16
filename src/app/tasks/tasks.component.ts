import { Component, OnInit } from '@angular/core';

import { Task } from './shared/tasks.model';


const TASKS: Array<Task> = [
	{ id: 1, title: 'Fazer tarefa1' },
	{ id: 2, title: 'Fazer tarefa2' },
	{ id: 3, title: 'Fazer tarefa3' },
	{ id: 4, title: 'Fazer tarefa4' },
	{ id: 5, title: 'Fazer tarefa5' },
	{ id: 6, title: 'Fazer tarefa6' }
];


@Component({
	selector: 'tasks',
	templateUrl: './tasks.component.html'
})

export class TasksComponent implements OnInit{
	public tasks;
	public selectedTask: Task;

	public constructor(){
	}

	public ngOnInit(){
		this.tasks = TASKS;
	}

	public onSelect(task: Task): void {
		this.selectedTask = task;
	}
	// Forma de definição mais curta
	// onSelect(task){
	// 	console.log('sdsd');
	// }
}