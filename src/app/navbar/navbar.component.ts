// 1- Importa o componente
import { Component } from '@angular/core';

import { TaskService } from '../tasks/shared/task.service';

// 2 -  define meta dados
@Component({
	selector: 'navbar',
	templateUrl: './navbar.component.html'
})

// 3 - Exporta
export class NavbarComponent{
	public constructor(private taskService: TaskService){
		this.taskService.getTasks()
			.subscribe((tasks) => console.log(tasks));
	}

}