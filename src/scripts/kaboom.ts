// See the settings page: https://kaboomjs.com/
export const k = kaboom({
    // width: 320,
    // height: 240,
    // scale: 2.5,
    canvas: document.getElementById("game"),
    clearColor: [0, 0, 0, 1],
    // fullscreen: true,
    crisp: true,
    debug: true, // extra keybindings: f1, f2, f8, f7, f9, f10
    plugins: [],
});

export default k;
