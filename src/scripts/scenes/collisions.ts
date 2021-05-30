import k from "../kaboom";

export default function Collisions() {
    const player = k.add([
        k.rect(32, 64),
        k.pos(k.width() * 0.5, 200),
        k.body(),
        k.solid(),
    ]);

    // log out what the player can do
    // console.log(player);

    k.add([
        k.pos(k.width() * 0.5, k.height() * 0),
        k.text("hello world", 16),
        k.origin("center"),
        k.body(),
        k.solid(),
    ]);

    // the floor
    k.add([k.pos(0, k.height()), k.rect(k.width(), 50), k.solid()]);
}
