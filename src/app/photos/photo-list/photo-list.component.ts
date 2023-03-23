import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../photo/photo';

import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = []; 

  filter:string = '';
  
  constructor(
    private photoService: PhotoService,
    private activatedRoute: ActivatedRoute
  ) { }

  onKeyUp(target : any) {
    if(target instanceof EventTarget) {
      var elemento = target as HTMLInputElement;
      this.filter = elemento.value;
    }
  }

  ngOnInit(): void {

      const userName = this.activatedRoute.snapshot.params['userName'];

      this.photoService
        .listFromUser(userName)
        .subscribe(photos => this.photos = photos);
  }
}
