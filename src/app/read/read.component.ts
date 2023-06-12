import { Component } from '@angular/core';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent {
  lists: any[] = [];
  isEditing: boolean = false;
  editedTaskId: number | null = null;
  editedTaskName: string = '';

  ngOnInit() {
    const storedLists = localStorage.getItem('lists');
    if (storedLists) {
      this.lists = JSON.parse(storedLists);
    }
  }

  addTask(item: any) {
    this.lists.push({ id: this.lists.length + 1, name: item });
    localStorage.setItem('lists', JSON.stringify(this.lists));
    console.log(this.lists);
  }

  editTask(item: any) {
    this.isEditing = true;
    this.editedTaskId = item.id;
    this.editedTaskName = item.name;
  }

  saveTask() {
    const editedItemIndex = this.lists.findIndex(item => item.id === this.editedTaskId);
    if (editedItemIndex !== -1) {
      this.lists[editedItemIndex].name = this.editedTaskName;
      localStorage.setItem('lists', JSON.stringify(this.lists));
      this.isEditing = false;
      this.editedTaskId = null;
      this.editedTaskName = '';
    }
  }
}


