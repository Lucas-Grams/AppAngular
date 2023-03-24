import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PhotoListComponent } from './photo-list.component';
import { LoadButtonComponent } from './load-button/load-button.component';
import { FilterByDescription } from './filter-by-description.pipe';
import { PhotoModule } from '../photo/photo.module';
import { PhotosComponent } from './photos/photos.component';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { SearchComponent } from './search/search.component';
import { DarkOnHouverModule } from 'src/app/shared/components/directives/dark-on-houver.module';



@NgModule({
  declarations: [
    PhotoListComponent, 
    PhotosComponent,
    LoadButtonComponent,
    FilterByDescription,
    SearchComponent,
  ],
  imports: [
    CommonModule, 
    PhotoModule,
    CardModule,
    DarkOnHouverModule
  ]
})
export class PhotoListModule { }
