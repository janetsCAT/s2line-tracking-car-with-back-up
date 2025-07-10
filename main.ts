input.onButtonPressed(Button.A, function () {
    koi2.lineFollowerSetThreshold(koi2.ColorNames.Black)
    robotbit.MotorRun(robotbit.Motors.M1A, 20)
})
input.onButtonPressed(Button.B, function () {
    koi2.lineFollowerCalibration()
    koi2.lineFollowerSetThreshold(koi2.ColorNames.Custom)
})
let X2 = 0
let X1 = 0
basic.pause(1000)
koi2.koi2Init(SerialPin.P2, SerialPin.P12)
koi2.switchFunction(koi2.FullFunction.LineFollower, koi2.IOTSwitch.OFF)
let a = false
basic.forever(function () {
    X1 = koi2.lineFollowerGetPosition(koi2.Getline.ResultX1)
    X2 = koi2.lineFollowerGetPosition(koi2.Getline.ResultX2)
    if (X1 - X2 < 20) {
        robotbit.GeekServo(robotbit.Servos.S1, 95)
    } else if (X1 > 110) {
        robotbit.GeekServo(robotbit.Servos.S1, 110)
    } else if (X1 < 60) {
        robotbit.GeekServo(robotbit.Servos.S1, -45)
    }
})
