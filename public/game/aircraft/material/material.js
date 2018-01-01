class Material extends Image{
    constructor(src, option={x:0, y:0}) {
        super()
        this.src = src
        this.gOption = option
        this.scaleX = option.scaleX
        this.scaleY = option.scaleY
    }

    static single(src, option) {
        if (!this.instance) {
            this.instance = new this(src, option)
        }
        return this.instance
    }
}




