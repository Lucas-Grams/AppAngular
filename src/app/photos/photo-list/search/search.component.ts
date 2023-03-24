import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  
  @Output() onTyping = new EventEmitter<string>();

  @Input() value:string ='';

  filter:string = '';
  
  debounce: Subject<string> = new Subject<string>();

  ngOnInit(): void {
    this.debounce.pipe(debounceTime(300)).subscribe(filter => this.onTyping.emit(filter));
  }
  
  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

  onKeyUp(target : any) {
    if(target instanceof EventTarget) {
      var elemento = target as HTMLInputElement;
      this.debounce.next(elemento.value);
    }
  }

}
