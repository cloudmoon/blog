let __main = function () {

    let images = {
        ball: {
            type: Ball,
            src: 'img/ball.png',
            speed: 3,
        },
        paddle: {
            type: Paddle,
            src: 'img/paddle.png',
            speed: 10,
        },
        block: {
            type: Block,
            src: 'img/block.png',
            speed: 0,
        }
    }

    let game = Game.instance('#id-canvas')

    let sceneT = new SceneTitle()
    let sceneM = new SceneMain(images)
    let sceneE = new SceneEnd()

    game.register('scene:start', function (game, func) {
        sceneT.load(game, func)
    })
    game.register('scene:main', function (game, func) {
        sceneM.init(game, func)
    })
    game.register('scene:end', function (game) {
        sceneE.load(game)
    })

    sceneT.load(game)

    editor(game, true)
}


__main()