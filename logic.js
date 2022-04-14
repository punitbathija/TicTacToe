(function () {
  const game = {
    gameBoard: new Array(9),
    state: true,
    input: undefined,

    init: function () {
      this.cacheDom();
      this.bindEvents();
    },

    cacheDom: function () {
      this.grid = document.querySelectorAll(".grid-item");
      this.winner = document.querySelector(".winner");
    },

    bindEvents: function () {
      this.grid.forEach((block) =>
        block.addEventListener("click", this.printValue)
      );
    },

    printValue: function (e) {
      if (this.innerText === "") {
        if (game.state) {
          game.input = "❌";
          game.state = false;
          this.innerText = game.input;
          let index = this.dataset.pos;
          game.gameBoard[index] = game.input;
          game.eval();
        } else {
          game.input = "⭕";
          game.state = true;
          this.innerText = game.input;
          let index = this.dataset.pos;
          game.gameBoard[index] = game.input;
          game.eval();
        }
      }
    },

    restartGame: function () {
      location.reload();
    },

    eval: function () {
      if (
        (game.gameBoard[0] === "❌" &&
          game.gameBoard[1] === "❌" &&
          game.gameBoard[2] === "❌") ||
        (game.gameBoard[3] === "❌" &&
          game.gameBoard[4] === "❌" &&
          game.gameBoard[5] === "❌") ||
        (game.gameBoard[6] === "❌" &&
          game.gameBoard[7] === "❌" &&
          game.gameBoard[8] === "❌") ||
        (game.gameBoard[0] === "❌" &&
          game.gameBoard[4] === "❌" &&
          game.gameBoard[8] === "❌") ||
        (game.gameBoard[2] === "❌" &&
          game.gameBoard[4] === "❌" &&
          game.gameBoard[6] === "❌") ||
        (game.gameBoard[0] === "❌" &&
          game.gameBoard[3] === "❌" &&
          game.gameBoard[6] === "❌") ||
        (game.gameBoard[1] === "❌" &&
          game.gameBoard[4] === "❌" &&
          game.gameBoard[7] === "❌") ||
        (game.gameBoard[2] === "❌" &&
          game.gameBoard[5] === "❌" &&
          game.gameBoard[8] === "❌")
      ) {
        alert("❌ Win's the Round🥳");
        game.restartGame();
      } else if (
        (game.gameBoard[0] === "⭕" &&
          game.gameBoard[1] === "⭕" &&
          game.gameBoard[2] === "⭕") ||
        (game.gameBoard[3] === "⭕" &&
          game.gameBoard[4] === "⭕" &&
          game.gameBoard[5] === "⭕") ||
        (game.gameBoard[6] === "⭕" &&
          game.gameBoard[7] === "⭕" &&
          game.gameBoard[8] === "⭕") ||
        (game.gameBoard[0] === "⭕" &&
          game.gameBoard[4] === "⭕" &&
          game.gameBoard[8] === "⭕") ||
        (game.gameBoard[2] === "⭕" &&
          game.gameBoard[4] === "⭕" &&
          game.gameBoard[6] === "⭕") ||
        (game.gameBoard[0] === "⭕" &&
          game.gameBoard[3] === "⭕" &&
          game.gameBoard[6] === "⭕") ||
        (game.gameBoard[1] === "⭕" &&
          game.gameBoard[4] === "⭕" &&
          game.gameBoard[7] === "⭕") ||
        (game.gameBoard[2] === "⭕" &&
          game.gameBoard[5] === "⭕" &&
          game.gameBoard[8] === "⭕")
      ) {
        alert("⭕ Win's the Round🥳");
        game.restartGame();
      } else if (!game.gameBoard.includes(undefined)) {
        alert("Draw❗ Nobody Win's this Round");
        game.restartGame();
      }
    },
  };
  game.init();
})();
