basic.forever(function () {
    if (input.lightLevel() >= 150) {
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.mysterious), SoundExpressionPlayMode.UntilDone)
    }
})
