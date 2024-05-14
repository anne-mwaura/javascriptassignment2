let sentence = "my name is wesley";
let words = sentence.split(" ");
for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let firstLetter = word.charAt(0).toUpperCase();
    let capitalizedWord = firstLetter + word.slice(1);
    words[i] = capitalizedWord;
}
let capitalizedSentence = words.join(" ");
console.log(capitalizedSentence);


let items = [
    { price: 10.99 },
    { price: 5.99 },
    { price: 29.99 }
];
let totalCost = 0;
for (let i = 0; i < items.length; i++) {
    let itemPrice = items[i].price;
    totalCost += itemPrice;
}
console.log("Total Cost: $" + totalCost);



let password = "machia473wmw";
if (password.length === 0 || password.trim() === '') {
    console.log("Password cannot be blank.");
} else {
    let passwordrepeatsitself = false;
    for (let i = 0; i < password.length - 1; i++) {
        if (password[i] === password[i + 1]) {
            passwordrepeatsitself = true;
            break;
        }
    }
    if (passwordrepeatsitself) {
        console.log("Password cannot contain repeated characters in a row.");
    } else {
        console.log("Password is strong and meets the criteria.");
    }
}



let firstName = "wesley";
let lastName = "machia";
let firstthree = firstName.slice(0, 3);
let lastthree= lastName.slice(-3);
let generatedPassword = firstthree + lastthree + "@2024";
console.log("Generated Password:", generatedPassword);




