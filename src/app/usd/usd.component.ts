import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-usd",
  templateUrl: "./usd.component.html",
})
export class USDComponent {
  yenDisplayText: number;
  @Input() usd: number;
  @Output() fromUsd = new EventEmitter<number>();
  constructor() {}

  convertToYen(newUsd) {
    this.yenDisplayText = newUsd * 113;
    this.fromUsd.emit(this.yenDisplayText);
  }

  getYenDisplayText() {
    return this.yenDisplayText;
  }
}
