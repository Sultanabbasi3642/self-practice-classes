"use strict";
class HospitalTokenSystem {
    constructor() {
        this.tokenCounter = 1;
        this.waitingList = [];
    }
    // Generate a new token for a patient
    generateToken() {
        const token = this.tokenCounter++;
        this.waitingList.push(token);
        return token;
    }
    // Call the next token when a patient is served
    callNextToken() {
        if (this.waitingList.length > 0) {
            return this.waitingList.shift();
        }
        return undefined; // No more tokens in the waiting list
    }
    // Get the current waiting list
    getWaitingList() {
        return this.waitingList;
    }
}
// Usage
const hospitalSystem = new HospitalTokenSystem();
// Generate tokens for patients
const patient1Token = hospitalSystem.generateToken();
const patient2Token = hospitalSystem.generateToken();
const patient3Token = hospitalSystem.generateToken();
console.log("Tokens issued:", hospitalSystem.getWaitingList());
// Call tokens as patients are served
const servedToken = hospitalSystem.callNextToken();
console.log("Serving token:", servedToken);
console.log("Updated waiting list:", hospitalSystem.getWaitingList());
const servedToken1 = hospitalSystem.callNextToken();
console.log("Serving token:", servedToken1);
console.log("Updated waiting list:", hospitalSystem.getWaitingList());
