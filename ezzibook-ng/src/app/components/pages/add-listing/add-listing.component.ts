import { Component, OnInit ,ViewChild} from '@angular/core';
import { NgForm} from '@angular/forms';
import { ListingServiceService } from 'src/app/listing-service.service';


interface Category {
  id: string;
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.scss']
})
export class AddListingComponent implements OnInit {
@ViewChild('f') signupForm : NgForm

categories: Category[] = [
  {id: '1' ,value: 'carpenter', viewValue: 'Carpenter'},
  {id: '2',value: 'painter', viewValue: 'Painter'},
  {id: '3',value: 'cleaner', viewValue: 'Cleaner'}
];
categories2: Category[] = [
  {id: '1' ,value: 'carpenter', viewValue: 'Carpenter'},
];
compareFn(c1: Category, c2:Category): boolean {     
  return c1 && c2 ? c1.id === c2.id : c1 === c2; 
}
user = {
  companyname : '',
  category:'',
  description : '',
  services: '',
   email : '',
   phone : '',
   address: '',
   city : '',
   Website:'',
   bio : '',
   Facebook:'',
   Twitter:'',
   Linkedin:'',
};
fk = new FormData();
  constructor(private service : ListingServiceService) { }

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

  this.user.companyname = this.signupForm.value.companyname;
  this.user.category= this.signupForm.value.category;
   this.user.description= this.signupForm.value.description;
   this.user.services= this.signupForm.value.services;
   this.user.email= this.signupForm.value.email;
   this.user.phone= this.signupForm.value.phone;
   this.user.city= this.signupForm.value.city;
   this.user.address= this.signupForm.value.address;
   this.user.bio= this.signupForm.value.bio;
   this.user.Website= this.signupForm.value.Website;
   this.user.Facebook= this.signupForm.value.Facebook;
   this.user.Twitter= this.signupForm.value.Twitter;
   this.user.Linkedin= this.signupForm.value.Linkedin;
 
  var val = {
    companyname : this.user.companyname,
    category: "carpenter",
    description: this.user.description,
    services: this.user.services,
    email: this.user.email,
    phone: this.user.phone,
    city: this.user.city,
    address: this.user.address,
    bio: this.user.bio,
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
