/*
The following code contains syntax errors - try and fix them!

Once you fix them, run this file, it should output the correct values!
*/

let person = {
    name: "Alice",
    age: 25,
    currentAddress: "Glasgow",
    celebrateBirthday: function() {
        this.age = this.age + 1;
    }
};

const changeAddressFunction = (newAddress) => {
    person.currentAddress = newAddress
}

person.changeAddress = changeAddressFunction


/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

person.changeAddress("Edinburgh");
console.log(`Expected result: Edinburgh. Actual result: ${person.currentAddress}`);

person.celebrateBirthday();
console.log(`Expected result: 26. Actual result: ${person.age}`);