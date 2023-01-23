import Game from './TonsUpGame';

test('create instance', () => {
  const game = new Game(3);
  expect(game).toBeTruthy();
});

test('in gaming', () => {
  const game = new Game(3);
  expect(game.getRound()).toBe(1);
  expect(game.getCurrentTarget()).toBe(100);
  game.addScore('20');
  expect(game.getCurrentTarget()).toBe(80);
  game.addScore('T20');
  expect(game.getCurrentTarget()).toBe(20);
  game.addScore('20');
  expect(game.getCurrentTarget()).toBe(20);
  expect(game.getTotalScore()).toEqual(0);
  game.roundChange();
  expect(game.getRound()).toBe(2);
  expect(game.getCurrentTarget()).toBe(100);
  game.addScore('20');
  expect(game.getCurrentTarget()).toBe(80);
  game.addScore('D20');
  expect(game.getCurrentTarget()).toBe(40);
  game.addScore('D20');
  expect(game.getCurrentTarget()).toBe(0);
  expect(game.getTotalScore()).toEqual(10);
  game.roundChange();
  expect(game.getRound()).toBe(3);
  expect(game.getCurrentTarget()).toBe(100);
  game.addScore('T20');
  expect(game.getCurrentTarget()).toBe(40);
  game.addScore('D20');
  expect(game.getCurrentTarget()).toBe(0);
  expect(game.getRoundScore()).toEqual(['T20', 'D20', '0']);
  expect(game.getTotalScore()).toEqual(30);
  expect(game.isFinished()).toBeTruthy();
});
