modules.button1.onEvent(jacdac.ButtonEvent.Down, function () {
    radio.sendNumber(randint(0, 9))
})
modules.button2.onEvent(jacdac.ButtonEvent.Down, function () {
    radio.sendString("Frank")
})
basic.showIcon(IconNames.Ghost)
radio.setGroup(42)
basic.forever(function () {
	
})
