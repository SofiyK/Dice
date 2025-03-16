
// функция генерации рандомных чисел от 1 до 12
function randomInteger() {
    let rand = 1 + Math.random() * 12;
    return Math.floor(rand);
};


function updateContent() {
    let pNum = randomInteger();
    let cNum = randomInteger();

    // Обновляем числа игрока и компьютера
    document.getElementById('player').textContent = pNum;
    document.getElementById('comp').textContent = cNum;

    // Обновляем результат игры
    document.getElementById('result').textContent = winner(pNum, cNum);
}

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


class Menu{
    constructor(elem) {
        elem.onclick = this.onClick.bind(this);
    }
    start() {
        updateContent(); // Обновляем содержимое вместо удаления и создания элементов
    }
    onClick(event) {
        let action = event.target.dataset.action;
        if (action) {
            this[action]();
        }
    }
}   
new Menu(menu)

