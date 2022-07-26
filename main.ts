modules.button1.onEvent(jacdac.ButtonEvent.Down, function () {
    radio.sendNumber(1)
})
modules.potentiometer1.onPositionChangedBy(5, function () {
    Speed = modules.potentiometer1.position()
    radio.sendValue("Speed", Speed)
})
modules.button2.onEvent(jacdac.ButtonEvent.Down, function () {
    radio.sendNumber(-1)
})
let Speed = 0
basic.showIcon(IconNames.Ghost)
radio.setGroup(42)
Speed = 0
basic.forever(function () {
	
})
