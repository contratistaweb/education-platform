import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from "../../../../core/interfaces/course";

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card!: Course;
  @Input() showCardActions: boolean = true;
  @Output() showModal = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }


  showModalTemary(id: string) {
    this.showModal.emit(id);
    console.log(id)
  }
}
