/**
 * This module was automatically generated by `ts-interface-builder`
 */
import * as t from "ts-interface-checker";
// tslint:disable:object-literal-key-quotes

export const point = t.union(t.lit('0'), t.lit('1'), t.lit('1D'), t.lit('1T'), t.lit('2'), t.lit('2D'), t.lit('2T'), t.lit('3'), t.lit('3D'), t.lit('3T'), t.lit('4'), t.lit('4D'), t.lit('4T'), t.lit('5'), t.lit('5D'), t.lit('5T'), t.lit('6'), t.lit('6D'), t.lit('6T'), t.lit('7'), t.lit('7D'), t.lit('7T'), t.lit('8'), t.lit('8D'), t.lit('8T'), t.lit('9'), t.lit('9D'), t.lit('9T'), t.lit('10'), t.lit('10D'), t.lit('10T'), t.lit('11'), t.lit('11D'), t.lit('11T'), t.lit('12'), t.lit('12D'), t.lit('12T'), t.lit('13'), t.lit('13D'), t.lit('13T'), t.lit('14'), t.lit('14D'), t.lit('14T'), t.lit('15'), t.lit('15D'), t.lit('15T'), t.lit('16'), t.lit('16D'), t.lit('16T'), t.lit('17'), t.lit('17D'), t.lit('17T'), t.lit('18'), t.lit('18D'), t.lit('18T'), t.lit('19'), t.lit('19D'), t.lit('19T'), t.lit('20'), t.lit('20D'), t.lit('20T'), t.lit('S-BULL'), t.lit('D-BULL'), t.lit('OUT'));

export const DoubleTroubleProgress = t.iface([], {
  "roundScore": t.array("point"),
  "score": t.array(t.array("point")),
});

export const BullyBullyProgress = t.iface([], {
  "roundScore": t.array("point"),
  "score": t.array(t.array("point")),
  "round": "number",
});

export const Sweet16Progress = t.iface([], {
  "roundScore": t.array("point"),
  "score": t.array(t.array("point")),
  "round": "number",
});

export const TopsAndTensProgress = t.iface([], {
  "roundScore": t.array("point"),
  "score": t.array(t.array("point")),
  "round": "number",
});

export const TwoDartCombinationsProgress = t.iface([], {
  "roundScore": t.array("point"),
  "score": t.array(t.array("point")),
});

export const AroundTheCompassProgress = t.iface([], {
  "roundScore": t.array("point"),
  "score": t.array(t.array("point")),
  "round": "number",
});

export const TonsUpProgress = t.iface([], {
  "roundScore": t.array("point"),
  "score": t.array(t.array("point")),
  "round": "number",
});

export const Route64Progress = t.iface([], {
  "roundScore": t.array("point"),
  "score": t.array(t.array("point")),
  "round": "number",
});

export const EightyThrewProgress = t.iface([], {
  "roundScore": t.array("point"),
  "score": t.array(t.array("point")),
  "round": "number",
});

export const ShanghaiNightsProgress = t.iface([], {
  "roundScore": t.array("point"),
  "score": t.array(t.array("point")),
  "round": "number",
});

export const SwitchHitterProgress = t.iface([], {
  "roundScore": t.array("point"),
  "score": t.array(t.array("point")),
  "round": "number",
});

export const TreblesForShowProgress = t.iface([], {
  "roundScore": t.array("point"),
  "score": t.array(t.array("point")),
  "round": "number",
});

export const ArrangeGameProgress = t.iface([], {
  "roundScore": t.array("point"),
  "score": t.array(t.array("point")),
  "targetOutCont": "number",
  "targets": t.array("number"),
});

export const GameResult = t.iface([], {
  "cricketmarkup": t.array("CricketMarkUpResult"),
  "eagleseye": t.array("EaglesEyeResult"),
  "doubletrouble": t.array("DoubleTroubleResult"),
  "sweet16": t.array("Sweet16Result"),
  "topsandtens": t.array("TopsAndTensResult"),
  "twodartcombinations": t.array("TwoDartCombinationsResult"),
  "aroundthecompass": t.array("AroundTheCompassResult"),
  "tonsup": t.array("TonsUpResult"),
  "route64": t.array("Route64Result"),
  "eightythrew": t.array("EightyThrewResult"),
  "shanghainights": t.array("ShanghaiNightsResult"),
  "switchhitter": t.array("SwitchHitterResult"),
  "bullybully": t.array("BullyBullyResult"),
  "treblesforshow": t.array("TreblesForShowResult"),
});

export const CricketMarkUpResult = t.iface([], {
  "targetCount": "number",
  "result": "number",
  "scores": t.array("CricketMarkUpScore"),
  "playedAt": "string",
});

export const CricketMarkUpScore = t.iface([], {
  "number": "number",
  "count": "number",
  "total": "number",
});

export const EaglesEyeResult = t.iface([], {
  "result": "number",
  "scores": t.array(t.array("point")),
  "playedAt": "string",
});

export const DoubleTroubleResult = t.iface([], {
  "result": "number",
  "scores": t.array(t.array("point")),
  "playedAt": "string",
});

export const Sweet16Result = t.iface([], {
  "result": "number",
  "scores": t.array(t.array("point")),
  "round": "number",
  "playedAt": "string",
});

export const TopsAndTensResult = t.iface([], {
  "result": "number",
  "scores": t.array(t.array("point")),
  "playedAt": "string",
});

export const TwoDartCombinationsResult = t.iface([], {
  "result": "number",
  "scores": t.array(t.array("point")),
  "playedAt": "string",
});

export const AroundTheCompassResult = t.iface([], {
  "result": "number",
  "scores": t.array(t.array("point")),
  "round": "number",
  "playedAt": "string",
});

export const TonsUpResult = t.iface([], {
  "result": "number",
  "scores": t.array(t.array("point")),
  "round": "number",
  "playedAt": "string",
});

export const Route64Result = t.iface([], {
  "result": "number",
  "scores": t.array(t.array("point")),
  "round": "number",
  "playedAt": "string",
});

export const EightyThrewResult = t.iface([], {
  "result": "number",
  "scores": t.array(t.array("point")),
  "round": "number",
  "playedAt": "string",
});

export const ShanghaiNightsResult = t.iface([], {
  "result": "number",
  "scores": t.array(t.array("point")),
  "round": "number",
  "playedAt": "string",
});

export const SwitchHitterResult = t.iface([], {
  "result": "number",
  "scores": t.array(t.array("point")),
  "round": "number",
  "playedAt": "string",
});

export const BullyBullyResult = t.iface([], {
  "result": "number",
  "scores": t.array(t.array("point")),
  "round": "number",
  "playedAt": "string",
});

export const TreblesForShowResult = t.iface([], {
  "result": "number",
  "scores": t.array(t.array("point")),
  "round": "number",
  "playedAt": "string",
});

export const RespectResult = t.iface([], {
  "companies": t.array("WebsiteResult"),
  "professionals": t.array("WebsiteResult"),
  "youtube": t.array("WebsiteResult"),
});

export const WebsiteResult = t.iface([], {
  "title": t.union("string", "null"),
  "image": t.union("string", "null"),
  "description": t.union("string", "null"),
  "url": t.union("string", "null"),
  "type": t.union("string", "null"),
});

export const Window = t.iface([], {
  "adsbygoogle": t.opt(t.array(t.iface([], {
    [t.indexKey]: "unknown",
  }))),
});

const exportedTypeSuite: t.ITypeSuite = {
  point,
  DoubleTroubleProgress,
  BullyBullyProgress,
  Sweet16Progress,
  TopsAndTensProgress,
  TwoDartCombinationsProgress,
  AroundTheCompassProgress,
  TonsUpProgress,
  Route64Progress,
  EightyThrewProgress,
  ShanghaiNightsProgress,
  SwitchHitterProgress,
  TreblesForShowProgress,
  ArrangeGameProgress,
  GameResult,
  CricketMarkUpResult,
  CricketMarkUpScore,
  EaglesEyeResult,
  DoubleTroubleResult,
  Sweet16Result,
  TopsAndTensResult,
  TwoDartCombinationsResult,
  AroundTheCompassResult,
  TonsUpResult,
  Route64Result,
  EightyThrewResult,
  ShanghaiNightsResult,
  SwitchHitterResult,
  BullyBullyResult,
  TreblesForShowResult,
  RespectResult,
  WebsiteResult,
  Window,
};
export default exportedTypeSuite;
