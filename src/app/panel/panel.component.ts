import { Component, OnInit } from "@angular/core";
import { Letters } from "./letters";

@Component({
  selector: "app-panel",
  templateUrl: "./panel.component.html",
  styleUrls: ["./panel.component.css"]
})
export class PanelComponent implements OnInit {
  letters = new Letters();
  numPanels = 1;
  completeBuffer: any[];
  completeText: any[] = [];
  text: string = "";
  isPlay = false;

  constructor() {}

  ngOnInit() {
    this.blankBuffer();
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async play() {
    if (!this.isPlay) {
      this.isPlay = true;
      while (this.isPlay) {
        this.pasar();
        await this.sleep(100);
      }
    }
  }

  pause() {
    this.isPlay = false;
  }

  borrar() {
    this.blankBuffer();
    this.fillText();
  }

  onKeyNum(event) {
    this.numPanels = event.target.value;
    this.blankBuffer();
    this.fillText();
  }

  onKeyText(event) {
    this.blankBuffer();
    this.text = `${event.target.value}`.toUpperCase();
    this.fillText();
  }

  blankBuffer() {
    this.completeBuffer = [];
    for (let i = 0; i < this.numPanels; i++) {
      this.completeBuffer.push(this.letters.getLetter(" "));
    }
  }

  fillText() {
    this.completeText = [];
    for (let i = 0; i < this.text.length; i++) {
      this.completeText.push(this.letters.getLetter(this.text[i]));
    }
  }

  pasar() {
    for (let i = 0; i < this.completeText.length; i++) {
      for (let j = 0; j < this.completeText[i].length; j++) {
        if (i == this.completeText.length - 1) {
          this.completeBuffer[this.completeBuffer.length - 1][j].push(
            this.completeText[0][j].shift()
          );
          for (let k = 0; k < this.completeBuffer.length; k++) {
            if (k != this.completeBuffer.length - 1) {
              this.completeBuffer[k][j].push(
                this.completeBuffer[k + 1][j].shift()
              );
            }
          }
          this.completeText[i][j].push(this.completeBuffer[0][j].shift());
        } else {
          this.completeText[i][j].push(this.completeText[i + 1][j].shift());
        }
      }
    }
  }
}
