import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud';
  resgister:any

  constructor(private formB: FormBuilder ){}

  ngOnInit(){
    // this.setForm()
  }
  // setForm(){
  //   this.resgister=this.formB.group({
  //     id: [0],
  //     title: ['',  Validators.required],
  //     firstName: ['', Validators.required, ],
  //     lastName: ['', Validators.required, ],
  //     email: ['', Validators.required, ],
  //     dob: ['', Validators.required, ],
  //     password: ['', Validators.required],
  //     confirmPassword: ['', Validators.required],
  //     accepTerm:[false, Validators.required]



  //   })
  }

