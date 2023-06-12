import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  itemId: any   
  itemName:any;
itemEmail:any   
itemPhone:any
itemLocation:any
lists =[]
   constructor(private route: ActivatedRoute, private router: Router){}

   ngOnInit(){
    this.route.params.subscribe( param=> {
      console.log('ssasa',param)
      this.itemId = +param['id'];
      this.itemName = param['name'];
      this.itemEmail = param['email'];
      this.itemPhone = param['phone'];
      this.itemLocation = param['location'];
    });
   }

     saveItem(){
      console.log('Updating item...');
      console.log('Item Name:', this.itemName);
      console.log('Item Name:', this.itemEmail);

      console.log('Item Name:', this.itemPhone);

      console.log('Item Name:', this.itemLocation);
      // const storedItems = JSON.parse(localStorage.getItem('lists') || '[]');
      const updatedItem = {
        id: this.itemId,
        name: this.itemName,
        email: this.itemEmail,
        phone: this.itemPhone,
        location: this.itemLocation
      };
      console.log("3222223232", updatedItem)
      localStorage.setItem('updatedItem', JSON.stringify(updatedItem));
      this.router.navigate(['/create'], {
        queryParams: updatedItem
      });      // this.router.navigate(['/']);

     }

  

     goBack() {
      this.router.navigate(['/create']);
    }
}



























