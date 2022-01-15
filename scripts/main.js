let myButton = document.querySelector('button');
let myHeading = document.querySelector('h2');

function gcd(a, b) {
    if (a < b) {
        let c = a;
        a = b;
        b = c;
    }
    while (b != 0) {
        let temp = a % b;
        a = b;
        b = temp;
    }
    return a;
}

function lcm(a, b) {
    return a * b / gcd(a, b);
}


function determine_prime() {
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    if (isNaN(a) || isNaN(b)) {
        myHeading.textContent = 'Please input two integer values.';
    } else {
        myHeading.textContent = 'GCD(A, B) = ' + gcd(a, b) + ', LCM(A, B) = ' + lcm(a, b) + '.';
    }
}

myButton.onclick = function() {
    determine_prime();
}