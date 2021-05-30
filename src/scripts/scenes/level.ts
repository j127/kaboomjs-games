import k from "../kaboom";

const level1 = [
    "                                  ",
    "                                  ",
    "                                  ",
    "                                  ",
    "                                  ",
    "                                  ",
    "                                  ",
    "                                  ",
    "                 =======          ",
    "    ====                          ",
    "                         ====     ",
    "                                  ",
    "                  =======         ",
    "  <                           >   ",
    "==================================",
];

export default function Level() {
    k.addLevel(level1, {
        width: 16,
        height: 16,
        "=": [
            k.sprite("tiles", {
                frame: 65,
            }),
            k.solid(),
        ],
        "<": [
            k.sprite("tiles", {
                frame: 92,
            }),
        ],
        ">": [
            k.sprite("tiles", {
                frame: 93,
            }),
        ],
    });
    const player = k.add([
        k.sprite("tiles", {
            animSpeed: 0.1,
            frame: 300,
        }),
        k.pos(k.width() * 0.5, k.height() * 0.5),
        k.origin("center"),
        k.scale(1),
        k.body(),
    ]);
    player.play("idle");

    k.keyPress("left", () => {
        player.scale.x = -1;
        player.play("run");
    });

    k.keyPress("right", () => {
        player.scale.x = 1;
        player.play("run");
    });

    k.keyDown("left", () => {
        player.move(-100, 0);
    });

    k.keyDown("right", () => {
        player.move(100, 0);
    });

    k.keyPress("space", () => {
        player.jump(350);
    });

    k.keyRelease("left", () => {
        player.play("idle");
    });

    k.keyRelease("right", () => {
        player.play("idle");
    });

    // call a function every update tick
    player.action(() => {
        k.camPos(player.pos);
    });
}
