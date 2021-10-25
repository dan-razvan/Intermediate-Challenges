function selectList( root, data, cbName ) {
    let html = `<select onchange="${cbName}(event)">` //pt hw3 am adaugat event in cb



    //HW2. rewrite code -> .forEach() sau alta metoda

    Object.values(data).forEach(element => {   //am rescris codul prin forEach() pentru hw2
        let code = element
        html += `<option>${code}</option>`
    })

    // for(let i = 0; i < Object.values(data).length;i++){
    //     let code = Object.values(data)[i]
    //     html += `<option>${code}</option>`
    // }
    root.innerHTML = html
}

