const Player = ((name, marker) => {

    return { name, marker }
})

const GameBoard = (() => {

    const p1 = Player("player1", "X");
    const p2 = Player("player1", "O");

    let turn = 0;

    const boxs = document.querySelectorAll('.box');

    let gameBoard = [];
    const boxsArr = Array.from(boxs);

    const turnPlay = function () {
        boxsArr.forEach((box) => {
            let index = boxsArr.indexOf(box);

            box.addEventListener('click', () => {

                if (turn % 2 == 0) {
                    if (gameBoard[index] === undefined) {
                        console.log(gameBoard[0]);
                        let spanText = document.createElement("span");
                        spanText.classList.add("spanText");
                        spanText.innerText = p1.marker;
                        boxsArr[index].appendChild(spanText);
                        gameBoard[index] = p1.marker;   
                        console.log(gameBoard);
                        turn++;
                    

                    }
                }

                if (turn % 2 == 1) {
                    if (gameBoard[index] === undefined) {
                        let spanText = document.createElement("span");
                        spanText.classList.add("spanText");
                        spanText.innerText = p2.marker;
                        boxsArr[index].appendChild(spanText);
                        gameBoard[index] =p2.marker;
                        console.log(gameBoard);
                        turn++;                        
                    }
                }

            });
        }
        )
    }




    return {turnPlay };
}
)();


const Game = (() => {


    GameBoard.turnPlay();







return {}
})();


