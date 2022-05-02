function rotateMain(value) {
    const wheelInner = document.querySelectorAll('.wheel__inner')
    deg = 0;
    for (let item of wheelInner) {
        item.style.transform = `rotate(${deg}deg)`
        deg += value;
    }

    return value
}

rotateMain(5);

function rotateOuther(value) {
    const wheelContent = document.querySelectorAll('.wheel__content')
    deg = 0;
    for (let item of wheelContent) {
        item.style.transform = `rotate(${deg}deg)`
        deg += value;
    }
}

rotateOuther(10)

