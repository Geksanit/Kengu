import { pipe } from "fp-ts/lib/function";
import { applySpeed } from "./movement";
import { PhisParams, Object } from "./types";
import { Vector } from "vector2d";

export const applyCollisions =
  (props: PhisParams) =>
  (item: Object): Object => {
    const yBorder = 500;
    if (item.pos.y > yBorder) {
      const speed = new Vector(item.speed.x, -item.speed.y);
      const pos = new Vector(item.pos.x, yBorder - (item.pos.y - yBorder));
      return { ...item, speed, pos };
    }
    return item;
  };
