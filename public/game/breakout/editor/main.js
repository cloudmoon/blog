let editor = function (game, enable) {
    if (!enable) {
        return
    }
    let blockRow
    let blockCol
    let ballV
    let paddleV
    e('#id-block-row').addEventListener('input', function (e) {
        blockRow = this.value
    })
    e('#id-block-col').addEventListener('input', function (e) {
        blockCol = this.value
    })
    e('#id-ball').addEventListener('input', function (e) {
        ballV = this.value
    })
    e('#id-paddle').addEventListener('input', function (e) {
        paddleV = this.value
    })

    // 暂停功能
    let isPause = false

    document.addEventListener('keydown', function (e) {
        if (e.key === 'z') {
            isPause = !isPause
            game.Ball.dx = isPause ? 0 : 3
            game.Ball.dy = isPause ? 0 : -3
        }

    })

    let confirmBtn = e('#id-confirm')
    // 修改各项参数
    confirmBtn.addEventListener('click', function (e) {
        e.preventDefault()
        let data = [blockCol, blockRow, ballV, paddleV]
        for (let item of data) {
            if (isNaN(item)) {
                alert('参数只能填数字')
                window.location.reload()
                break
            }
        }
        game.Block.row = Number(blockRow) || 3
        game.Block.col = Number(blockCol) || 3
        game.Block.init()
        game.score = 0
        game.Ball.dx = Number(ballV) || 2
        game.Ball.dy = Number(-ballV) || 2
        game.Paddle.speed = Number(paddleV)
        log('change',paddleV)
    })


}