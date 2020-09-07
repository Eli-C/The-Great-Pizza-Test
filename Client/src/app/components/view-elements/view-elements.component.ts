import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-elements',
  templateUrl: './view-elements.component.html',
  styleUrls: ['./view-elements.component.css']
})
export class ViewElementsComponent implements OnInit {

  @Input() entityName: string;
  @Input() descriptionPerElement: (element) => {};
  @Input() elementsToDisplay: any[];
  @Input() imageURL: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
