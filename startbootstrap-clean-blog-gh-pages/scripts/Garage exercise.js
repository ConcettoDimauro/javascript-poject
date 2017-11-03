function car(reg, make, year, faults, checkedIn) {
    return {

        reg: reg,
        make: make,
        year: year,
        faults: faults,
        checkedIn: checkedIn,
    }
}
let carlist = [];

carlist.push(car("NA54 KTE", "vw", 2003, 2, true))
carlist.push(car("SR31 QWW", "bmw", 2000, 6, true))
carlist.push(car("NW19 HZJ", "kia", 2003, 0, true))
carlist.push(car("SR4I OQP", "vw", 2006, 4, true))
carlist.push(car("TY78 IJK", "bmw", 2002, 1, true))
carlist.push(car("FG29 IJL", "kia", 2009, 3, true))

function createNewcar() {
    let reg = document.getElementById('reg').value
    let make = document.getElementById('make').value
    let year = document.getElementById('year').value
    let faults = document.getElementById('faults').value
    var isCheckedin = false;
    if (document.getElementById('checkedIn').checked) {
        isChecked = true;

    } else {
        isChecked = false;


    }


    let newcar = car(reg, make, year, faults, isChecked)
    console.log(newcar);
    alert("you've check in a new car!")
}

function getGarageContents() {
    let searchQuery = document.getElementById("searchQuery").value;
    let para = document.getElementById("results");
    para.innerHTML = "";
    if (searchQuery == "") {
        para.innerHTML = "Please enter a Registration plate";

    }
    else {


        for (let i = 0; i < carlist.length; i++) {
            if (carlist[i].reg.toUpperCase().includes(searchQuery.toUpperCase())) {
                console.log(carlist[i].reg);
                console.log(carlist[i].make);
                console.log(carlist[i].year);
                console.log(carlist[i].faults);
                console.log(carlist[i].checkedIn);

                para.innerHTML += carlist[i].reg + " " + carlist[i].make + " " + carlist[i].year + " " + carlist[i].faults + "<br>";

            }

        }

    }

}

function checkoutCar() {
    let searchCheckout = document.getElementById("searchCheckout").value;
    let para = document.getElementById("alerts")
    for (let i = 0; i < carlist.length; i++) {
        if (carlist[i].reg.toUpperCase() == (searchCheckout.toUpperCase())) {
            carlist[i].checkedIn = false
            para.innerHTML = "The car has been checked out";
            break;
        }
        else {
            para.innerHTML = "This registration plate is not in the garage";
        }
    }
}

function sumUpBill() {
    let sumUp = document.getElementById("sumUp").value;
    let para = document.getElementById("bill");
    const faultCost = 50;


    for (let i = 0; i < carlist.length; i++) {
        if (carlist[i].reg.toUpperCase() == (sumUp.toUpperCase())) {
            para.innerHTML = "The bill for this car is &pound" + (carlist[i].faults * faultCost);
            break;
        }
        else {
            para.innerHTML = "This reg is not in the garage"
        }



    }
}
