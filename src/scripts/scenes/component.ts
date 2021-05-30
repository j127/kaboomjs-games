import k from "../kaboom";
import level1 from "../levels/level-1";
import big from "../components/big";

export default function Component() {
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
        big(),
    ]);
    player.play("idle");

    k.keyPress("b", () => {
        player.biggify();
    });

    k.keyPress("left", () => {
        player.scale.x = player.isBig() ? -2 : -1;
        player.play("run");
    });

    k.keyPress("right", () => {
        player.scale.x = player.isBig() ? 2 : 1;
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
