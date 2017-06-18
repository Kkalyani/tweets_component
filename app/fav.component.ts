import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'fav',
    templateUrl : 'app/fav.template.html',
    styles : [`
       .glyphicon-star {
           color : orange;
       }
    `]
   
})
export class FavComponent {
   @Input() isFav = false;
   @Output() change = new EventEmitter();

     onClick(){
         this.isFav = !this.isFav;
         this.change.emit({ newValue : this.isFav});
     }
}