radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 55) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    } else if (receivedNumber == 888) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
    }
})
basic.forever(function () {
    radio.setGroup(88)
    music.playMelody("G F G A - F E D ", 120)
    basic.showString("hola")
})
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) == 6) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
        radio.sendNumber(20)
    }
})
basic.forever(function () {
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    basic.pause(1000)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    basic.pause(1000)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    basic.pause(1000)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
})
