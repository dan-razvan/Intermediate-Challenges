
// const output = document.getElementById("outputList")
// const selectOutput = output.addEventListener("toggle", ActionTwo)


function ActionOne(e) {   
    const element = e.target.value     //pentru hw3 pus in alert e.target.value
    alert(element)
}

function ActionTwo(e) {
    const element2 = e.target.value   // *
    alert(element2)
}

function ActionThree(e) {
    alert(e.target.value)
}

const activeCurrencies = ["EUR", "USD", "MDL", "RON"]
// HW1. filtreaza din data.rates doar monedele din activeCurrencies, inainte de a le pasa in selectList (data.rates ----> filter---> selectList)

insertCurrency()
inputAmount(inputMoney, "enter amount ...", "ActionThree")
selectList(inputList, selectedCurrencies, "ActionOne")    // am adaugat functia selectedCurrencies pt hw1
selectList(outputList, selectedCurrencies, "ActionTwo")






////////////////////////////////////////////// dedesubt este codul vechi in caz de ceva


// //HW3. on.<event> = "Action(event)"

// function ActionOne() {
//     alert("One")
// }

// function ActionTwo() {
//     alert("Two")
// }

// function ActionThree() {
//     alert("Three")
// }

// const activeCurrencies = ["EUR", "USD", "MDL", "RON"]
// // HW1. filtreaza din data.rates doar monedele din activeCurrencies, inainte de a le pasa in selectList (data.rates ----> filter---> selectList)


// inputAmount(inputMoney, "enter amount ...", "ActionThree")
// selectList(inputList, data.rates, "ActionOne")
// selectList(outputList, data.rates, "ActionTwo")