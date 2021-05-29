import kaboom, { Vec2, GameObj } from "kaboom";
// import asepritePlugin from "kaboom/plugins/aseprite";

const k = kaboom({
    // plugins: [asepritePlugin],
});

function spawnBullet(p: Vec2): GameObj {
    return k.add([k.pos(p), k.sprite("bullet")]);
}
