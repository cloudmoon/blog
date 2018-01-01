class Block extends Material {
    constructor(src, speed=0, game) {
        super(src, speed, game)
        this.posX = 100
        this.posY = 50
        this.row = 3
        this.col = 6
        this.padding = 30
        this.offTop = 30
        this.offLeft = 30
        this.bricks = []
        this.init()
    }

    init() {
        let blocks = []
        for (let i = 0; i < this.col; i++) {
            blocks[i] = []
            for (let j = 0; j < this.row; j++) {
                blocks[i][j] = {x: 0, y: 0, lives: 1, width: 0, height: 0}
            }
        }
        this.bricks = blocks
    }


    draw(game) {
        let ctx = game.context
        let blocks = this.bricks
        for (let i = 0; i < this.col; i++) {
            for (let j = 0; j < this.row; j++) {
                if (blocks[i][j].lives) {
                    this.posX = (i * (this.width + this.padding)) + this.offLeft
                    this.posY = (j * (this.height + this.padding)) + this.offTop
                    blocks[i][j].x = this.posX
                    blocks[i][j].y = this.posY
                    blocks[i][j].width = this.width
                    blocks[i][j].height = this.height
                    ctx.drawImage(this, this.posX, this.posY)
                }
            }
        }
        game.blocks = blocks
        game.Block = this
    }
}