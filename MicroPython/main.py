"""
Created by: Mr. Coxall
Created on: Sep 2020
This module is a Micro:bit MicroPython program
3,3 = 1,4
"""

from microbit import *

create_sprite = 0
loopCounter = int(0)
display.clear()
display.show(Image.HAPPY)

while True:
    if button_a.is_pressed():
        display.clear()
        display.set_pixel(create_sprite, 3, 3)

    loopCounter = 0
    while loopCounter <= 5:
        display.set_pixel(create_sprite, 0, +1)
        loopCounter = loopCounter + 1
        sleep(2000)
