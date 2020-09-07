import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-entity-creator',
  templateUrl: './entity-creator.component.html',
  styleUrls: ['./entity-creator.component.css']
})
export class EntityCreatorComponent implements OnInit {

  @Output() onSave = new EventEmitter();
  @Input() entityName : string;
  @Input() isPizza : boolean = false;
  
  nameControl = new FormControl('');
  ingredientsControl = new FormControl([]);

  constructor() { 
  }

  ngOnInit(): void {
  }

  saveEntity() {
    this.onSave.emit({name : this.nameControl.value, ingredients : this.ingredientsControl.value})
  }

}
