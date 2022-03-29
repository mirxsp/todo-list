import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() items!: string[];
  @Output() select = new EventEmitter<Number>();
  expanded: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  onExpand() {
    if (this.items.length != 0) {
      this.expanded = !this.expanded;
    }
  }

  onSelect(id: Number) {
    this.select.emit(id);
  }
}
