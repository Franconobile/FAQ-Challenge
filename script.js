// function toggleText() {
//     let span = document.getElementById('showText');
//     if (text.style.display === "none") {
//         text.style.display = "block";
//     } else {
//         text.style.display = "none";
//     }
// }

// function toggleText() {
//     let text = document.getElementById('showText');
//     if (text.style.display === "none") {
//         text.style.display = "block";
//     } 
//     else {
//         text.style.display = "none";
//     }
// }


var elemento = document.getElementsByClassName('show');
var textoMos = document.getElementsByClassName('showText')

console.log(elemento);

for(const elemet of elemento){
    elemet.addEventListener('click', function() {
        console.log("elemet");
    })
}









// document.querySelectorAll('button')
//   .forEach(toggleText => {
//     toggleText.addEventListener('click', function() {
//       const div = this.parentElement.querySelector('div');
//       div.textContent = this.dataset.ans;
//     });
//   });