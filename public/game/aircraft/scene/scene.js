class Scene {
    constructor(images) {
        this.images = images
        this.imgs = {}
        this.addedImg = []
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
        // let kind = []
        let images = this.images
        let names = Object.keys(images)
        for (let name of names) {
            let model = images[name]
            let img = new model.type(model.src, model.option)
            // if (kind.indexOf(model.type.toString()) < 0) {
            //     kind.push(model.type.toString())
            // }
            img.onload = function () {
                s.imgs[name] = img
                loads.push(1)
                if (loads.length === names.length) {
                    s.setup()
                }
            }
        }
    }

    clear() {
        game.context.clearRect(0, 0, game.canvas.width, game.canvas.height)
    }

    imgSetup() {
        let names = Object.keys(this.imgs)
        for (let name of names) {
            let img = this.imgs[name]
            img.setup()
        }
    }

    update() {
        this.clear()
        this.fill()
        let names = Object.keys(this.imgs)
        let s = this
        for (let name of names) {
            let item = this.imgs[name]
            item.update()
            game.context.drawImage(item, item.posx, item.posy, item.scaleX, item.scaleY)
        }
        for (let i of this.addedImg) {
            if (i) {
                i.update()
            }
        }
        game.raf = window.requestAnimationFrame(function () {
            s.update()
        })
    }

    addImg(item) {
        this.addedImg.push(item)
    }

    bindControl() {

    }

    setup() {

    }

    fill() {

    }
}