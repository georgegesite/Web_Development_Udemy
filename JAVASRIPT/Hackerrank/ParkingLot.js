class ParkingLot {
    constructor(slots) {
        this.slots = slots;
        this.size = 0;
        this.slotStatus = Array(slots).fill(null);
    }

    park(carId) {
        if (this.size >= this.slots) {
            return false; // Parking is full
        }

        // Find the first empty slot and park the car
        const slotIndex = this.slotStatus.indexOf(null);
        this.slotStatus[slotIndex] = carId;
        this.size++;
        return true;
    }

    getSlots() {
        return this.slotStatus.slice();
    }

    remove(carId) {
        const carIndex = this.slotStatus.indexOf(carId);
        if (carIndex !== -1) {
            this.slotStatus[carIndex] = null;
            this.size--;
            return true;
        }
        return false; // Car not found
    }
}

// Example usage:
const parkingLot = new ParkingLot(5); // Create a parking lot with 5 slots

console.log(parkingLot.park("Car1")); // true
console.log(parkingLot.park("Car2")); // true
console.log(parkingLot.park("Car3")); // true
console.log(parkingLot.park("Car4")); // true
console.log(parkingLot.park("Car5")); // true
console.log(parkingLot.park("Car6")); // false (parking is full)

console.log(parkingLot.getSlots()); // [ "Car1", "Car2", "Car3", "Car4", "Car5", null, null, null, null, null ]

console.log(parkingLot.remove("Car3")); // true (Car3 removed)
console.log(parkingLot.remove("Car7")); // false (Car7 not found)
console.log(parkingLot.getSlots()); // [ "Car1", "Car2", null, "Car4", "Car5", null, null, null, null, null ]
