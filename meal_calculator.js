var readline = require('readline');

var menu = {
    "Hamburger": 10.50,
    "Hot Dog": 5.50,
    "Crab Cakes": 12.50,
    "Lobster Roll": 15.00,
    "Steamed Mussels": 7.50,
    "Soda": 1.50,
    "Lemonade": 2.00,
    "Beer": 3.50
}

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

    
console.log(menu);
    
rl.question("Welcome to Red's Summer Shack! \n" +
    "What would you like to order? \n"
    , function(answer) {
        
    console.log("That's: " +  answer + ".  Thanks!");

    rl.close();
});
    



