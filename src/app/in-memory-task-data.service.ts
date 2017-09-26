import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()

export class InMemoryTaskDataService  implements InMemoryDbService {
	
	public createDb(){
		let tasks = [
			{ id: 1, title: 'Fazer tarefa1' },
			{ id: 2, title: 'Fazer tarefa2' },
			{ id: 3, title: 'Fazer tarefa3' },
			{ id: 4, title: 'Fazer tarefa4' },
			{ id: 5, title: 'Fazer tarefa5' },
			{ id: 6, title: 'Fazer tarefa6' }
		];

		return { tasks }
	}
}