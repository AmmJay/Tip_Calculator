let numberOfPeople = document.getElementById('numberOfPeople')
const addButton = document.getElementById('add')
const removeButton = document.getElementById('remove')
const totalInput = document.getElementById('totalInput')
const tipInput = document.getElementById('tipInput')
const billAmount = document.getElementById('billAmount')

const calculateBill = () =>{
    let tipAmount = Number(tipInput.value) * Number(totalInput.value) /100
    let totalBill = Number(totalInput.value) + tipAmount
    billAmount.innerText = (totalBill/Number(numberOfPeople.innerText)).toFixed(2)
}

const increasePeople=() =>{
    numberOfPeople.innerText ++ ;
    calculateBill()
}

const removePeople = () =>{
    if(numberOfPeople.innerText == 1)
    return;
    
    numberOfPeople.innerText --;
    calculateBill()
}

addButton.onclick = () => increasePeople()
removeButton.onclick = () =>removePeople()
totalInput.onkeyup = () => calculateBill()
tipInput.onkeyup = () => calculateBill()

