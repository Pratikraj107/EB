import { Component, OnInit ,ViewChild} from '@angular/core';
import { NgForm} from '@angular/forms';
import { ProfileServiceService } from 'src/app/profile-service.service';


@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
@ViewChild('f') signupForm : NgForm

user = {
   firstname : '',
   lastname : '',
   email : '',
   phone : '',
   city : '',
   Website:'',

   Facebook:'',
   Twitter:'',
   Linkedin:'',
};
fk = new FormData();
  constructor(private service : ProfileServiceService) { }

  ProfileList: any= [];
  ngOnInit(): void {
    this.getProfileList();
  }
  selectedFile : File= null;
  onFileSelected(event){
    console.log(event);
   this.selectedFile = <File>event.target.files[0];  
   this.fk.append('productImage', this.selectedFile, this.selectedFile.name);
  }
  
   

onSubmit(){
  console.log(this.signupForm);

  this.user.firstname = this.signupForm.value.firstname;
   this.user.lastname= this.signupForm.value.lastname;
  this.user.email= this.signupForm.value.email;
    this.user.phone= this.signupForm.value.phone;
      this.user.city= this.signupForm.value.city;
      this.user.Website= this.signupForm.value.Website;
      
      this.user.Facebook= this.signupForm.value.Facebook;
      this.user.Twitter= this.signupForm.value.Twitter;
      this.user.Linkedin= this.signupForm.value.Linkedin;
 
  var val = {
    firstname : this.user.firstname,
    lastname: this.user.lastname,
    email: this.user.email,
    phone: this.user.phone,
    city: this.user.city,
    Webisite: this.user.Website,
    
    FaceBook: this.user.Facebook,
    Twitter: this.user.Twitter,
    Linkedin: this.user.Linkedin
   
  };
  this.service.postProfile(val).subscribe(res=>{

  });

 
}
getProfileList(){
  this.service.getProfileList().subscribe(data=>{
  this.ProfileList = data;
  console.log(this.ProfileList);
  });
}
}
