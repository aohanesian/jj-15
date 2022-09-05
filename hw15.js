`use strict`;

const num = +prompt(`Enter number`);
let result = true;

if (num > 0) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            result = false;
            break;
        }
    }
    console.log(`${num};// ` + result);
} else {
    console.log(`Что-то пошло не так`);
}