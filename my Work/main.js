let men = document.getElementsByClassName('men');
let men2 = document.getElementsByClassName('men2');




// let menbutton = document.getElementById('menbutton')
// menbutton.onclick{
//     function cmen (){
//         men2.innerHTML = men.innerHTML
//     };
// };

// console.log(men2);

let menbutton = document.getElementById("menbutton");

menbutton.addEventListener("click",
function cmen() {
    men2.innerHTML = men.innerHTML
    console.log(men2)
    
});


