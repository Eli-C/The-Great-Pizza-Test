import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-view-elements',
  templateUrl: './view-elements.component.html',
  styleUrls: ['./view-elements.component.css']
})
export class ViewElementsComponent implements OnInit {

  @Input() canDelete: boolean = false;
  @Input() canEdit: boolean = false;
  @Input() entityName: string;
  @Input() descriptionPerElement: (element) => {};
  @Input() elementsToDisplay: any[];
  @Input() imageURL: string;
  @Output() onEdit = new EventEmitter();
  @Output() onDelete = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  onEditClicked(entityClicked) {
    this.onEdit.emit(entityClicked);
  }
  OnDeleteClicked(entityClicked) {
    this.onDelete.emit(entityClicked);
  }

}
