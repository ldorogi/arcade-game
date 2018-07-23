// Enemies our player must avoid
class Enemy {
    constructor(x, y) {
        // The image/sprite for our enemies, this uses
        // a helper we've provided to easily load images
        this.sprite = 'images/enemy-bug.png';
        this.speed = Math.round(Math.random() * 2) + 1;
        setTimeout(()=> {
            this.x = -100;
            this.y = [60,145,230][Math.floor(Math.random() * 3)];
        }, this.speed * 100);
    }
    
    // Update the enemy's position, required method for game
    // Parameter: dt, a time delta between ticks
    update(dt) {
        // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for
        // all computers.
        this.x = (this.x + dt * this.speed * 100) % (500);
        // if enemy dissapears on the right edge then reset it (new random row position and speed)
        if(this.x >= 450) {
            this.x = -100;
            this.y = [60,145,230][Math.floor(Math.random() * 3)];
            this.speed = Math.round(Math.random() * 2) + 1;
        }

        // collision detection between the player and the enemy
        if(Math.abs(Math.floor(player.x) - Math.floor(this.x)) <= 60 &&
            Math.abs(Math.floor(player.y) - Math.floor(this.y)) <= 13) {
            window.location.reload();
        }
    }

    // Draw the enemy on the screen, required method for game
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}




// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player{
    /**
     * @description Contruct the player object and set its initial position
     * @param {number} x Initial x position
     * @param {number} y Initial y position
    */ 
    constructor(x, y) {
        this.sprite = 'images/char-pink-girl.png';
        this.x = x;
        this.y = y;
        this.won = false;
    }

    update() {

    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
        if (this.won === true) {
            ctx.font = '72px Arial';
            ctx.fillText('You won!', 100, 300);
            ctx.font = '36px Arial';
            ctx.fillText('Press ENTER for new game.',30, 400);
        }
    }
    
    // move the player according to pressed control keys
    handleInput (move) {
        let xDelta = 101;
        let yDelta = 83;
        if (move === 'enter' && this.won === true) {
            for(const enemy of allEnemies) {
                        enemy.speed = Math.round(Math.random() * 2) + 1;;
            }
            this.won = false;
        }
        if (move === 'left' && this.won === false) {
            this.x -= this.x >= xDelta ? xDelta : 0;
        }
        if (move === 'right' && this.won === false){
            this.x += this.x < 4 * xDelta ? 101 : 0;
        }
        if (move === 'down' && this.won === false) {
            this.y += this.y < 5 * 80 ? yDelta : 0; 
        }
        if (move === 'up' && this.won === false) {
            if (this.y >= yDelta) {
                this.y -= yDelta
            } else {
                // game won - the player has reached the water
                setTimeout(() => {
                    this.reset();
                    for(const enemy of allEnemies) {
                        enemy.speed = 0;
                    }    
                    this.won = true;     
                    this.render();
                }, 100)
            }
        }
    }

    reset() {
        this.x = 2 * 101;
        this.y = 5 * 80;
    }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// If you wold like to make the game more difficult, than increase 
// the `difficultyLevel` (how many enemies are in the same time on the gameboard)
const allEnemies = [];
const difficultyLevel = 2;
for(let i = 0; i < difficultyLevel; i++) {
    allEnemies[i] = new Enemy(1, 1);
}

// Place the player object in a variable called player
const player = new Player(2 * 101, 5 * 80);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        13: 'enter',
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
