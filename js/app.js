// //https://wf3.webforce.life/

// const carte = document.querySelectorAll('.carte')

// for(let i = 0; i< carte.length ; i++) {

//     carte[i].addEventListener('click', () => {
// $('.carte').removeClass('bordure')

//         carte[i].classList.toggle('bordure')
//     })
// }

$('.carte').on('click', e => {
$('.carte').removeClass('bordure') 
$(e.currentTarget).addClass('bordure')
})

