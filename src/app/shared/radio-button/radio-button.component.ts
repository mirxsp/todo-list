import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent implements OnInit {
  @Input() checked: boolean = false;
  @Input() text: string = '';
  @Input() deletable: boolean = true;
  @Output() change = new EventEmitter<boolean>();
  @Output() deleteRequest = new EventEmitter<RadioButtonComponent>();

  public iconNames = new Map<boolean, IconProp>([
    [false, ["far", "circle"]],
    [true, ["fas", "circle-check"]]
  ]);

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.checked = !this.checked;
    this.change.emit(this.checked);
  }

  onDelete(){
    this.deleteRequest.emit(this);
  }

  getIcon(): IconProp {
    var icon = this.iconNames.get(this.checked);
    if (icon == undefined) {
      return ["far", "circle"];
    } else {
      return icon;
    }
  }
}
