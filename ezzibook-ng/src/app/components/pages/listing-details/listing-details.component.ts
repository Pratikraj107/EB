import { Component, OnInit } from '@angular/core';
import {CategoryIdService} from 'src/app/category-id.service';
import { ListingServiceService } from 'src/app/listing-service.service';
import { Listing } from 'src/app/Listing.model';
@Component({
  selector: 'app-listing-details',
  templateUrl: './listing-details.component.html',
  styleUrls: ['./listing-details.component.scss']
})
export class ListingDetailsComponent implements OnInit {
  id: string;
  ProfileList:any=[];
  constructor(private service : ListingServiceService,private cid :CategoryIdService) { }
  ngOnInit(): void {
    this.cid.currentId.subscribe(id =>this.id= id);
    console.log(this.id);
    this.service.getProfileListId(this.id).subscribe(data=>{
  
      this.ProfileList.push(data);
 
      console.log(this.ProfileList);
      });
  }
  getProfileListId(){
    this.service.getProfileListId(this.id).subscribe(data=>{
    this.ProfileList = data;
    console.log(this.ProfileList);
    });
  }

}
