# Arcade Game Project

## Table of Contents


* [Instructions](#instructions)
* [How The Game Works](#how-the-game-works)
* [Game Functionality Implementation](#game-functionality-implementation)

## Instructions

To start this game you have to open `index.html` in any browser. This file contains only the basic page layout.

As usual all gameboard formattings were done in `css/style.css`.

The images folder contains the png image files, which are used when displaying the game. The images for the player and enemy character are going to be loaded from this folder.

The js folder also contains the app engine (`engine.js`) needed to run the game and a `resources.js` file. 


## How The Game Works

In this game you have a Player and Enemies (Bugs). The goal of the player is to reach the water, without colliding into any one of the enemies. The player can move left, right, up and down. The enemies move in varying speeds on the paved block portion of the scene. Once a player collides with an enemy, the game is reset and the player moves back to the start square. Once the player reaches the water the game is won. New game can be started with pressing the `ENTER` key.

## Game Functionality Implementation

Inside the `app.js` file are the Player and the Enemy classes implemented, using Object-Oriented JavaScript. 

The Enemy `constructor()` function initiates the Enemy by:
* Loading the image by setting this.sprite to the appropriate image in the image folder (already provided)
* Setting the Enemy initial location
* Setting the Enemy speed

The `update()` method for the Enemy:
* Updates the Enemy location 
* Handles collision with the Player

The `render()` method draws the enemy on the screen.


The Player `constructor()` function initiates the Player by:
* Loading the image by setting this.sprite to the appropriate image in the image folder 
* Setting the Player initial location

The render method for the Player:
* Draws the player on the screen
* If the game is won stops all movements and gives a message on the gameboard

The `handleInput()` method, which should receive user input, allowedKeys (the key which was pressed) and move the player according to that input. In particular:
* Left key should move the player to the left
* right key to the right
* up should move the player up and
* down should move the player down.

Recall that the player cannot move off screen.

If the player reaches the water the game would be reseted by moving the player back to the initial location.
