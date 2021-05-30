import k from "../kaboom";

export default function big() {
    let timer = 0;
    let isBig = false;

    return {
        isBig() {
            return isBig;
        },
        biggify(time: number = 2) {
            this.scale = k.vec2(2);
            timer = time;
            isBig = true;
        },
        smallify() {
            this.scale = k.vec2(1);
            timer = 0;
            isBig = false;
        },
        update() {
            if (isBig) {
                timer -= k.dt();
                if (timer <= 0) {
                    this.smallify();
                }
            }
        },
    };
}
