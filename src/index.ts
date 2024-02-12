interface IElevator {
  multiFloorStop(floors: number[]): number[];
  travelTime(numOfStops: number): number;
  singleFloorDuration: number;
}

class Elevator implements IElevator {
  singleFloorDuration: number;
  visitedFloors: number[] = [];
  floorStops: number[] = [];

  constructor(speed = 10) {
    this.singleFloorDuration = speed;
  }

  public multiFloorStop(floors: number[]): number[] {
    const uniqueStops: number[] = [...new Set(floors)];
    this.floorStops = [...new Set([...this.floorStops, ...uniqueStops])];
    return this.floorStops;
  }

  public travelTime(numOfStops: number): number {
    return this.singleFloorDuration * numOfStops;
  }

  public runElevator(startPoint?: number): number[] {
    const numOfStops: number = this.floorStops.length;
    let index = 0;

    if (startPoint !== undefined) {
      index = this.floorStops.indexOf(startPoint);
    }

    for (let i = index; i < numOfStops; i++) {
      this.visitedFloors.push(this.floorStops[i]);
    }

    for (let i = 0; i < index; i++) {
      this.visitedFloors.push(this.floorStops[i]);
    }

    this.floorStops = [];
    return [this.travelTime(numOfStops), ...this.visitedFloors];
  }
}

const elevator: Elevator = new Elevator();
const elevatorWithStartPoint: Elevator = new Elevator();
const floorToStop: number[] = [
  12, 4, 8, 9, 10, 12, 12, 14, 9, 7, 6, 8, 14, 16, 15, 19,
];

elevator.multiFloorStop(floorToStop);
elevatorWithStartPoint.multiFloorStop(floorToStop);

const elevatorRun = elevator.runElevator();
const elevatorRunStartPoint = elevatorWithStartPoint.runElevator(7);

console.log(elevatorRun);
console.log(elevatorRunStartPoint);
