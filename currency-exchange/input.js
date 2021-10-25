function inputAmount( root, hint, cbName) {

// root - unde trebuie sa apara
// hint - textul cu mesajul pentru user
// cb -call back

    root.innerHTML = `<input type="text" placeholder="${hint}" onkeyup="${cbName}(event)"/>`  //pentru hw3 am adaugat event in cb

}
