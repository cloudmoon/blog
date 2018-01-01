const game = new Game()

let __main = function () {
    let sceneTitleImage = {
        start: {
            type: Title,
            src: 'img/title.png',
            option: {x : 190, y: 230, scaleX: 200, scaleY: 200},
        },
    }

    let sceneMainImage = {

        cloud1: {
            type: Cloud,
            src: 'img/cloud1.png',
            option: {x : 320, y: 20, scaleX: 200, scaleY: 200},
        },
        cloud2: {
            type: Cloud,
            src: 'img/cloud2.png',
            option: {x : 60, y: 360, scaleX: 200, scaleY: 200},
        },
        player: {
            type: Player,
            src: 'img/player.png',
            option: {x : 320, y: 20, scaleX: 60, scaleY: 60},
        },
        bullet: {
            type: Bullet,
            src: 'img/bullet.png',
        },
        fire: {
            type: Fire,
            src: 'img/fire.png',
        },
        a1: {
            type: Enemy,
            src: 'img/a1.png',
        },
        a2: {
            type: Enemy,
            src: 'img/a2.png',
        },
        a3: {
            type: Enemy,
            src: 'img/a3.png',
        },
        a4: {
            type: Enemy,
            src: 'img/a4.png',
        },
        a5: {
            type: Enemy,
            src: 'img/a5.png',
        },

    }

    let sceneEndImage = {
        end: {
            type: Title,
            src: 'img/bird.png',
            option: {x : 160, y: 230, scaleX: 200, scaleY: 200},
        },
    }


    game.register('start', function () {
        SceneTitle.single(sceneTitleImage).init()
    })

    game.register('main', function () {
        SceneMain.single(sceneMainImage).init()
    })

    game.register('end', function () {
        SceneEnd.single(sceneEndImage).init()
    })

    window.onload = game.trigger('start')

}

__main()