const Player = ((name, marker) => {

	return { name, marker }
})

const GameBoard = (() => {

	const p1 = Player("Orkun", "X");
	const p2 = Player("Foe", "O");

	let turn = 0;

	const boxs = document.querySelectorAll('.box');
	const container = document.querySelector('#container');

	let gameBoard = [];
	const boxsArr = Array.from(boxs);
	let activePlayer;
	const play = function () {
		boxsArr.forEach((box) => {
			let index = boxsArr.indexOf(box);

			box.addEventListener('click', () => {
				
				if (turn % 2 == 0) {
					
					if (gameBoard[index] === undefined) {
						activePlayer=p1.name;
						let spanText = document.createElement("span");
						spanText.classList.add("spanText");
						spanText.innerText = p1.marker;
						boxsArr[index].appendChild(spanText);
						gameBoard[index] = p1.marker;
						console.log(gameBoard);
						turn++;
						checkWinners();

					}
				}

				if (turn % 2 == 1) {
					
					if (gameBoard[index] === undefined) {
						activePlayer=p2.name;
						let spanText = document.createElement("span");
						spanText.classList.add("spanText");
						spanText.innerText = p2.marker;
						boxsArr[index].appendChild(spanText);
						gameBoard[index] = p2.marker;
						console.log(gameBoard);
						turn++;
						checkWinners();
					}
				}

			});
		}
		)
	}
	const checkWinners = function(){
		if(gameBoard[0]===gameBoard[1]&&gameBoard[0]===gameBoard[2]&&gameBoard[0] !== undefined||
			gameBoard[3]===gameBoard[4]&&gameBoard[4]===gameBoard[5]&&gameBoard[3] !== undefined||
			gameBoard[6]===gameBoard[7]&&gameBoard[7]===gameBoard[8]&&gameBoard[6] !== undefined||
			gameBoard[0]===gameBoard[3]&&gameBoard[0]===gameBoard[6]&&gameBoard[0] !== undefined||
			gameBoard[1]===gameBoard[4]&&gameBoard[4]===gameBoard[7]&&gameBoard[1] !== undefined||
			gameBoard[2]===gameBoard[5]&&gameBoard[2]===gameBoard[8]&&gameBoard[2] !== undefined||
			gameBoard[0]===gameBoard[4]&&gameBoard[0]===gameBoard[8]&&gameBoard[0] !== undefined||
			gameBoard[2]===gameBoard[4]&&gameBoard[2]===gameBoard[6]&&gameBoard[2] !== undefined
			){
				console.log(activePlayer);
				boxsArr.forEach((box) =>{
					box.style.display="none";
				})
				let title=document.createElement('h1');
				title.style.color="white";
				title.style.margin="auto";
				title.innerHTML=activePlayer;
				container.appendChild(title);
				
		}
		else if (turn===9){
			boxsArr.forEach((box) =>{
				box.style.display="none";
			})
			let title=document.createElement('h1');
			title.style.color="white";
			title.style.margin="auto";
			title.innerHTML="draw";
			container.appendChild(title);
		}

	}
	return { play,checkWinners };
}
)();


const Game = (() => {


	GameBoard.play();
	

	return {}
})();


