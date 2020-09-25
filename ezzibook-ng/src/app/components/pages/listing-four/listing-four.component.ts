import { Component, OnInit,Output,EventEmitter , Input} from '@angular/core';
import { ListingServiceService } from 'src/app/listing-service.service';
import {CategoryIdService} from 'src/app/category-id.service';

@Component({
  selector: 'app-listing-four',
  templateUrl: './listing-four.component.html',
  styleUrls: ['./listing-four.component.scss']
})
export class ListingFourComponent implements OnInit {

  constructor(private service : ListingServiceService, private cid :CategoryIdService) { }
  ProfileList: any= [];
   id : string;
   @Output() IdEvent = new EventEmitter<string>();
  ngOnInit(): void {
    this.service.getProfileList().subscribe(data=>{
      this.ProfileList = data;
      console.log(this.ProfileList);
      });
     this.cid.currentId.subscribe(id =>this.id= id);
  }
  getProfileList(){
    this.service.getProfileList().subscribe(data=>{
    this.ProfileList = data;
    console.log(this.ProfileList);
    });
  }
  onSaveId(id){
    //this.id = (<HTMLInputElement>event.target).value;
    this.cid.saveid(id);
    console.log(id);
    this.id = id;
  }
}
