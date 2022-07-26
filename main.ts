basic.showIcon(IconNames.Ghost)
radio.setGroup(42)
basic.forever(function () {
    if (modules.button1.pressed()) {
        radio.sendNumber(randint(0, 9))
    }
})
