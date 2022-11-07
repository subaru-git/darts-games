import { ResultModel } from './ResultModel';

export interface AroundTheCompassResultModel extends ResultModel {
  result: number;
  scores: point[][];
  playedAt: string;
}
