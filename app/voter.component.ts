import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
   selector : 'vote',
   template : `
   <div class="compwidth">
   <h1 
   (click)="up()" 
   [class.highlighted]="myvote==1" 
   class="glyphicon glyphicon-menu-up vote-button">
   </h1>

  <h1 class="vote-count">{{voteCount + myvote}}</h1>

   <h1 
   (click)="down()" 
   [class.highlighted]="myvote==-1" 
   class="glyphicon glyphicon-menu-down vote-button">
   </h1>
   
   </div>
   `,
   styles : [`
     .compwidth {
         width : 20px;
         text-align : center;
         color : grey;
     }
     .highlighted {
         color : yellow;
     }
     .vote-button{
         cursor :  pointer;
     }
   `]
})
 
 export class VoterComponent{
     @Input() voteCount = 10;
     @Input() myvote = 0;

    @Output() vote = new EventEmitter();
    up(){
       if(this.myvote == 1)   return;
       else this.myvote++;
       this.vote.emit({myvote:this.myvote});
    }
    down(){
        if(this.myvote == -1)  return;
        else this.myvote--;
        this.vote.emit({myvote: this.myvote});
    }
 }