/**
 * Jacdac Motor Remote Control Transmitter
 * 
 * Micro:Bit V2 & Jacadaptor
 * 
 * Uses 2 Jacdac Keycap Button modules and Jacdac Slide Potentiometer 
 * 
 * Buttons are used to transmit the desired direction of the Motor connected to the Receiver
 * 
 * Slider Potentiometer is used to send the desired motor seep to the Receiver
 */
// 
// If Jacdac Button 1 is pressed down send 1 to receiver
// 
// This value determines direction of Motor
modules.button1.onEvent(jacdac.ButtonEvent.Down, function () {
    radio.sendNumber(1)
})
// 
// If Jacdac Button 2 is pressed down send -1 to receiver
// 
// This value determines direction of Motor
modules.button2.onEvent(jacdac.ButtonEvent.Down, function () {
    radio.sendNumber(-1)
})
// Show Icon on Micro:Bit to show system is ready
// 
// Set radio Group to match that of receiver
// 
// Set Variavle "Speed" to 0 - this is used to control the speed of the motor connected to the receiver
// 
// 
radio.setGroup(42)
let Speed = 0
led.setBrightness(107)
basic.showString("T")
// Set Variable "Speed" to value of device used to control speed of motor.
// 
// Send this value via radio with a name of "Speed" 
// 
// In this case we are using a Jacdac Slide Potentiometer 
// 
// Other devices that give an analog output ( rotary Potentiometer etc ) 
// could also be used
basic.forever(function () {
    Speed = Math.ceil(modules.potentiometer1.position())
    radio.sendValue("Speed", Speed)
})
