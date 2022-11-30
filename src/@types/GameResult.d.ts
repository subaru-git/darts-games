interface GameResult {
  cricketmarkup: CricketMarkUpResult[];
  eagleseye: EaglesEyeResult[];
  doubletrouble: DoubleTroubleResult[];
  sweet16: Sweet16Result[];
  topsandtens: TopsAndTensResult[];
  twodartcombinations: TwoDartCombinationsResult[];
  aroundthecompass: AroundTheCompassResult[];
  tonsup: TonsUpResult[];
  route64: Route64Result[];
  eightythrew: EightyThrewResult[];
  shanghainights: ShanghaiNightsResult[];
  switchhitter: SwitchHitterResult[];
  bullybully: BullyBullyResult[];
  treblesforshow: TreblesForShowResult[];
}

interface CricketMarkUpResult {
  targetCount: number;
  result: number;
  scores: CricketMarkUpScore[];
  playedAt: string;
}

interface CricketMarkUpScore {
  number: number;
  count: number;
  total: number;
}

interface EaglesEyeResult {
  result: number;
  scores: point[][];
  playedAt: string;
}

interface DoubleTroubleResult {
  result: number;
  scores: point[][];
  playedAt: string;
}

interface Sweet16Result {
  result: number;
  scores: point[][];
  round: number;
  playedAt: string;
}

interface TopsAndTensResult {
  result: number;
  scores: point[][];
  playedAt: string;
}

interface TwoDartCombinationsResult {
  result: number;
  scores: point[][];
  playedAt: string;
}

interface AroundTheCompassResult {
  result: number;
  scores: point[][];
  round: number;
  playedAt: string;
}

interface TonsUpResult {
  result: number;
  scores: point[][];
  round: number;
  playedAt: string;
}

interface Route64Result {
  result: number;
  scores: point[][];
  round: number;
  playedAt: string;
}

interface EightyThrewResult {
  result: number;
  scores: point[][];
  round: number;
  playedAt: string;
}

interface ShanghaiNightsResult {
  result: number;
  scores: point[][];
  round: number;
  playedAt: string;
}

interface SwitchHitterResult {
  result: number;
  scores: point[][];
  round: number;
  playedAt: string;
}

interface BullyBullyResult {
  result: number;
  scores: point[][];
  round: number;
  playedAt: string;
}

interface TreblesForShowResult {
  result: number;
  scores: point[][];
  round: number;
  playedAt: string;
}

interface ArrangeResult {}
