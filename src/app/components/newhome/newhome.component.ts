import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newhome',
  imports: [],
  templateUrl: './newhome.component.html',
  styleUrl: './newhome.component.css'
})
export class NewhomeComponent implements OnInit {

  tasks: any[] = []; // Array to store tasks
  isEditing: boolean = false; // Flag for edit mode
  currentTaskId: number | null = null; // ID of the task being edited

  constructor() {}

  ngOnInit(): void {}

  // Function to add or update a task
  addOrUpdateTask(taskTitle: string, taskDescription: string, taskPriority: string): void {
    if (!taskTitle) {
      alert('Task title is required!');
      return;
    }

    if (this.isEditing && this.currentTaskId !== null) {
      // Update task
      const taskIndex = this.tasks.findIndex(task => task.id === this.currentTaskId);
      if (taskIndex !== -1) {
        this.tasks[taskIndex] = {
          id: this.currentTaskId,
          title: taskTitle,
          description: taskDescription,
          priority: taskPriority
        };
        this.isEditing = false;
        this.currentTaskId = null;
      }
    } else {
      // Add new task
      const newTask = {
        id: Date.now(), // Unique ID based on timestamp
        title: taskTitle,
        description: taskDescription,
        priority: taskPriority
      };
      this.tasks.push(newTask);
    }
  }

  // Function to edit a task
  editTask(taskId: number): void {
    const taskToEdit = this.tasks.find(task => task.id === taskId);
    if (taskToEdit) {
      this.isEditing = true;
      this.currentTaskId = taskId;
      // Pre-fill form with task details
      (document.getElementById('taskTitle') as HTMLInputElement).value = taskToEdit.title;
      (document.getElementById('taskDescription') as HTMLTextAreaElement).value = taskToEdit.description;
      (document.getElementById('taskPriority') as HTMLSelectElement).value = taskToEdit.priority;
      (document.getElementById('cancelEdit') as HTMLButtonElement).style.display = 'inline';
    }
  }

  // Function to cancel edit
  cancelEdit(): void {
    this.isEditing = false;
    this.currentTaskId = null;
    this.clearForm();
  }

  // Function to delete a task
  deleteTask(taskId: number): void {
    const confirmed = confirm('Are you sure you want to delete this task?');
    if (confirmed) {
      this.tasks = this.tasks.filter(task => task.id !== taskId);
    }
  }

  // Function to clear the form
  clearForm(): void {
    (document.getElementById('taskTitle') as HTMLInputElement).value = '';
    (document.getElementById('taskDescription') as HTMLTextAreaElement).value = '';
    (document.getElementById('taskPriority') as HTMLSelectElement).value = 'low';
    (document.getElementById('cancelEdit') as HTMLButtonElement).style.display = 'none';
  }
}
  