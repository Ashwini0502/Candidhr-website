import Matter from "matter-js";

// Add any required Matter.js plugins here
Matter.use("matter-attractors");
Matter.use("matter-wrap");

function runMatter() {
  const canvas = document.querySelector("#wrapper-canvas");

  var Engine = Matter.Engine,
    Runner = Matter.Runner,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Body = Matter.Body,
    Mouse = Matter.Mouse,
    Events = Matter.Events,
    Common = Matter.Common;

  var engine = Engine.create();
  engine.world.gravity.y = 0;
  engine.world.gravity.x = 0;

  const render = Render.create({
    element: canvas,
    engine: engine,
    options: {
      width: window.innerWidth,
      height: window.innerHeight,
      wireframes: false,
      background: "transparent",
    },
  });

  const runner = Runner.create();
  const world = engine.world;

  // Center gravity body
  const attractiveBody = Bodies.circle(
    window.innerWidth / 2,
    window.innerHeight / 2,
    Math.max(window.innerWidth / 25, window.innerHeight / 25) / 2,
    {
      isStatic: true,
      plugin: {
        attractors: [
          function (bodyA, bodyB) {
            return {
              x: (bodyA.position.x - bodyB.position.x) * 1e-6,
              y: (bodyA.position.y - bodyB.position.y) * 1e-6,
            };
          },
        ],
      },
    }
  );
  World.add(world, attractiveBody);

  // Add randomly shaped bodies
  for (let i = 0; i < 60; i++) {
    const x = Common.random(0, window.innerWidth);
    const y = Common.random(0, window.innerHeight);
    const s = Common.random() > 0.6 ? Common.random(10, 80) : Common.random(4, 60);
    const polygonSides = Common.random(3, 6);

    const body = Bodies.polygon(x, y, polygonSides, s, {
      mass: s / 20,
      frictionAir: 0.02,
      render: {
        fillStyle: "#222222",
        strokeStyle: "#000000",
        lineWidth: 2,
      },
    });
    World.add(world, body);
  }

  // Mouse interaction for attraction
  const mouse = Mouse.create(render.canvas);
  Events.on(engine, "afterUpdate", function () {
    if (!mouse.position.x) return;
    Body.translate(attractiveBody, {
      x: (mouse.position.x - attractiveBody.position.x) * 0.12,
      y: (mouse.position.y - attractiveBody.position.y) * 0.12,
    });
  });

  // Start the engine
  Runner.run(runner, engine);
  Render.run(render);

  return {
    engine,
    runner,
    render,
    stop: () => {
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
      Matter.World.clear(engine.world);
      Matter.Engine.clear(engine);
    },
  };
}

export default runMatter;
