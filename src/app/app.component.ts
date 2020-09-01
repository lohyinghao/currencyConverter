import { Component } from "@angular/core";

@Component({
  selector: "app",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  yen: number;
  usd: number;
  msgFromYen(newUsd) {
    this.usd = newUsd;
  }

  msgFromUsd(newYen) {
    this.yen = newYen;
  }
}
