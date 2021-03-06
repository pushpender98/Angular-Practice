import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
@ViewChild("f", {static:true}) formValue: NgForm;
defaultSelectValue = 'pet';
answer='';
genders=["male", "female"];
  suggestUserName() {
    const suggestedName = 'Superuser';
    this.formValue.form.patchValue({userData: {username: suggestedName}});
  }

  onSubmit(){
    console.log(this.formValue)
  }
}
