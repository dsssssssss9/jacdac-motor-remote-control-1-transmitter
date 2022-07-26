modules.button1.onEvent(jacdac.ButtonEvent.Down, function () {
    radio.sendNumber(randint(0, 9))
})
basic.showIcon(IconNames.Ghost)
radio.setGroup(42)
basic.forever(function () {
	
})
