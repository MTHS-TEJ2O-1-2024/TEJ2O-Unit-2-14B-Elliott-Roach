/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Elliott
 * Created on: oct 2024
 * This program moves a sprite in a clockwise and conterclockwise direction
*/

let sprite: game.LedSprite = null
let loopCounter = 0

//clean
basic.clearScreen()


input.onButtonPressed(Button.A, function () {
    // setup
    basic.clearScreen()
    sprite = game.createSprite(0, 0)

    //right
    loopCounter = 0
    while (loopCounter <= 5) {
        sprite.set(LedSpriteProperty.X, loopCounter)
        loopCounter = loopCounter + 1
        basic.pause(500)
    }

    //down
    loopCounter = 0
    while (loopCounter <= 5 ) {
        sprite.set(LedSpriteProperty.Y, loopCounter)
        loopCounter = loopCounter + 1
        basic.pause(500)
    }

    //left
    loopCounter = 5
    while (loopCounter >= 0) {
        sprite.set(LedSpriteProperty.X, loopCounter)
        loopCounter = loopCounter - 1
        basic.pause(500)
    }

    //up
    loopCounter = 5
    while (loopCounter >= 0) {
        sprite.set(LedSpriteProperty.Y, loopCounter)
        loopCounter = loopCounter - 1
        basic.pause(500)
    }
    sprite.delete()
})

input.onButtonPressed(Button.B, function () {

    // setup
    basic.clearScreen()
    sprite = game.createSprite(0, 0)

    //down
    loopCounter = 0
    while (loopCounter <= 5) {
        sprite.set(LedSpriteProperty.Y, loopCounter)
        loopCounter = loopCounter + 1
        basic.pause(500)
    }

    //right
    loopCounter = 0
    while (loopCounter <= 5) {
        sprite.set(LedSpriteProperty.X, loopCounter)
        loopCounter = loopCounter + 1
        basic.pause(500)
    }

    //up
    loopCounter = 5
    while (loopCounter >= 0) {
        sprite.set(LedSpriteProperty.Y, loopCounter)
        loopCounter = loopCounter - 1
        basic.pause(500)
    }

    //left
    loopCounter = 5
    while (loopCounter >= 0) {
        sprite.set(LedSpriteProperty.X, loopCounter)
        loopCounter = loopCounter - 1
        basic.pause(500)
    }
    sprite.delete()
})
