export type Vector2 = {
  x: number;
  y: number;
};
export type Item = {
  pos: Vector2;
  speed: Vector2;
};
export type Bone = {
  mass: number; // kg
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
