import { Vector } from "vector2d";
import { PhisParams, Scene, Ball } from "../phisic-framework";
import {
  applyGravity,
  applyMaxSpeed,
  applySpeed,
} from "../phisic-framework/movement";
import { pipe } from "fp-ts/lib/function";
import { array, function as func } from "fp-ts";
import { applyCollisions } from "../phisic-framework/collisions";

export const createModel = () => {
  const params: PhisParams = {
    G: new Vector(0, 0.01),
    maxSpeed: 10,
    speedC: 1,
    borderPolygon: [],
  };
  const scene: Scene = {
    objects: [
      {
        mass: 1,
        pos: new Vector(100, 100),
        radius: 20,
        speed: new Vector(0.1, -1),
      },
    ],
  };

  return {
    params,
    scene,
  };
};

type Model = ReturnType<typeof createModel>;

const compose =
  <A>(fns: ((a: A) => A)[]) =>
  (arg: A) =>
    pipe(
      fns,
      array.reduce(arg, (acc, f) => f(acc))
    );

export const calcModel = ({ params, scene }: Model): Model => {
  const calculate = pipe(
    [applyGravity, applyMaxSpeed, applySpeed, applyCollisions],
    array.map(func.apply(params)),
    compose
  );
  return {
    params,
    scene: { objects: scene.objects.map((o) => ({ ...o, ...calculate(o) })) },
  };
};

export const createView = (ctx: CanvasRenderingContext2D) => {
  const settings = {
    clearColor: "#FFF",
  };

  const clear = () => {
    ctx.fillStyle = settings.clearColor;
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  };

  const renderBall = (ball: Ball) => {
    ctx.beginPath();
    ctx.arc(ball.pos.x, ball.pos.y, ball.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = "blue";
    ctx.fill();
  };

  const render = (model: Model) => {
    clear();
    ctx.fillStyle = "rgb(200,0,0)";
    ctx.fillRect(10, 10, 55, 50);

    ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
    ctx.fillRect(30, 30, 55, 50);
    model.scene.objects.map(renderBall);
  };

  return { render };
};

export const createController = (canvas: HTMLCanvasElement) => {
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    return { run: () => {} };
  }
  let model = createModel();
  const view = createView(ctx);

  const run = () => {
    model = calcModel(model);
    view.render(model);
    window.requestAnimationFrame(run);
  };
  return { run };
};
