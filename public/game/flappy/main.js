const game = new Game()

let __main = function () {
    let sceneTitleImage = {
        title: 'img/title.png',
    }

    let sceneMainImage = {
        land:  'img/land.png',
        pipe: 'img/pipe.png',
        sky:  'img/sky.png',
        bird1: 'img/bird/frame-1.png',
        bird2: 'img/bird/frame-2.png',
        bird3: 'img/bird/frame-3.png',
        bird4: 'img/bird/frame-4.png',
    }

    let sceneEndImage = {
        end: 'img/end.png',
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