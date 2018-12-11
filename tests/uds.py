from gpiozero import InputDevice, OutputDevice
from time import sleep, time

trig = OutputDevice(4)
echo = InputDevice(17)

sleep(2)

def get_pulse_time():
    trig.on()
    sleep(0.00001)
    trig.off()

    while echo.is_active == False:
        pulse_start = time()

    while echo.is_active == True:
        pulse_end = time()

    sleep(0.1) # 0.06

    return pulse_end - pulse_start

def calculate_distance(duration):
    speed = 343
    distance = speed * duration / 2
    return distance

while True:
    avg = 0
    for i in range(10):
        duration = get_pulse_time()
        distance = calculate_distance(duration)
        avg += distance
        
    print(avg/5)
