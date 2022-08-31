let orderid = document.getElementById('orderId')
let search = document.getElementById('search')
let orderList = document.getElementById('order')
let orderIdValue = Number(orderid.value)
let caviar = `caviar :  ${1000}`
let fish = `fish : ${2000}`
let wine = `wine : ${3000}`
let Meatballs = `Meatballs :${4000}`





let orders = [{
        id: 1,
        items: [
            { food: "caviar", price: 1000 },
            { food: "fish", price: 2000 },
            { food: "wine", price: 3000 },
            { food: "Meatballs", price: 4000 },
            { food: "Pasta", price: 2016 },
        ]
    },
    {
        id: 2,
        items: [
            { food: "caviar", price: 1000 },
            { food: "fish", price: 1000 },
            { food: "wine", price: 1000 },
            { food: "Meatballs", price: 1000 },
            { food: "Pasta", price: 1000 },
        ]
    },
    {
        id: 3,
        items: [
            { food: "caviar", price: 1 },
            { food: "fish", price: 1 },
            { food: "wine", price: 1 },
            { food: "Meatballs", price: 1 },
            { food: "Pasta", price: 1 },
        ]
    }
]

let ol = document.getElementById('order-list')
let bV = document.getElementById('bill-value')
let tV = document.getElementById('tip-value')
let five = document.getElementById('five')
let ten = document.getElementById('ten')
let fifteen = document.getElementById('fifteen')



search.onclick = function search() {
    //finding an bject based on the id
    let m = orders.find((holdValue) => {
            return holdValue.id == orderid.value;
            holdValue.items
        })
        //logging the object to be sure of its value
    console.log(m);


    // looping through the texts o the page based on the returned object
    for (let i = 0; i < m.items.length; i++) {
        let list = m.items[i]
        const food = list.food;
        const prices = list.price;

        let textCon = `${i+1}` + ". " + food + " : " + prices + "<br>"
        ol.innerHTML += textCon
        console.log(textCon);
    }

    //Finds the sum of the prices of all the items on the page 
    var totalSalary = 0;
    for (var i = 0; i < m.items.length; i++) {
        totalSalary += m.items[i].price
    }

    console.log(totalSalary);

    bV.innerHTML = 'Bill to pay : ' + totalSalary;

    five.onclick = function fiv() {
        let calc = Math.ceil(0.05 * totalSalary)
        tV.innerHTML = 'Tip after evaluating : ' + calc
        console.log(calc);
    }

    ten.onclick = function te() {
        let calc = Math.ceil(0.1 * totalSalary)
        tV.innerHTML = 'Tip after evaluating : ' + calc
        console.log(calc);
    }

    fifteen.onclick = function fiftee() {
        let calc = Math.ceil(0.15 * totalSalary)
        tV.innerHTML = 'Tip after evaluating : ' + calc
        console.log(calc);
    }





    orderid.onclick = function clear() {
        ol.innerHTML = '';
        bV.innerHTML = 'Bill to pay : ';
        tV.innerHTML = 'Tip after evaluating : ';

    }



}