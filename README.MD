# Overview:
1. Provide code that simulates an elevator. You are free to use any language.
2. Upload the completed project to GitHub for discussion during interview.
3. Document all assumptions and any features that weren’t implemented.
4. The result should be an executable, or script, that can be run with the following inputs and generate the following outputs.
    - Inputs: [list of floors to visit] (e.g. elevator start=12 floor=2,9,1,32)
    - Outputs: [total travel time, floors visited in order] (e.g. 560 12,2,9,1,32)
    - Program Constants: Single floor travel time: 10

## Assumptions:
1. There is only one elevator ever running.
2. The elevator takes in a list of stops and executes on those stops before accepting new stops.
3. There is no ability for the elevator to stop and take in a new single stop before proceeding to complete its precompiled journey
4. If it did receive a new stop there is no way for the elevator to check if that stop could potentially be next if its still lower then the following floors.
5. The elevator doesn't do any prioritization when creating the journey (eg. it should probably order the stops if its a fresh list)
6. There is no way to make the elevator faster (or upgraded) after its been created
7. 

## How to Run:
1. clone repo
2. Run `npm install` in console
3. Run `npm start` in console
3. Look at output in console.