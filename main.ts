basic.forever(function () {
    basic.showString("SAN ZENO")
    for (let index = 0; index < 5; index++) {
        basic.showIcon(IconNames.Heart)
        basic.pause(350)
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(350)
        basic.clearScreen()
    }
})
