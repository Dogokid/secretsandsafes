basic.forever(function () {
    if (input.lightLevel() > 30) {
        basic.showIcon(IconNames.Angry)
        music.playTone(988, music.beat(BeatFraction.Half))
    } else {
        basic.clearScreen()
    }
})
