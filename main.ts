// console.log("hello world");

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

let age: number = 25;


if (age < 2) {
    console.log("The person is a baby.");
} else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
} else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
} else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
} else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
} else {
    console.log("The person is an elder.");
}

let favoriteFruits: string[] = ["banana", "apple", "orange"];


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


let usernames: string[] = [];


if (usernames.length === 0) {
    console.log("We need to find some users!");
}

usernames = [];

let currentUsers: string[] = ["John", "Mary", "Alice", "Bob", "admin"];
let newUsers: string[] = ["Jane", "admin", "Steve", "Bob", "Eve"];


for (let newUser of newUsers) {
  
    if (currentUsers.map(user => user.toLowerCase()).includes(newUser.toLowerCase())) {
        console.log(`The username '${newUser}' is not available. Please choose a different one.`);
    } else {
        console.log(`The username '${newUser}' is available.`);
    }
}

let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];


for (let number of numbers) {
 
    if (number === 1) {
        console.log(`${number}st`);
    } else if (number === 2) {
        console.log(`${number}nd`);
    } else if (number === 3) {
        console.log(`${number}rd`);
    } else {
        console.log(`${number}th`);
    }
}
let favoritePizzas: string[] = ["Pepperoni", "Margherita", "BBQ Chicken"];

for (let pizza of favoritePizzas) {

    console.log(`I like ${pizza} pizza.`);
}

console.log("I really love pizza!");



let animals: string[] = ["Dog", "Cat", "Rabbit"];


for (let animal of animals) {
  
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}


console.log("Any of these animals would make a great pet!");






makeShirt("Large", "I love TypeScript");
function makeShirt(size: string = "Large", message: string = "I love TypeScript"): void {
    console.log(`Shirt summary: Size - ${size}, Message - ${message}`);
}


makeShirt(); 
makeShirt("Medium"); 

interface Car {
    manufacturer: string;
    model: string;
    color?: string;
    optionalFeature?: string;
}

function storeCarInfo(manufacturer: string, model: string, options: any = {}): Car {

    let carInfo: Car = {
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


let myCar: Car = storeCarInfo("Toyota", "Camry", { color: "Blue", optionalFeature: "Sunroof" });


console.log(myCar);

function makeSandwich(...ingredients: string[]): void {
    console.log("Sandwich Summary:");
    if (ingredients.length === 0) {
        console.log("No ingredients provided. It's an empty sandwich!");
    } else {
        console.log("Ingredients:");
        for (let ingredient of ingredients) {
            console.log(`- ${ingredient}`);
        }
    }
    console.log("Enjoy your sandwich!");
    console.log(); 
}


makeSandwich("Ham", "Cheese", "Lettuce", "Tomato");
makeSandwich("Turkey", "Swiss Cheese");
makeSandwich(); 


function showMagicians(magicians: string[]): void {
    console.log("Magicians:");
    for (let magician of magicians) {
        console.log(`- ${magician}`);
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

function makeGreat(magicians: string[]): string[] {
    
    let greatMagicians: string[] = magicians.map(magician => `${magician} the Great`);
    return greatMagicians;
}


let magicianNames: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];


let greatMagicians: string[] = makeGreat([...magicianNames]);

console.log("Original Magicians:");
showMagicians(magicianNames);

console.log("\nGreat Magicians:");
showMagicians(greatMagicians);

interface Shirt {
    size: string;
    message: string;
}

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

function describeCity(city: string, country: string = "Unknown"): void {
    console.log(`${city} is in ${country}.`);
}


describeCity("Karachi", "Pakistan");
describeCity("Paris", "France");
describeCity("New York"); 

function cityCountry(city: string, country: string): string {
    return `${city}, ${country}`;
}
console.log(cityCountry("Lahore", "Pakistan"));
console.log(cityCountry("Tokyo", "Japan"));
console.log(cityCountry("Sydney", "Australia"));

interface Album {
    artist: string;
    title: string;
    tracks?: number;
}

function makeAlbum(artist: string, title: string, tracks?: number): Album {
    let album: Album = {
        artist: artist,
        title: title,
    };
    
    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}


let album1: Album = makeAlbum("Ed Sheeran", "Divide", 12);
let album2: Album = makeAlbum("Taylor Swift", "1989");
let album3: Album = makeAlbum("Adele", "25", 10);

console.log("Album 1:", album1);
console.log("Album 2:", album2);
console.log("Album 3:", album3);










