import { Injectable } from "@angular/core";
import { type NewTask } from "./new-task/new-task.model";

@Injectable({ providedIn: 'root' })
export class TasksService {

  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced feature of Angular and how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Build first prototype',
      summary:
        'Learn all the basic and advanced feature of Angular and how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced feature of Angular and how to apply them.',
      dueDate: '2025-12-31',
    },
  ];

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(newTask: NewTask, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: newTask.title,
      summary: newTask.summary,
      dueDate: newTask.date,
    })
    this.saveTasks();
  }


  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id != id);
    this.saveTasks();

  }

  private saveTasks(){
    // We only store string format data in localstorage that's why need to convert it into string
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
  }
}