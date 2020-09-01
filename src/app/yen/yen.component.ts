import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-yen",
  templateUrl: "./yen.component.html",
})
export class YenComponent {
  usdDisplayText: number;
  @Input() yen: number = 0;
  @Output() fromYen = new EventEmitter<number>();
  constructor() {}

  convertToUsd(newYen) {
    this.usdDisplayText = newYen * 0.0088;
    this.fromYen.emit(this.usdDisplayText);
  }

  getUsdDisplayText() {
    return this.usdDisplayText;
  }
}
