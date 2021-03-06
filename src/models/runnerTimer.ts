import { DateTime } from "../../node_modules/ionic-angular/umd";
import { lapTime } from "./lapTime";
import { runner } from "./runner";

export class runnerTimer {
    runner:runner = null;
    finalTime: DateTime = null;
    finalTimeDisplay: string = null;
    previousLapTime: number = null;
    currentSplit: string = null;
    laps:Array<lapTime> = null;
    isRunning:boolean = false;
    place:number = null;

    constructor(){
        this.laps = new Array<lapTime>();
    }
  }