# Overview:
1. Provide code that simulates an elevator. You are free to use any language.
2. Upload the completed project to GitHub for discussion during interview.
3. Document all assumptions and any features that weren’t implemented.
4. The result should be an executable, or script, that can be run with the following inputs and generate the following outputs.
    - Inputs: [list of floors to visit] (e.g. elevator start=12 floor=2,9,1,32)
    - Outputs: [total travel time, floors visited in order] (e.g. 560 12,2,9,1,32)
    - Program Constants: Single floor travel time: 10

## Assumptions && Missing Features:
1. The elevator must complete its journey before accepting new destinations.
2. The elevator accepts stops in the order it received them without changing up the order to optimize for ride efficiency.
3. The elevator takes in a list of stops and executes on those stops before accepting new stops.
4. There is no ability for the elevator to stop and take in a new single stop before proceeding to complete its precompiled journey.
5. If it did receive a new stop there is no way for the elevator to check if that stop could potentially be next if its still lower then the following floors.
6. The elevator doesn't do any prioritization when creating the journey (eg. it should probably order the stops if its a fresh list).
7. There is no way to make the elevator faster after its been created.
8. There should be an ability to set a priority ride, i.e. if a maintenance person needs to ride the elevator and skip some stops.
9. Missing the the ability for a rider to call out and have it safely return to the first floor.
10. The time is assumed to be in seconds.
11. It is assumed that the speed doesn't change at all even if there is large gap between the current floor and the next. 

## How to Run:
1. Clone repo
2. Run `npm install` in console
3. Run `npm start` in console
3. Look at output in console