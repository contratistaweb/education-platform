import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-temary-modal',
  templateUrl: './temary-modal.component.html',
  styleUrls: ['./temary-modal.component.scss']
})
export class TemaryModalComponent implements OnInit {
@Input() id: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
