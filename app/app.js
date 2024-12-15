// ! KUTUPHANE 1-KISIM
let game1 = { name: "GOD OF WAR", buy: 55 + " $", ref: "1.1.REF" };
let game2 = { name: "GTA V", buy: 20 + " $", ref: "1.2.REF" };
let game3 = { name: "RETHIDENT VII", buy: 10 + " $", ref: "1.3.REF" };
let game4 = { name: "RUST", buy: 30 + " $", ref: "1.4.REF" };
let game5 = { name: "UNCARTELD 5", buy: 42 + " $", ref: "1.5.REF" };
let game6 = { name: "ANCARTELD 5", buy: 42 + " $", ref: "2.1.REF" };

let games = [game1, game2, game3, game4, game5, game6];

// Функция для создания массива объектов
function createRefs(rows, cols) {
    const refs = [];
    for (let i = 1; i <= rows; i++) {
        const row = [];
        for (let j = 1; j <= cols; j++) {
            row.push({ cod: `${i}.${j}.REF`, show: false });
        }
        refs.push(row);
    }
    return refs;
}

// Создаем массив refs
const refs = createRefs(5, 5);

// Пример: Выводим массив refs в консоль
console.log(refs);

// ! KUTUPHANE 2-HISSE

const body = document.querySelector("body");

// Создаем input для ввода названия игры
const input = document.createElement("input");
input.type = "text";
input.placeholder = "Введите название игры";
body.appendChild(input);

// Создаем кнопку для подтверждения ввода
const button = document.createElement("button");
button.textContent = "Найти";
body.appendChild(button);

// Создаем div для вывода результатов
const obDiv = document.createElement("div");
obDiv.className = "obDiv";
body.appendChild(obDiv);

function createRef() {
  obDiv.innerHTML = ""; // Очищаем div перед добавлением новых элементов
  for (let i = 0; i < refs.length; i++) {
    let order = "";
    let div;
    for (let j = 0; j < 5; j++) {
      div = document.createElement("div");
      order += "|" + (refs[i][j].show ? refs[i][j].cod : "---") + "|";
      div.textContent = `${refs[i][j].show ? refs[i][j].cod : "---"}`;
      div.className = "box border-rad bg-green";
      obDiv.appendChild(div);
    }
    console.log(order);
    console.log("------------------------");
    order = "";
  }
}

function codFind(gameName) {
  let refCod = null;
  games.forEach(function (game) {
    if (game.name.toUpperCase().includes(gameName.toUpperCase(), 0)) {
      refCod = game.ref;
    }
  });
  return refCod;
}

function showRef(refCod) {
  for (let i = 0; i < refs.length; i++) {
    for (let j = 0; j < 5; j++) {
      if (refs[i][j].cod == refCod) {
        refs[i][j].show = true;
        break;
      }
    }
  }
}

// Обработка клика по кнопке
button.addEventListener("click", () => {
  const gamesName = input.value.trim(); // Получаем значение из input
  const refCod = codFind(gamesName);

  if(gamesName === ""){
    console.log("None");
  }else{
    if (refCod != null) {
        showRef(refCod);
        createRef();
      } else {
        console.log("Данная игра не добавлена: " + gamesName);
      }
      input.value = "";
  }
});
