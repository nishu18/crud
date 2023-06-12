import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  itemId: number | null=null;   
  itemName:any;
itemEmail:any   
itemPhone:any
itemLocation:any
  lists: any[] = []

constructor(private route: ActivatedRoute, private router: Router){}

ngOnInit() {
   
  this.route.queryParams.subscribe((params) => {
   console.log(params)
   console.log(this.lists);
    
  });


  const storedLists = localStorage.getItem('lists');
  if (storedLists) {
    this.lists = JSON.parse(storedLists);
  }
  console.log('Lists:', this.lists);

}
addTask( name: string, email: string, phone: string, location: string) {
  const newItem = {
    id: this.lists.length + 1,
    name: name ,
    email: email,
    phone: phone,
    location: location
  };
  this.lists.push(newItem);
  localStorage.setItem('lists', JSON.stringify(this.lists));
  console.log('Lists after adding item:', this.lists);
}
deleteTask(id: number) {
  this.lists = this.lists.filter(item => item.id !== id);
  localStorage.setItem('lists', JSON.stringify(this.lists));
}
}













