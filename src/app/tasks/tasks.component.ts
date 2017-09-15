import { Component, OnInit } from '@angular/core';

const TASKS: Array<any> = [
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

	public constructor(){
	}

	public ngOnInit(){
		this.tasks = TASKS;
	}
}