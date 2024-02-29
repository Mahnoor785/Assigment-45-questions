// console.log("hello world");
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//QUESTION 1
// let myName = "Mahnoor";
// let message ="“Hello Mahnoor, would you like to learn some Python today?”";
// console.log(message);
// //QUESTION 2
// let personName ="Mahnoor kazim"
// console.log("Lowercase: " + personName.toLowerCase());
// console.log("Uppercase: " + personName.toUpperCase());
// function toTitleCase(str: string) {
//     return str.replace(/\w\S*/g, function(txt: string) {
//         return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
//     });
// }
// console.log("Titlecase: " + toTitleCase(personName));
//QUESTION 3
// let famousQuote: string = 'Albert Einstein once said, "A person who never made a mistake never tried anything new."';
// console.log(famousQuote);
// let famous_person = 'Albert Einstein';
// let quote = 'A person who never made a mistake never tried anything new.';
// let message = `{famous_person} once said, "{quote}"`;
// console.log(message);
//question 4//
// let famous_person:string="jhon wick";
// let message:string="A journey of a thousand miles begins with a single step. - {famous_person}";
// console.log(message);
// QUESTION 5//
// let personName: string = "\t   \n John Doe \t   \n";
// console.log("Name with Whitespace:");
// console.log(personName);
// let strippedName: string = personName.trim();
// console.log("\nName after Stripping Whitespace:");
// console.log(strippedName);
// QUESTION 6//
// let additionResult: number = 5 + 3;
// console.log("Addition: 5 + 3 =", additionResult);
// let subtractionResult:number = 8 - 2;
// console.log("subtraction:8 - 2 =",subtractionResult);
// let multiplicationResult:number =7 * 4;
// console.log("multiplication:7 * 4 =",multiplicationResult);
// let divisionResult: number = 16 / 2;
// console.log("Division: 16 / 2 =", divisionResult);
//QUESTION 7//
// console.log(5 + 3); 
// console.log(10 - 2); 
// console.log(4 * 2); 
// console.log(16 / 2);
// QUESTION 8 //
// let favoriteNumber: number = 7;
// let message: string = `My favorite number is: ${favoriteNumber}`;
// console.log(message);
// QUESTION 9 //
// let names: string[] = ["Alice", "Bob", "Charlie", "David"];
// for (let name of names) {
//     console.log(name);
// }
// QUESTION 10 //
// let names: string[] = ["Alice", "Bob", "Charlie", "David"];
// for (let name of names) {
//     console.log(`Hello, ${name}!`);
// }
// QUESTION 11 //
// let transportation: string[] = ["motorcycle", "car", "bicycle", "scooter"];
// for (let item of transportation) {
//     console.log(`I would like to own a ${item}.`);
// }
// QUESTION 12 //
// let guests: string[] = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];
// for (let guest of guests) {
//     console.log(`Dear ${guest}, you are invited to dinner.`);
// }
// QUESTION 13 //
// let guestCantMakeIt: string = guests[1];
// console.log(`${guestCantMakeIt} can't make it to dinner.`);
// guests[1] = "Isaac Newton";
// for (let guest of guests) {
//     console.log(`Dear ${guest}, you are invited to dinner.`);
// }console.log("Good news! We found a bigger dinner table.");
// guests.unshift("Galileo Galilei");
// guests.splice(2, 0, "Nikola Tesla");
// guests.push("Ada Lovelace");
// for (let guest of guests) {
//     console.log(`Dear ${guest}, you are invited to dinner.`);
// }
// console.log("Unfortunately, the new dinner table won't arrive in time for the dinner. We can only invite two people.");
// while (guests.length > 2) {
//     let removedGuest = guests.pop();
//     console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
// }
// for (let guest of guests) {
//     console.log(`Dear ${guest}, you are still invited to dinner.`);
// }
// guests = [];
// console.log("Guest list is now empty:", guests);
// // QUESTION 16 //
// let placesToVisit: string[] = ["Tokyo", "Paris", "Machu Picchu", "Sydney", "Banff"];
// console.log("Original Order:", placesToVisit);
// console.log("Alphabetical Order:", [...placesToVisit].sort());
// console.log("Original Order (unchanged):", placesToVisit);
// console.log("Reverse Alphabetical Order:", [...placesToVisit].sort().reverse());
// console.log("Original Order (unchanged):", placesToVisit);
// placesToVisit.reverse();
// console.log("Reversed Order:", placesToVisit);
// placesToVisit.reverse();
// console.log("Back to Original Order:", placesToVisit);
// placesToVisit.sort();
// console.log("Alphabetical Order:", placesToVisit);
// placesToVisit.sort().reverse();
// console.log("Reverse Alphabetical Order:", placesToVisit);
// QUESTION  //
// let guest: string[] = ["Galileo Galilei", "Albert Einstein", "Nikola Tesla", "Isaac Newton", "Ada Lovelace"];
// console.log(`Number of guests invited to dinner: ${guest.length}`);
// let mountains: string[] = ["Everest", "K2", "Matterhorn", "Denali", "Aconcagua"];
// let objects: any[] = [
//     { name: "Book", type: "Stationery" },
//     { name: "Car", type: "Vehicle" },
//     { name: "Computer", type: "Electronics" },
// ];
// let myArray: number[] = [1, 2, 3];
// console.log(myArray[10]);
// let car: string = 'subaru';
// console.log("Is car == 'subaru'? I predict True.");
// console.log(car == 'subaru');
// console.log("Is car != 'toyota'? I predict True.");
// console.log(car != 'toyota');
// console.log("Is car.length > 5? I predict False.");
// console.log(car.length > 5);
// console.log("Is car.length <= 6? I predict True.");
// console.log(car.length <= 6);
// console.log("Is car === 'Subaru'? I predict False.");
// console.log(car === 'Subaru');
// console.log("Is car !== 'Subaru'? I predict True.");
// console.log(car !== 'Subaru');
// console.log("Is 10 > 5 and car === 'subaru'? I predict True.");
// console.log(10 > 5 && car === 'subaru');
// console.log("Is 10 > 5 or car === 'toyota'? I predict True.");
// console.log(10 > 5 || car === 'toyota');
// console.log("Is 'Paris' in placesToVisit array? I predict True.");
// console.log(placesToVisit.includes('Paris'));
// console.log("Is 'Rome' not in placesToVisit array? I predict True.");
// console.log(!placesToVisit.includes('Rome'));
// let alienColor: string = 'green';
// if (alienColor === 'green') {
//     console.log("Player just earned 5 points.");
// } else {
//     console.log("Player didn't earn points.");
// }
// alienColor = 'red';
// if (alienColor === 'green') {
//     console.log("Player just earned 5 points.");
// } else {
// }
// let alienColor: string = 'green';
// if (alienColor === 'green') {
//     console.log("Player just earned 5 points for shooting the alien.");
// } else {
//     console.log("Player just earned 10 points.");
// }
// alienColor = 'red';
// if (alienColor === 'green') {
//     console.log("Player just earned 5 points for shooting the alien.");
// } else {
//     console.log("Player just earned 10 points.");
// }
// let alienColor: string = 'red';
// if (alienColor === 'green') {
//     console.log("Player earned 5 points.");
// } else if (alienColor === 'yellow') {
//     console.log("Player earned 10 points.");
// } else if (alienColor === 'red') {
//     console.log("Player earned 15 points.");
// }
var age = 25;
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
}
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
var favoriteFruits = ["banana", "apple", "orange"];
if (favoriteFruits.includes("banana")) {
    console.log("You really like bananas!");
}
// let usernames: string[] = ["user1", "user2", "admin", "user3", "user4"];
// for (let username of usernames) 
//     if (username === 'admin') {
//         console.log("Hello admin, would you like to see a status report?");
//     } else {
//         console.log(`Hello ${username}, thank you for logging in again.`);
// }
var usernames = [];
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
usernames = [];
var currentUsers = ["John", "Mary", "Alice", "Bob", "admin"];
var newUsers = ["Jane", "admin", "Steve", "Bob", "Eve"];
for (var _i = 0, newUsers_1 = newUsers; _i < newUsers_1.length; _i++) {
    var newUser = newUsers_1[_i];
    if (currentUsers.map(function (user) { return user.toLowerCase(); }).includes(newUser.toLowerCase())) {
        console.log("The username '".concat(newUser, "' is not available. Please choose a different one."));
    }
    else {
        console.log("The username '".concat(newUser, "' is available."));
    }
}
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _a = 0, numbers_1 = numbers; _a < numbers_1.length; _a++) {
    var number = numbers_1[_a];
    if (number === 1) {
        console.log("".concat(number, "st"));
    }
    else if (number === 2) {
        console.log("".concat(number, "nd"));
    }
    else if (number === 3) {
        console.log("".concat(number, "rd"));
    }
    else {
        console.log("".concat(number, "th"));
    }
}
var favoritePizzas = ["Pepperoni", "Margherita", "BBQ Chicken"];
for (var _b = 0, favoritePizzas_1 = favoritePizzas; _b < favoritePizzas_1.length; _b++) {
    var pizza = favoritePizzas_1[_b];
    console.log("I like ".concat(pizza, " pizza."));
}
console.log("I really love pizza!");
var animals = ["Dog", "Cat", "Rabbit"];
for (var _c = 0, animals_1 = animals; _c < animals_1.length; _c++) {
    var animal = animals_1[_c];
    console.log("A ".concat(animal.toLowerCase(), " would make a great pet."));
}
console.log("Any of these animals would make a great pet!");
makeShirt("Large", "I love TypeScript");
function makeShirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("Shirt summary: Size - ".concat(size, ", Message - ").concat(message));
}
makeShirt();
makeShirt("Medium");
function storeCarInfo(manufacturer, model, options) {
    if (options === void 0) { options = {}; }
    var carInfo = {
        manufacturer: manufacturer,
        model: model,
    };
    if (options.color) {
        carInfo.color = options.color;
    }
    if (options.optionalFeature) {
        carInfo.optionalFeature = options.optionalFeature;
    }
    return carInfo;
}
var myCar = storeCarInfo("Toyota", "Camry", { color: "Blue", optionalFeature: "Sunroof" });
console.log(myCar);
function makeSandwich() {
    var ingredients = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ingredients[_i] = arguments[_i];
    }
    console.log("Sandwich Summary:");
    if (ingredients.length === 0) {
        console.log("No ingredients provided. It's an empty sandwich!");
    }
    else {
        console.log("Ingredients:");
        for (var _a = 0, ingredients_1 = ingredients; _a < ingredients_1.length; _a++) {
            var ingredient = ingredients_1[_a];
            console.log("- ".concat(ingredient));
        }
    }
    console.log("Enjoy your sandwich!");
    console.log();
}
makeSandwich("Ham", "Cheese", "Lettuce", "Tomato");
makeSandwich("Turkey", "Swiss Cheese");
makeSandwich();
function showMagicians(magicians) {
    console.log("Magicians:");
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log("- ".concat(magician));
    }
}
// let magicianNames: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
// showMagicians(magicianNames);
// function makeGreat(magicians: string[]): string[] {
//     let greatMagicians: string[] = magicians.map(magician => `${magician} the Great`);
//     return greatMagicians;
// }
// let magicianNames: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
// let greatMagicians: string[] = makeGreat(magicianNames);
// showMagicians(greatMagicians);
function makeGreat(magicians) {
    var greatMagicians = magicians.map(function (magician) { return "".concat(magician, " the Great"); });
    return greatMagicians;
}
var magicianNames = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
var greatMagicians = makeGreat(__spreadArray([], magicianNames, true));
console.log("Original Magicians:");
showMagicians(magicianNames);
console.log("\nGreat Magicians:");
showMagicians(greatMagicians);
// function makeShirt(size: string = "large", message: string = "I love TypeScript"): Shirt {
//     let shirt: Shirt = {
//         size: size,
//         message: message,
//     };
//     return shirt;
// }
// let largeShirt: Shirt = makeShirt(); 
// let mediumShirt: Shirt = makeShirt("medium");
// let customShirt: Shirt = makeShirt("small", "Custom message"); 
// console.log("Large Shirt:", largeShirt);
// console.log("Medium Shirt:", mediumShirt);
// console.log("Custom Shirt:", customShirt);
function describeCity(city, country) {
    if (country === void 0) { country = "Unknown"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describeCity("Karachi", "Pakistan");
describeCity("Paris", "France");
describeCity("New York");
function cityCountry(city, country) {
    return "".concat(city, ", ").concat(country);
}
console.log(cityCountry("Lahore", "Pakistan"));
console.log(cityCountry("Tokyo", "Japan"));
console.log(cityCountry("Sydney", "Australia"));
function makeAlbum(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = makeAlbum("Ed Sheeran", "Divide", 12);
var album2 = makeAlbum("Taylor Swift", "1989");
var album3 = makeAlbum("Adele", "25", 10);
console.log("Album 1:", album1);
console.log("Album 2:", album2);
console.log("Album 3:", album3);
