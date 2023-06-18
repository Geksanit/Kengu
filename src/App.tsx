import React, { useEffect, useRef } from "react";
import "./App.scss";
import { createController } from "./mvc/mvc";
import { Vector } from "vector2d";

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const { current } = canvasRef;
    if (current) {
      const controller = createController(current);
      controller.run();
    }
  }, [canvasRef]);

  return (
    <div className="App">
      <header>
        <h1>Kengu project</h1>
      </header>
      <main>
        <canvas ref={canvasRef} width={1000} height={600} />
      </main>
    </div>
  );
}

export default App;
