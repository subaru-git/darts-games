import Game from "./N01Game";

test("create instance", () => {
  const game = new Game(501);
  expect(game).toBeTruthy();
});

test("gameOn", () => {
  const game = new Game(501);
  game.gameOn();
  expect(game).toBeTruthy();
  expect(game["currentPlayer"]).not.toBeNull();
  expect(game["currentPlayer"]?.getName()).toBe("Player1");
});

test("in gaming", () => {
  const game = new Game(501);
  game.gameOn();
  expect(game).toBeTruthy();
  expect(game["currentPlayer"]).not.toBeNull();
  expect(game["currentPlayer"]?.getName()).toBe("Player1");
  expect(game.getScore()).toEqual([[501], [501]]);
  game.addScore("20");
  expect(game.getTargetScore()).toEqual(481);
  expect(game.getRoundScore()).toEqual(["20"]);
  game.addScore("19");
  expect(game.getTargetScore()).toEqual(462);
  expect(game.getRoundScore()).toEqual(["20", "19"]);
  game.addScore("18");
  expect(game.getTargetScore()).toEqual(444);
  expect(game.getRoundScore()).toEqual(["20", "19", "18"]);
  game.roundChange();
  expect(game.getScore()).toEqual([[501, 444], [501]]);
  game.changePlayer();
  expect(game["currentPlayer"]).not.toBeNull();
  expect(game["currentPlayer"]?.getName()).toBe("Player2");
  game.addScore("20T");
  expect(game.getTargetScore()).toEqual(441);
  expect(game.getRoundScore()).toEqual(["20T"]);
  game.addScore("5");
  expect(game.getTargetScore()).toEqual(436);
  expect(game.getRoundScore()).toEqual(["20T", "5"]);
  game.addScore("3");
  expect(game.getTargetScore()).toEqual(433);
  expect(game.getRoundScore()).toEqual(["20T", "5", "3"]);
  game.roundChange();
  expect(game.getScore()).toEqual([
    [501, 444],
    [501, 433],
  ]);
  game.changePlayer();
  expect(game["currentPlayer"]).not.toBeNull();
  expect(game["currentPlayer"]?.getName()).toBe("Player1");
  game.addScore("20T");
  expect(game.getTargetScore()).toEqual(384);
  expect(game.getRoundScore()).toEqual(["20T"]);
  game.addScore("20T");
  expect(game.getTargetScore()).toEqual(324);
  expect(game.getRoundScore()).toEqual(["20T", "20T"]);
  game.addScore("20T");
  expect(game.getTargetScore()).toEqual(264);
  expect(game.getRoundScore()).toEqual(["20T", "20T", "20T"]);
  game.roundChange();
  expect(game.getScore()).toEqual([
    [501, 444, 264],
    [501, 433],
  ]);
  game.changePlayer();
  expect(game["currentPlayer"]).not.toBeNull();
  expect(game["currentPlayer"]?.getName()).toBe("Player2");
  game.addScore("19T");
  expect(game.getTargetScore()).toEqual(376);
  expect(game.getRoundScore()).toEqual(["19T"]);
  game.addScore("19T");
  expect(game.getTargetScore()).toEqual(319);
  expect(game.getRoundScore()).toEqual(["19T", "19T"]);
  game.addScore("19T");
  expect(game.getTargetScore()).toEqual(262);
  expect(game.getRoundScore()).toEqual(["19T", "19T", "19T"]);
  game.roundChange();
  expect(game.getScore()).toEqual([
    [501, 444, 264],
    [501, 433, 262],
  ]);
  game.changePlayer();
  expect(game["currentPlayer"]).not.toBeNull();
  expect(game["currentPlayer"]?.getName()).toBe("Player1");
  game.addScore("20T");
  expect(game.getTargetScore()).toEqual(204);
  expect(game.getRoundScore()).toEqual(["20T"]);
  game.addScore("20T");
  expect(game.getTargetScore()).toEqual(144);
  expect(game.getRoundScore()).toEqual(["20T", "20T"]);
  game.addScore("20T");
  expect(game.getTargetScore()).toEqual(84);
  expect(game.getRoundScore()).toEqual(["20T", "20T", "20T"]);
  game.addScore("20T");
  expect(game.getTargetScore()).toEqual(84);
  expect(game.getRoundScore()).toEqual(["20T", "20T", "20T"]);
  game.roundChange();
  expect(game.getScore()).toEqual([
    [501, 444, 264, 84],
    [501, 433, 262],
  ]);
  game.changePlayer();
  expect(game["currentPlayer"]).not.toBeNull();
  expect(game["currentPlayer"]?.getName()).toBe("Player2");
  game.addScore("19T");
  expect(game.getTargetScore()).toEqual(205);
  expect(game.getRoundScore()).toEqual(["19T"]);
  game.addScore("19T");
  expect(game.getTargetScore()).toEqual(148);
  expect(game.getRoundScore()).toEqual(["19T", "19T"]);
  game.addScore("19T");
  expect(game.getTargetScore()).toEqual(91);
  expect(game.getRoundScore()).toEqual(["19T", "19T", "19T"]);
  game.removeScore();
  expect(game.getRoundScore()).toEqual([]);
  game.addScore("19T");
  expect(game.getTargetScore()).toEqual(205);
  expect(game.getRoundScore()).toEqual(["19T"]);
  game.addScore("19T");
  expect(game.getTargetScore()).toEqual(148);
  expect(game.getRoundScore()).toEqual(["19T", "19T"]);
  game.addScore("19T");
  expect(game.getTargetScore()).toEqual(91);
  expect(game.getRoundScore()).toEqual(["19T", "19T", "19T"]);
  game.roundChange();
  expect(game.getScore()).toEqual([
    [501, 444, 264, 84],
    [501, 433, 262, 91],
  ]);
  game.changePlayer();
  expect(game["currentPlayer"]).not.toBeNull();
  expect(game["currentPlayer"]?.getName()).toBe("Player1");
  game.addScore("20T");
  expect(game.getTargetScore()).toEqual(24);
  expect(game.getRoundScore()).toEqual(["20T"]);
  game.addScore("20T");
  expect(game.getTargetScore()).toEqual(-36);
  expect(game.getRoundScore()).toEqual(["20T", "20T"]);
  game.roundChange();
  expect(game.getScore()).toEqual([
    [501, 444, 264, 84, 84],
    [501, 433, 262, 91],
  ]);
  game.changePlayer();
  expect(game["currentPlayer"]).not.toBeNull();
  expect(game["currentPlayer"]?.getName()).toBe("Player2");
  game.addScore("17T");
  expect(game.getTargetScore()).toEqual(40);
  expect(game.getRoundScore()).toEqual(["17T"]);
  game.addScore("20");
  expect(game.getTargetScore()).toEqual(20);
  expect(game.getRoundScore()).toEqual(["17T", "20"]);
  game.roundChange();
  expect(game.getScore()).toEqual([
    [501, 444, 264, 84, 84],
    [501, 433, 262, 91, 20],
  ]);
  game.changePlayer();
  expect(game["currentPlayer"]).not.toBeNull();
  expect(game["currentPlayer"]?.getName()).toBe("Player1");
  game.addScore("D-BULL");
  expect(game.getTargetScore()).toEqual(34);
  expect(game.getRoundScore()).toEqual(["D-BULL"]);
  game.addScore("S-BULL");
  expect(game.getTargetScore()).toEqual(-16);
  expect(game.getRoundScore()).toEqual(["D-BULL", "S-BULL"]);
  game.roundChange();
  expect(game.getScore()).toEqual([
    [501, 444, 264, 84, 84, 84],
    [501, 433, 262, 91, 20],
  ]);
});

test("changePlayerName", () => {
  const game = new Game(501);
  expect(game["players"][0].getName()).toBe("Player1");
  expect(game["players"][1].getName()).toBe("Player2");
  game.changePlayerName(["Player3", "Player4"]);
  expect(game["players"][0].getName()).toBe("Player3");
  expect(game["players"][1].getName()).toBe("Player4");
  expect(game.getCurrentPlayer()?.getName()).toBe("Player3");
});
