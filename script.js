const table = document.querySelector("#tbbingo");
const letter = document.querySelectorAll(".letter-bingo"),
winBtn = document.querySelector(".win-btn"),
winBingo = document.querySelector(".you-win-bingo");

const winPosition = [
    [0,1,2,3,4],
    [5,6,7,8,9],
    [10,11,12,13,14],
    [15,16,17,18,19],
    [20,21,22,23,24],
    [0,5,10,15,20],
    [1,6,11,16,21],
    [2,7,12,17,22],
    [3,8,13,18,23],
    [0,6,12,18,24],
    [4,8,12,16,20],
    [4,9,14,19,24]
]


let arr = Array.apply(null, {length: 26}).map(Number.call, Number);
arr.shift();
shuffle(arr);
function shuffle(arr){
    let currentIndex = arr.length, randomIndex;

    while(currentIndex != 0){
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;


        [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex],
        arr[currentIndex]];
    }
    return arr;
}

let iterator = 0;
for (i = 0; i < 5; i++){
    let tr = document.createElement("tr")
    table.appendChild(tr)

    for (j = 0; j < 5; j++){
        let td = document.createElement("td")
        td.id = arr[iterator].toString()
        td.style.height = "20%"
        td.style.width = "20%"
        td.classList.add("main-table-cell")

        let div = document.createElement("div")
        div.classList.add("cell-format")
        div.textContent = arr[iterator].toString()
        td.appendChild(div)
        tr.appendChild(td)
            iterator++;
    }
}



const cell = document.querySelectorAll(".main-table-cell");

let winiterator = 0;
cell.forEach(e => {
    e.addEventListener("click", () =>{
        e.classList.add("strickout");

        if(matchwin()){
            letter[winiterator].classList.add("show-bingo");

            winiterator++;

            if(winiterator === 5){
                winBingo.style.display = "flex";
             }
        }
    })
})


function matchwin(){

    const cell = document.querySelectorAll(".main-table-cell");


    return winPosition.some(Combination => {
        let ite = 0;
        Combination.forEach(index => {
            if(cell[index]. classList.contains("strickout")) ite++;
        })

        if(ite == 5){
            let indexwin = winPosition.indexOf(Combination);
            winPosition.splice(indexwin, 1)
        }
        
        return Combination.every(index => {
            return cell[index].classList.contains("strickout")
        })
    })

}
