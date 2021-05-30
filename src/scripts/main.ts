import k from "./kaboom";

import Start from "./scenes/start";
import Collisions from "./scenes/collisions";

k.scene("start", Start);
k.scene("collisions", Collisions);

k.scene("main", () => {
    // k.go("start");
    k.go("collisions");
});

k.start("main");
