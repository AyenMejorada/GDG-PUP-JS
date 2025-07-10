function checkAge() {
    // at first I only typed the third line as "document.getElementById("ageInput").value" and it won't work because when you use that, you will only get the value, but do not store it or you are not using it as a number
    // so you need to declare it, and add "Number([insert document.getElementById])"
    let ageInput = Number(document.getElementById("ageInput").value);
    let category;
    if (ageInput >= 0 && ageInput <= 12){
        category = "Child";
    } else if (ageInput >= 13 && ageInput <= 19) {
        category = "Teenager";
    } else if (ageInput >= 20) {
        category = "Adult";
    } else {
        category = "Invalid age. Please enter a valid number.";
    }
    // .innerHTML will replace whatever what is inside the "result" id
    document.getElementById("result").innerHTML = category;
}