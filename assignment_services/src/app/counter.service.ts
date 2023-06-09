export class CounterService {
  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;

  incrementActiveToInactive() {
    this.activeToInactiveCounter++;
    console.log("ActiveToInactiveCounter := " + this.activeToInactiveCounter);
  }

  incrementInactiveToActive() {
    this.inactiveToActiveCounter++;
    console.log("InactiveToActiveCounter := " + this.inactiveToActiveCounter);
  }

}
