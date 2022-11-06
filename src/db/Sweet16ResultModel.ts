import { ResultModel } from './ResultModel';

export interface Sweet16ResultModel extends ResultModel {
  result: number;
  scores: point[][];
  playedAt: string;
}
