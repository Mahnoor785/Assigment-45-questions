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
var guests = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    console.log("Dear ".concat(guest, ", you are invited to dinner."));
}
// QUESTION 13 //
var guestCantMakeIt = guests[1];
console.log("".concat(guestCantMakeIt, " can't make it to dinner."));
guests[1] = "Isaac Newton";
for (var _a = 0, guests_2 = guests; _a < guests_2.length; _a++) {
    var guest = guests_2[_a];
    console.log("Dear ".concat(guest, ", you are invited to dinner."));
}
console.log("Good news! We found a bigger dinner table.");
guests.unshift("Galileo Galilei");
guests.splice(2, 0, "Nikola Tesla");
guests.push("Ada Lovelace");
for (var _b = 0, guests_3 = guests; _b < guests_3.length; _b++) {
    var guest = guests_3[_b];
    console.log("Dear ".concat(guest, ", you are invited to dinner."));
}
console.log("Unfortunately, the new dinner table won't arrive in time for the dinner. We can only invite two people.");
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Sorry, ".concat(removedGuest, ", we can't invite you to dinner."));
}
for (var _c = 0, guests_4 = guests; _c < guests_4.length; _c++) {
    var guest = guests_4[_c];
    console.log("Dear ".concat(guest, ", you are still invited to dinner."));
}
guests = [];
console.log("Guest list is now empty:", guests);
// QUESTION 16 //
var placesToVisit = ["Tokyo", "Paris", "Machu Picchu", "Sydney", "Banff"];
console.log("Original Order:", placesToVisit);
console.log("Alphabetical Order:", __spreadArray([], placesToVisit, true).sort());
console.log("Original Order (unchanged):", placesToVisit);
console.log("Reverse Alphabetical Order:", __spreadArray([], placesToVisit, true).sort().reverse());
console.log("Original Order (unchanged):", placesToVisit);
placesToVisit.reverse();
console.log("Reversed Order:", placesToVisit);
placesToVisit.reverse();
console.log("Back to Original Order:", placesToVisit);
placesToVisit.sort();
console.log("Alphabetical Order:", placesToVisit);
placesToVisit.sort().reverse();
console.log("Reverse Alphabetical Order:", placesToVisit);
