let deck = [];
const tipos = ['C', 'D', 'H', 'S']
const especiales = ['A', 'J', 'Q', 'K']

const creardeck = () => {
    for(let i = 2; i <= 10; i++) {
        for (let tipo of tipos){
            deck.push(i + tipo);
        }
    }
    

    for(let tipo of tipos){
        for(let esp of especiales){
            deck.push(esp + tipo)
        }        
    }
    console.log(deck);

}

creardeck();