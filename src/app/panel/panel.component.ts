import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-panel",
  templateUrl: "./panel.component.html",
  styleUrls: ["./panel.component.css"]
})
export class PanelComponent implements OnInit {
  buffer = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 0, 0],
    [0, 1, 1, 0, 0, 1, 1, 0],
    [0, 1, 1, 0, 0, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 0, 0, 1, 1, 0],
    [0, 1, 1, 0, 0, 1, 1, 0],
    [0, 1, 1, 0, 0, 1, 1, 0]
  ];

  constructor() {}

  ngOnInit() {
    /*let bufferAux = this.buffer;
    for (let i = 1; i < this.buffer.length; i++) {
      for (let j = 1; j < this.buffer.length; j++) {
        this.buffer[i][j] = bufferAux[j][i];
      }
    }*/
  }
}
