const htwo = document.getElementsByTagName('h2');
for (const iterator of htwo) {
    iterator.style.color = "lightblue";
}
document.getElementById('bag').style.backgroundColor = 'tomato';
for (const iterator of document.getElementsByClassName('card')) {
    iterator.style.borderRadius = "30px";
}
function showAge() {
    console.log("Your age is 400 years")
}
const allBtn = document.getElementsByClassName('btn');
for (const iterator of allBtn) {
    iterator.addEventListener('click', function () {
        iterator.parentNode.removeChild(iterator);
    })
}
const sbmtBtn = document.getElementById('sbmt');
const inptTxt = document.getElementById('inpt');
sbmtBtn.setAttribute('disabled', true);
inptTxt.addEventListener('keyup', function (event) {
    if (inptTxt.value == "input") {
        sbmtBtn.removeAttribute('disabled');
    }
    else {
        sbmtBtn.setAttribute('disabled', true);
    }
})

var imag = document.getElementById("image");

//Now, we need to add an Event Listener to listen when the image gets mouse over.

imag.addEventListener('mousemove', function () {
    imag.src = "images/bags/bag-1.png";
})
const letss = document.getElementById('sub');


letss.addEventListener('click', function () {
    console.log('hhh')
    letss.style.backgroundColor='red';
    letss.class='bg-red';

})
