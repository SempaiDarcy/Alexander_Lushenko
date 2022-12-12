
// Task 1 ============================================
/* Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. Выведите в out-1 результат. Запускаться функция должна по нажатию b-1. */

const URL = " http://getpost.itgid.info/index2.php";
const AUTH = "7859d9d42a8834141d529577207c9596";

function FATCH_1(params, callback, out) {
    fetch(URL + '?auth=' + AUTH + getQueryString(params))
        .then(data => {
            return data.text();
        })
        .then(data => {
            callback(data, out);
        })
}

function getQueryString(obj) {
    let out = '';
    for (let key in obj) {
        out += `&${key}=${obj[key]}`;
    }
    return out;
}


// Task 1 ============================================
/* Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. Выведите в out-1 результат. Запускаться функция должна по нажатию b-1. */

function t1() {
    let p1 = { action: 1 };
    FATCH_1(p1, t1_out, '.out-1');
}
function t1_out(data, out) {
    document.querySelector(out).innerHTML = data;
}
// ваше событие здесь!!!
document.querySelector('.b-1').onclick = t1;

// Task 2 ============================================
/* Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. Добавьте параметр name с вашим именем на латинице. Если все сделано верно, сервер пришлет строку hello ваше имя. Выведите в out-2 результат. Запускаться функция должна по нажатию b-2. */

function t2() {
let p2 = { action: 2, name:'Akbar'};
FATCH_1(p2, t2_out,'.out-2');
}
function t2_out(data, out) {
    document.querySelector(out).innerHTML = data;
}
// ваше событие здесь!!!
document.querySelector('.b-2').onclick = t2;


// Task 3 ============================================
/*  Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел.  Выведите в out-3 результат. Запускаться функция должна по нажатию b-3. */

function t3() {
    let p3 = { action: 3, num1:45, num2:67};
    FATCH_1(p3, t3_out,'.out-3');
}
function t3_out(data, out) {
    document.querySelector(out).innerHTML = data;
}
// ваше событие здесь!!!
document.querySelector('.b-3').onclick = t3;



// Task 4 ============================================
/*  Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в заданном диапазоне. Не забывайте указывать параметр auth (ключ в чате).  Выведите в out-4 результат. Запускаться функция должна по нажатию b-4. */

function t4() {
    let p4 = { action: 4, num1:45, num2:67};
    FATCH_1(p4, t4_out,'.out-4');
}
function t4_out(data, out) {
    document.querySelector(out).innerHTML = data;
}
// ваше событие здесь!!!
document.querySelector('.b-4').onclick = t4;

// Task 5 ============================================
/*  Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5. Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-5 результат. Запускаться функция должна по нажатию b-5. */

function t5() {
    let p5 = { action: 5};
    FATCH_1(p5, t5_out,'.out-5');
}
function t5_out(data, out) {
    document.querySelector(out).innerHTML = data;
}
// ваше событие здесь!!!
document.querySelector('.b-5').onclick = t5;

// Task 6 ============================================
/*  Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-6 результат. Запускаться функция должна по нажатию b-6. */

function t6() {
    let p6 = { action: 6, num1:567, num2:1089};
    FATCH_1(p6, t6_out,'.out-6');
}
function t6_out(data, out) {
    document.querySelector(out).innerHTML = data;
}
// ваше событие здесь!!!
document.querySelector('.b-6').onclick = t6;


// Task 7 ============================================
/*  Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7. Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-7 результат. Запускаться функция должна по нажатию b-7. */

function t7() {
    let p7 = { action: 7};
    FATCH_1(p7, t7_out,'.out-7');
}
function t7_out(data, out) {
    document.querySelector(out).innerHTML = data;
}
// ваше событие здесь!!!
document.querySelector('.b-7').onclick = t7;


// Task 8 ============================================
/* Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет ваш возраст. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-8 результат. Запускаться функция должна по нажатию b-8.*/

function t8() {
    let p8 = { action: 8, year:1997};
    FATCH_1(p8, t8_out,'.out-8');
}
function t8_out(data, out) {
    document.querySelector(out).innerHTML = data;
}
// ваше событие здесь!!!
document.querySelector('.b-8').onclick = t8;


// Task 9 ============================================
/* Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 9. В качестве параметра по очереди укажите m = 1, d=1, y=1. Если все сделано верно, сервер возвратит дату или месяц или год. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-9 результат. Запускаться функция должна по нажатию b-9. */

function t9() {
    let p9 = { action: 9,y:1};
    FATCH_1(p9, t9_out,'.out-9');
}
function t9_out(data, out) {
    document.querySelector(out).innerHTML = data;
}
// ваше событие здесь!!!
document.querySelector('.b-9').onclick = t9;


// Task 10 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. Если все сделано верно, сервер пришлет строку hello. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-10 результат. Запускаться функция должна по нажатию b-10.

*/

function t10() {
 fetch('http://getpost.itgid.info/index2.php?auth=7859d9d42a8834141d529577207c9596&action=1' , {
     method: 'POST',
     headers: {
         'Content-Type': 'application/x-www-form-urlencoded'
     }
 })
     .then((response) => {
         return response.text();
     } )
     .then((data) => {
         document.querySelector('.out-10').innerHTML = data;
     })
}
// ваше событие здесь!!!
document.querySelector('.b-10').onclick = t10;

// Task 11 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. Добавьте параметр name с вашим именем на латинице. Если все сделано верно, сервер пришлет строку hello ваше имя. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-11 результат. Запускаться функция должна по нажатию b-11. */

function t11() {
    fetch('http://getpost.itgid.info/index2.php?auth=7859d9d42a8834141d529577207c9596&action=2&name=Akbar' , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
        .then((response) => {
            return response.text();
        } )
        .then((data) => {
            document.querySelector('.out-11').innerHTML = data;
        })
}
// ваше событие здесь!!!
document.querySelector('.b-11').onclick = t11;

// Task 12 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-12 результат. Запускаться функция должна по нажатию b-12.*/

function t12() {
    fetch('http://getpost.itgid.info/index2.php?auth=7859d9d42a8834141d529577207c9596&action=3&num1=567&num2=4578' , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
        .then((response) => {
            return response.text();
        } )
        .then((data) => {
            document.querySelector('.out-12').innerHTML = data;
        })
}
// ваше событие здесь!!!
document.querySelector('.b-12').onclick = t12;

// Task 13 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в заданном диапазоне. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-13 результат. Запускаться функция должна по нажатию b-13.*/

function t13() {
    fetch('http://getpost.itgid.info/index2.php?auth=7859d9d42a8834141d529577207c9596&action=4&num1=34&num2=567' , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
        .then((response) => {
            return response.text();
        } )
        .then((data) => {
            document.querySelector('.out-13').innerHTML = data;
        })
}
// ваше событие здесь!!!
document.querySelector('.b-13').onclick = t13;

// Task 14 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5. Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-14 результат. Запускаться функция должна по нажатию b-14.*/

function t14() {
    fetch('http://getpost.itgid.info/index2.php?auth=7859d9d42a8834141d529577207c9596&action=5' , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
        .then((response) => {
            return response.text();
        } )
        .then((data) => {
            document.querySelector('.out-14').innerHTML = data;
        })
}
// ваше событие здесь!!!
document.querySelector('.b-14').onclick = t14;

// Task 15============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-15 результат. Запускаться функция должна по нажатию b-15. */

function t15() {
    fetch('http://getpost.itgid.info/index2.php?auth=7859d9d42a8834141d529577207c9596&action=6&num1=345&num2=56' , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
        .then((response) => {
            return response.text();
        } )
        .then((data) => {
            document.querySelector('.out-15').innerHTML = data;
        })
}
// ваше событие здесь!!!
document.querySelector('.b-15').onclick = t15;

// Task 16 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7. Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-16 результат. Запускаться функция должна по нажатию b-16. */

function t16() {
    fetch('http://getpost.itgid.info/index2.php?auth=7859d9d42a8834141d529577207c9596&action=7' , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
        .then((response) => {
            return response.text();
        } )
        .then((data) => {
            document.querySelector('.out-16').innerHTML = data;
        })
}
// ваше событие здесь!!!
document.querySelector('.b-16').onclick = t16;

// Task 17 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет ваш возраст. Не забывайте указывать параметр auth (ключ в чате).Выведите в out-17 результат. Запускаться функция должна по нажатию b-17. */

function t17() {
    fetch('http://getpost.itgid.info/index2.php?auth=7859d9d42a8834141d529577207c9596&action=8&year=1997' , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
        .then((response) => {
            return response.text();
        } )
        .then((data) => {
            document.querySelector('.out-17').innerHTML = data;
        })
}
// ваше событие здесь!!!
document.querySelector('.b-17').onclick = t17;

// Task 18 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 9. В качестве параметра по очереди укажите m = 1, d=1, y=1. Если все сделано верно, сервер возвратит дату или месяц или год. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-18 результат. Запускаться функция должна по нажатию b-18. */

function t18() {
    fetch('http://getpost.itgid.info/index2.php?auth=7859d9d42a8834141d529577207c9596&action=9&y=1' , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
        .then((response) => {
            return response.text();
        } )
        .then((data) => {
            document.querySelector('.out-18').innerHTML = data;
        })
}
// ваше событие здесь!!!
document.querySelector('.b-18').onclick = t18;

