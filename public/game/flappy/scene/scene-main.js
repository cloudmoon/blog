class SceneMain extends Scene{
    constructor(images) {
        super(images)
    }

    bindControl() {
        document.addEventListener('keydown', function controlMainDown (e) {
            game.controlsD.push(controlMainDown)
            let bird = game.sceneMain.bird
            if (e.key === 'a') {
                bird.moveLeft = true
            }
            if (e.key === 'd') {
                bird.moveRight = true
            }
            if (e.key === 'w') {
                bird.moveUp = true
            }
            if (e.key === 's') {
                bird.moveDown = true
            }
            if (e.key === 'j') {
                bird.vy = -5
                bird.rotation = -45
            }

        })
        document.addEventListener('keyup', function controlMainUp (e) {
            game.controlsU.push(controlMainUp)
            let bird = game.sceneMain.bird
            if (e.key === 'a') {
                bird.moveLeft = false
            }
            if (e.key === 'd') {
                bird.moveRight = false
            }
            if (e.key === 'w') {
                bird.moveUp = false
            }
            if (e.key === 's') {
                bird.moveDown = false
            }
        })

    }

    fill() {
        this.clear()
        let ctx = game.context
        ctx.fillStyle = '#cceeff'
        ctx.fillRect(0, 0, game.canvas.width, game.canvas.height)
    }

    setup() {
        this.sky = this.groupSetup(Sky)
        this.pipe = this.groupSetup(Pipe)
        this.ground = this.groupSetup(Ground)
        this.bird = this.animationSetup(Bird, 'bird', 4)
        this.bird.setup(200, 100, 60 , 50)
        game.sceneMain = this
        this.update()
    }

    score() {
        let ctx = game.context
        ctx.font = '26px Arial'
        ctx.fillStyle = '#ff9900'
        ctx.fillText('Score: ' + game.score, 8, 30)
    }
}