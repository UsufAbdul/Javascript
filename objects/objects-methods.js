// object property which value is a function
let restaurant = {
  name: "ASB",
  guestCapacity: 75,
  guestCount: 0,
  checkAvailability: function (partySize) {
    let space = this.guestCapacity - this.guestCount;
    return space >= partySize;
    //console.log(partySize);
  },
  seatParty: function (seat) {
    this.guestCount = this.guestCount + seat;
    //return this.checkAvailability;
    // console.log(this.guestCount);
  },
  removeParty: function (people) {
    this.guestCount = this.guestCount - people;
    //return this.checkAvailability;
  },
};
restaurant.seatParty(72);
console.log(restaurant.checkAvailability(4));
restaurant.removeParty(5);
console.log(restaurant.checkAvailability(4));
