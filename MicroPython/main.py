"""
Created by: Mr. Coxall
Created on: Sep 2020
This module is a Micro:bit MicroPython program
"""

from microbit import *

create_sprite = 2
loopCounter = int(0)
display.clear()

while True:
    if button_a.is_pressed():
        display.clear()
        display.set_pixel(create_sprite, 0, 0)


    loopCounter = 0
    while loopCounter <= 5 :
    display.set_pixel(create_sprite, 0 1)
