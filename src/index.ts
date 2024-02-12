interface IElevator {
  multiFloorStop(floors: number[]): number[];
  travelTime(startFloor: number, endFloor: number): number;
  singleFloorDuration: number;
}

class Elevator implements IElevator {
  singleFloorDuration: number;
  visitedFloors: number[] = [];
  floorStops: number[] = [];

  /**
   * Create the elevator allowing for the speed to be set (assuming this in seconds)
   * @param speed
   */
  constructor(speed = 10) {
    this.singleFloorDuration = speed;
  }

  /**
   * This takes in an array of floors (numbers) and scrubs the floors to make sure
   * they are no duplicates. This will then return all floors you have submitted
   * for the trip.
   * @param floors
   * @returns
   */
  public multiFloorStop(floors: number[]): number[] {
    const uniqueStops: number[] = [...new Set(floors)];
    this.floorStops = [...new Set([...this.floorStops, ...uniqueStops])];
    return this.floorStops;
  }

  /**
   * Takes in a number of stops and returns the duration.
   * @param numOfStops
   * @returns
   */
  public travelTime(startFloor: number, endFloor: number): number {
    const start: number = typeof (startFloor) === "number" ? startFloor : 0;
    const end: number = typeof (endFloor) === "number" ? endFloor : 0;
    const floorDiff: number = Math.abs(start - end);
    return this.singleFloorDuration * floorDiff;
  }

  /**
   * This runs the elevator and has an optional starting point for the elevator.
   * eg. If you want to start from floor 10 the function will start from floor 10 iterate
   * to the end. Then start from the beginning of the array back to your starting index.
   * This returns the total journey time and the array of stops in order of completion.
   * @param startPoint
   * @returns
   */
  public runElevator(startPoint?: number): [number, number[]] {
    let timeCounter = 0;
    let index = 0;

    if (startPoint !== undefined) {
      index = this.floorStops.indexOf(startPoint);
    }

    for (let i = index; i < this.floorStops.length; i++) {
      this.visitedFloors.push(this.floorStops[i]);
      timeCounter += this.travelTime(
        this.floorStops[i],
        this.floorStops[i + 1]
      );
    }

    for (let i = 0; i < index; i++) {
      this.visitedFloors.push(this.floorStops[i]);
      timeCounter += this.travelTime(
        this.floorStops[i],
        this.floorStops[i + 1]
      );
    }

    this.floorStops = [];
    return [timeCounter, [...this.visitedFloors]];
  }
}

/*
 I am instating two elevators, to show one that has a specified
 starting point and one that just starts from the beginning of the
 array of floors it received.  You will notice in the output the time
 it takes is the same but the order is slightly different for the 
 floors visited.
*/
const elevator: Elevator = new Elevator();
const elevatorWithStartPoint: Elevator = new Elevator();
const floorToStop: number[] = [
  12, 4, 8, 9, 10, 12, 12, 14, 9, 7, 6, 8, 14, 16, 15, 19,
];

elevator.multiFloorStop(floorToStop);
elevatorWithStartPoint.multiFloorStop(floorToStop);

const elevatorRun = elevator.runElevator();
const elevatorRunStartPoint = elevatorWithStartPoint.runElevator(7);

console.log('Elevator run with no start point specified: ', elevatorRun);
console.log('Elevator run starting at the 7th floor', elevatorRunStartPoint);
