let inputEl = document.getElementById("input-el")
let convertBtn = document.getElementById("convert-btn")
let meterEl = document.getElementById("length-el")
let volumeEl = document.getElementById("vol-el")
let massEl = document.getElementById("kilo-el")



/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound    
*/






let defaultVal = 1

let meters = ""
let volume = ""
let mass = ""

convertBtn.addEventListener("click" , function(){

    if(inputEl.value == "" || isNaN(inputEl.value)){

        alert("Please insert an actual number and dont pmo")

    }else{



    let multiplier = Number(inputEl.value) 

    let ourNumber = defaultVal * multiplier

    meters = `<h2>Length(Meter/Feet)</h2> <p>${ourNumber} meters = ${(ourNumber * 3.281).toFixed(3)} feet | ${ourNumber} feet = ${(ourNumber / 3.281).toFixed(3)} meters</p>`

    volume = `<h2>Volume(Liters/Gallons)</h2> <p>${ourNumber} liters = ${(ourNumber * 0.264).toFixed(3)} gallons | ${ourNumber} gallons = ${(ourNumber / 0.264).toFixed(3)} liters</p>`

    mass = `<h2>Mass(Kilograms/Pounds)</h2> <p>${ourNumber} kilos = ${(ourNumber * 2.204).toFixed(3)} pounds | ${ourNumber} pounds = ${(ourNumber / 2.204).toFixed(3)} kilos</p>`

    meterEl.innerHTML = meters

    volumeEl.innerHTML = volume

    massEl.innerHTML = mass
    
   }
})




