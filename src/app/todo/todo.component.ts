import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  editedTaskId: number | null = null;
  isEditing: boolean = false;
  editedTaskName: string = '';
  taskName:string="";




list:any[]=[]

  constructor(){}
  ngOnInit(){}

  addTask(){
   
    this.list.push({id:this.list.length+1, name:this.taskName})
    this.taskName=""
    console.log(this.list)

  }
  deleteTask(id:number){
    this.list = this.list.filter(item => item.id !== id);

  }

  editTask(item:any){
    this.isEditing=true;
    this.editedTaskId=item.id
    this.editedTaskName=item.name

  }
  saveTask(){
    const editItemIndex=this.list.findIndex(item=>item.id===this.editedTaskId)
    if(editItemIndex !==-1){
      this.list[editItemIndex].name=this.editedTaskName
      this.isEditing=false
      this.editedTaskId=null;
      this.editedTaskName=""
    }
    console.log("sjaihs" , this.list)
  }
}
