class Scene {
    constructor(images) {
        this.images = images
        this.imgs = {}
        this.movingImg = []
    }

    static single(images) {
        if (!this.instance) {
            this.instance = new this(images)
        }
        return this.instance
    }

    init() {
        game.removeControl()
        this.loadImage()
        this.bindControl()
    }

    loadImage() {
        let s = this
        let loads = []
        let images = this.images
        let names = Object.keys(images)
        for (let name of names) {
            let img = new Image()
            img.src = images[name]
            img.onload = function () {
                s.imgs[name] = img
                loads.push(1)
                if (loads.length === names.length) {
                    s.clear()
                    s.fill()
                    s.setup()
                }
            }
        }
    }

    clear() {
        game.context.clearRect(0, 0, game.canvas.width, game.canvas.height)
    }

    // imgSetup() {
    //     let names = Object.keys(this.imgs)
    //     for (let name of names) {
    //         let img = this.imgs[name]
    //         img.setup()
    //     }
    // }

    imgByName(name) {
        return this.imgs[name]
    }

    groupSetup(group, ...args) {
        let i = new group(this, ...args)
        i.setup()
        this.addImg(i)
        return i
    }

    animationSetup(Animation, ...args) {
        let i = new Animation(this, ...args)
        i.setup()
        this.addImg(i)
        return i
    }

    update() {
        this.clear()
        this.fill()
        let s = this
        // let names = Object.keys(this.imgs)
        // for (let name of names) {
        //     let item = this.imgs[name]
        //     item.update()
        //     game.context.drawImage(item, item.posx, item.posy, item.scaleX, item.scaleY)
        // }
        for (let i of this.movingImg) {
            if (i) {
                i.update()
            }
        }
        this.score()
        game.raf = window.requestAnimationFrame(function () {
            s.update()
        })
    }

    addImg(item) {
        this.movingImg.push(item)
    }

    bindControl() {

    }

    setup() {

    }

    fill() {

    }

    score() {

    }
}