document.getElementById("Concatinate").onclick = function () {
    var name = 'M.Dawood '
    var fname = 'Arif'
    alert(name + fname)

}
document.getElementById("AskName").onclick = function () {
    let firstname = prompt("What is your name ?")
    alert("Welcome to the website  " + firstname)
    document.getElementById("output").innerHTML = "<h4>Good Morning !</h4>" + firstname
}
document.getElementById("ConparisonOp").onclick = function () {
    let num1 = 10;
    let num2 = 5;
    if (num1 > num2) {
        alert("your statement is True   10 > 5")
    }
}
document.getElementById("ifelse").onclick = function () {
    let num1 = 10;
    let num2 = 5;
    if (num1 > num2) {
        alert("your statement is True   10 > 5")
    } else if (num1 >= num2) {
        alert("your 2 statement is True")
    } else if (num1 <= num2) {
        alert("your 3 statement is True")
    }
    else {
        alert("your statement is false.")
    }

}
document.getElementById("conditions").onclick = function () {
    let classs = prompt("Your class?")
    let marks = prompt("Your marks?")

    if (classs >= 10 && marks >= 800) {
        alert("You are a Good Student !")
    } else if (classs >= 10 && marks < 800) {
        alert("You are not a good Student")
    }

}
document.getElementById("Nested").onclick = function () {
    let age = prompt("Your Age?")
    if (age >= 18) {
        let weight = prompt("Your weight?");
        if (weight <= 70) {
            alert("You are a smart man!")
        } else {
            alert("Gian haii ap!!")
        }
    } else {
        alert("you are not a boy.")
    }
}
document.getElementById("Lognin").onclick = function (){
    let name = prompt("Enter Your Name")
    let pass = prompt("Enter Your Password")
    if (name === "dawood" && pass === "123"){
        alert("You are Logged in")
    }


}
document.getElementById("Check").onclick = function (){
    alert("The checkbox is checked!")
}