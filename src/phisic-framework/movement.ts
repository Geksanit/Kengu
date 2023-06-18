import { Object, PhisParams } from "./types";

export const applyGravity =
  (props: PhisParams) =>
  (item: Object): Object => {
    return { ...item, speed: item.speed.add(props.G) };
  };

export const applySpeed =
  (props: PhisParams) =>
  (item: Object): Object => {
    return {
      ...item,
      pos: item.pos.add(item.speed).mulS(props.speedC),
    };
  };

export const applyMaxSpeed =
  (props: PhisParams) =>
  (item: Object): Object => {
    return {
      ...item,
      speed:
        item.speed.length() > props.maxSpeed
          ? item.speed.normalise().mulS(props.maxSpeed)
          : item.speed,
    };
  };
