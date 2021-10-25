//am adaugat aceasta functie pentru  a itera prin obiectul cu monede si a selecta doar monedele alese


function insertCurrency(){
    
    for(let i=0; i< Object.keys(data.rates).length;i++){

        let currency = Object.keys(data.rates)[i]
        for(let j =0; j<activeCurrencies.length;j++){
            if (currency === activeCurrencies[j]){
                ourCurrencies[j] = currency
                
            }
        }
    }
}

