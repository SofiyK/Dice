
// функция генерации рандомных чисел от 1 до 12
function randomInteger() {
    let rand = 1 + Math.random() * 12;
    return Math.floor(rand);
};


// функиция, удаляющая элементы перед созданием новых
function clearWindow(...args) {
    if (document.getElementById(args[0])){
        for (let i = 0; i < args.length; i++) {
            document.getElementById(args[i]).remove();
        }
    }
};

// функкция, высчитывающая победителя
function winner(p, c) {
    if (p > c) {
        return 'ВЫ ВЫИГРАЛИ :)'
    } if (p == c) {
        return 'НИЧЬЯ'
    } else {
        return 'ВЫ ПРОИГРАЛИ :('
    }
}

// фнкция по созданию элементов с числами
function create(elemN ,idN, classN, text) {
    let created = document.createElement(elemN);
    created.id = idN;
    created.className = classN;
    created.innerHTML = text;
    document.body.append(created);
};
  



class Menu{
    constructor(elem) {
        elem.onclick = this.onClick.bind(this);
    }
    start(){
        clearWindow('player', 'comp', 'win');
        let pNum = randomInteger();
        let cNum = randomInteger();  
        create('div', 'player', 'numbers', pNum);
        create('div', 'comp', 'numbers', cNum);
        create('div', 'win', 'text', winner(pNum, cNum));
    }
    onClick(event) {
        let action = event.target.dataset.action;
        if (action) {
            this[action]();
        }
    }
}   

new Menu(menu)

