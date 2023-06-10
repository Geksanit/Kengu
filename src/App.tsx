import React, { useEffect, useRef } from "react";
import "./App.scss";
import { createController } from "./mvc/mvc";

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
        <h2>Kengu project</h2>
      </header>
      <main>
        <canvas ref={canvasRef} width={1000} height={1000} />
      </main>
    </div>
  );
}

export default App;
