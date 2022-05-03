// function rotateMain(value) {
//     const wheelInner = document.querySelectorAll('.wheel__inner')
//     deg = 0;
//     for (let item of wheelInner) {
//         item.style.transform = `rotate(${deg}deg)`
//         deg += value;
//     }
//
//     return value
// }
//
// rotateMain(0);

function rotateOuther(value) {
    const wheelContent = document.querySelectorAll('.wheel__letter')
    deg = 0;
    for (let item of wheelContent) {
        item.style.transform = `rotate(${deg}deg)`
        deg += value;
    }
}

rotateOuther(10)

function rotateWord(value) {
    const wheelContent = document.querySelectorAll('.wheel__word')
    deg = 0;
    for (let item of wheelContent) {
        item.style.transform = `rotate(${deg}deg)`
        deg += value;
    }
}

rotateWord(20)

