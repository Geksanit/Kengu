import { Vector } from "vector2d";

export type Object = {
  pos: Vector;
  speed: Vector;
  mass: number;
};
export type Bone = {
  length: number; // m
  child: Joint[];
};
export type Joint = {
  min: number; // angle
  zero: number;
  max: number;
  maxSpeed: number;
  moment: number;
  energyC: number;
  child: Bone;
};
export type Node = Bone;
export type Trek = {
  frictionC: number; // 0 - 1
};

export type Ball = Object & {
  radius: number;
};

export type PhisParams = {
  G: Vector;
  speedC: number;
  maxSpeed: number;
  borderPolygon: Vector[];
};

export type Scene = {
  objects: Ball[];
};
