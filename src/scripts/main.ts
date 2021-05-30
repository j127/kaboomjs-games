import k from "./kaboom";

import Start from "./scenes/start";
import Collisions from "./scenes/collisions";
import Animations from "./scenes/animations";

// load tile sprites
k.loadSprite("tiles", "./tilemap.png", {
    sliceX: 20,
    sliceY: 20,
    anims: {
        idle: {
            from: 300,
            to: 300,
        },
        run: { from: 301, to: 302 },
    },
});

k.scene("start", Start);
k.scene("collisions", Collisions);
k.scene("animations", Animations);

k.scene("main", () => {
    // k.go("start");
    // k.go("collisions");
    k.go("animations");
});

k.start("main");
