import k from "../kaboom";

export default function Start() {
    k.add([
        k.pos(k.width() * 0.5, k.height() * 0.5),
        k.text("hell xorld", 16),
        k.origin("center"),
    ]);
}
