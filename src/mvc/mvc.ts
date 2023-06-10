export const createModel = () => {
  return {};
};

export const createView = (ctx: CanvasRenderingContext2D) => {
  const settings = {
    clearColor: "#FFF",
  };

  const clear = () => {
    ctx.fillStyle = settings.clearColor;
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  };

  const render = () => {
    clear();
    ctx.fillStyle = "rgb(200,0,0)";
    ctx.fillRect(10, 10, 55, 50);

    ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
    ctx.fillRect(30, 30, 55, 50);
  };

  const animate = () => {
    window.requestAnimationFrame(animate);
    render();
  };

  return { animate };
};

export const createController = (canvas: HTMLCanvasElement) => {
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    return { run: () => {} };
  }
  const model = createModel();
  const view = createView(ctx);

  const run = () => {
    view.animate();
  };
  return { run };
};
