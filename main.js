/* START CODE UNDER THIS LINE */


if (10 <= 10){
    
    console.log(true)
}

if ( 5 > 3){
    console.log(true)
}

if (5 < 7){
console.log(true)
} else {

}

if (2 < 3 && 7 > 10){
    console.log(false)
}

if ("hello" === "hello"){
    console.log('Khaled')
}

true && true && false; // false ( &&  false = false)
true || (true && false); // false || true = true
5 === 2 || 1 < 10; // 5 === 2 false // 1 < 10 true // false || true = true
(!false && true) || (!true && true); // true || true = true


const legalAge = function (age){
    if (age >= 18) {
        return true
    } else {
    return false }

}
console.log(legalAge(12));
console.log(legalAge(20)); 
console.log(legalAge(18)); 
console.log(legalAge(17)); 



const isItMyName = function (name){
    if (name === 'Khaled') {
    return true 
    } else { 
        return false 
    }
}
console.log(isItMyName('Yousef'))
console.log(isItMyName('Khaled'))
console.log(isItMyName('Baraa'))


const positiveOrNegative = function ( number ){ 
    if (number > 0 ) {
        return ' Positive ' 
    } else if (number < 0 ) {
    return ' Negative '
} else { 
    return ' Zero '    
    }
}

console.log(positiveOrNegative(10)) 
console.log(positiveOrNegative(0))
console.log(positiveOrNegative(-10))


const toLowerOrUpperCase = function (string, strCase){
    if (strCase === 'lower') {
        return string.toLowerCase() // اذا كانت سمول يطلعلي الكلمات سمول
    } else if (strCase === 'upper') {
    return string.toUpperCase() // اذا كانت ابر يطلعلي اياهام كابيتال
} else {
    return ' Invalid ' // اي اشي ثاني 
}
}

console.log(toLowerOrUpperCase("HELLO WORLD", "lower"))
console.log(toLowerOrUpperCase("my name is john", "upper"))
console.log(toLowerOrUpperCase('my name is khaled', 'invalid'))



const howLong = function (word){
    
let length = word.length

if (length < 5){
return ' short '
} else if (length <= 8) {
    return ' medium '
} else if ( length <= 13 ) {
    return ' long '
} else {
    return ' Too long '
}
}

console.log(howLong('and'))
console.log(howLong('function'))
console.log(howLong("corresponding"))
console.log(howLong("Supercalifragilisticexpialidocious"))




const startWith = function (string , character) {

    let string1 = string.toUpperCase()
    let char2 = character.toUpperCase()

    return string1[0] === char2
}

console.log(startWith("Hello", "h"))
console.log(startWith("World", "h"))
console.log(startWith("hello", "h"))



const endsWith = function ( string, character){

    let string1 = string.toLowerCase()
    let char2 = character.toLowerCase()
return string1[4] === char2
}

console.log(endsWith("Hello", "o"))
console.log(endsWith("Hello", "O"))
console.log(endsWith("hellO", "o")) 
console.log(endsWith("World", "h")) 
console.log(endsWith("World", "a")) 
console.log(endsWith("World", "c"))




const deposit = function (amount) {

    if ( amount > 0 ) {
    return amount
    } else if ( amount < 0 ) {
        return "Please enter a positive number"
    } else { 
        return "Please enter a number"
    }
}

console.log(deposit(100))
console.log(deposit(250))
console.log(deposit(-100))
console.log(deposit("khaled"))



const oddOrEven = function (number){
    if (number % 2 === 0) {
        return ' is even '
    } else {
        return " is odd "
    }
}

console.log(oddOrEven(1))
console.log(oddOrEven(2))
console.log(oddOrEven(5))



const stringCase = function (string){

    let string1 = string.toUpperCase()
    let string2 = string.toLowerCase()

    if ( string === string1) {
    return ' all upper case '
} else if (string === string2){
    return ' all lower case '
} else {
 return ' mix case '
}
}

console.log(stringCase("JOHN"))
console.log(stringCase("john"))
console.log(stringCase("joHN"))


const isLeapYear = function (year){

    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

console.log(isLeapYear(2000))
console.log(isLeapYear(2004))
console.log(isLeapYear(2096))
console.log(isLeapYear(1603))
console.log(isLeapYear(2021))
console.log(isLeapYear(2200))
console.log(isLeapYear(2500))
console.log(isLeapYear(2600))
console.log(isLeapYear(3000))




const login_v01 = function (username, password){

    let user1 = username.length
    let pass1 = password.length

    if (user1 > 6 && pass1 >= 8 ){
        return ' login successful'
    } else {
        return ' login failed '
}
}

console.log(login_v01("John", "1234"))
console.log(login_v01("John", "12345678"))
console.log(login_v01("john_doe", "123456"))
console.log(login_v01("john_doe", "12345678"))


const login_v02 = function(username, password) {
    let accounts = [ { username: "john_doe", password: "koljgwEA" }, { username: "jane_doe", password: "12345678" } ];
    let theAcc = accounts.find(account => 
        account.username.toLowerCase() === username.toLowerCase() && account.password === password
    )
    if (theAcc) {
        return "login successful"
    } else {
        return "login failed"
    }
};
console.log(login_v02("JOHN_DOE", "koljgwEA")) 
console.log(login_v02("john_doe", "KOLJGWEA"))  
console.log(login_v02("john_doe", "12345678"))
console.log(login_v02("jane_doe", "koljgwEA"))
console.log(login_v02("jane_doe", "12345678"))


const login_v03 = function (username, password){

    let accounts = [ { username: "john_doe", password: "koljgwEA" },
    { username: "jane_doe", password: "12345678" } ]

let user1 = accounts.find (account => account.username.toLocaleLowerCase()===username.toLocaleLowerCase())

if (!user1) {
    return ' username doesnt exist '
} else if (username.length <= 6) {
    return "username must be more than 6 characters long"
} else if ( password.length < 8) {
    return "password must be at least 8 characters long"
} else if (user1.password !== password) {
       return 'wrong password' 
    } else {
        return ' loging successful '
}

} 
console.log(login_v03("john_doe", "koljgwEA"))
console.log(login_v03("jane_doe", "12345678"))


console.log(login_v03("john", "12345678")); // => "username must be more than 6 characters long"
console.log(login_v03("jane_doe", "123456")); // => "password must be at least 8 characters long"

console.log(login_v03("MrPotato", "12345678")); // => "username doesn't exist"
console.log(login_v03("jane_doe", "123456789"));




const letterInString = function (string, letter){

    let lowsString = string.toLowerCase()
    let lett = letter.toLowerCase()

   if (lowsString.includes(lett)) {
    return true
   } else {
    return false
   }
}

console.log(letterInString("Hello", "E"))
console.log(letterInString("Hello", "Z"))



const guessTheSquareRoot = function (number, squareRoot){

    let calculateSqrt = Math.sqrt(number)

     if ( calculateSqrt === squareRoot){
        return ' correct '
     } else {
        return ' incorrect '
}
}

console.log(guessTheSquareRoot(4, 2))
console.log(guessTheSquareRoot(4, 3))
console.log(guessTheSquareRoot(10, 3))



const randomMove = function(){

    let theGameIs = ['rock', 'paper', 'scissorrs']
    let winner = Math.floor(Math.random() * theGameIs.length)

    return theGameIs[winner]

}

console.log(randomMove())
console.log(randomMove())
console.log(randomMove())
console.log(randomMove())



const rockPaperScissors_v01 = function (move){

    if ( move === 'rock' || move === 'paper' || move ==='scissors'){
        return ' valid move'
    }else{
        return ' invalid move '
    }
}
console.log(rockPaperScissors_v01("rock"))
console.log(rockPaperScissors_v01("paper"))
console.log(rockPaperScissors_v01("scissors"))
console.log(rockPaperScissors_v01("knife"))



const rockPaperScissors_v02 = function (move) {
    let randomMove1 = randomMove()

    if (move === 'rock' || move === 'paper' || move === 'scissors') {
        if (
            (move === 'rock' && randomMove1 === 'scissors') ||
            (move === 'paper' && randomMove1 === 'rock') ||
            (move === 'scissors' && randomMove1 === 'paper')
         ) {
            return 'you win';
        } else if (move === randomMove1) {
            return 'it is a draw'
        } else {
            return 'you lose'
        }
    } else {
        return 'invalid move'
    }
}

console.log(rockPaperScissors_v02("rock"))
console.log(rockPaperScissors_v02("paper")) 
console.log(rockPaperScissors_v02("rock"))
console.log(rockPaperScissors_v02("scissors"))
console.log(rockPaperScissors_v02("paper"))
