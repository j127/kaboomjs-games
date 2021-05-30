import k from "./kaboom";

import Start from "./scenes/start";

k.scene("start", Start);

k.scene("main", () => {
    k.go("start");
});

k.start("main");
