import { Item } from "./types";

type Props = {
  G: number;
};

export const gravity =
  (props: Props) =>
  (item: Item): Item => {
    return { ...item, speed: { ...item.speed, y: item.speed.y - props.G } };
  };

export const move =
  (props: {}) =>
  (item: Item): Item => {
    return {
      ...item,
      pos: { x: item.pos.x + item.speed.x, y: item.pos.y + item.speed.y },
    };
  };
