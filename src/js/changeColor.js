const box = document.querySelector('.box');

document.getElementById('result').addEventListener('click',function (e) {

    e.preventDefault();
    const color = document.getElementById('color').value;

    console.log('color',color)

    // if 문

    if (color == 'red' || color == 'green' || color == 'blue' || color == 'black'){
        box.style.background = color;
    } else {
        box.style.background = 'white';
    }

    // switch 문

    // switch (color){
    //     case 'red' :
    //         box.style.background = 'red';
    //         break;
    //     case 'green' :
    //         box.style.background = 'green';
    //         break;
    //     case 'blue' :
    //         box.style.background = 'blue';
    //         break;
    //     case 'black' :
    //         box.style.background = 'black';
    //         break;
    //     default :
    //         box.style.background = 'white';
    // }

    // 삼항조건문

    // (color == 'red' || color == 'green' || color == 'blue' || color == 'black')
    //     ? box.style.background = 'color' : box.style.background ='white';

})