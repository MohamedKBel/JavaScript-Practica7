// let data = [{
//         name: "Gracia",
//         score: [21, 3, 5, 78, 25],
//         temporada: true
//     },
//     {
//         name: "Nico M",
//         score: [55, 66, 77, 55, 66],
//         temporada: false
//     },
//     {
//         name: "Nico G",
//         score: [12, 34, 67, 89, 34],
//         temporada: true
//     },
//     {
//         name: "Gemma",
//         score: [12, 90, 13, 45, 6],
//         temporada: true
//     }
// ]



// function mvp(array) {
//     let orden = [];
//     let mejor = [];
//     let suma = array.forEach(el => {
//         return [
//             el.name,
//             el.score,
//             el.temporada,
//             el.media = el.score.reduce((acc, curr) => acc + curr / el.score.length, 0)
//         ]
//     })

//     array.forEach(el => {
//         if (el.temporada == true) {
//             orden.push(el.media)
//         }

//     })

//     orden.sort((a, b) => a - b);

//     array.push({
//         medias: orden
//     })

//     array.forEach(el => {
//         if (el.media == orden[orden.length - 1] && el.temporada == true) {
//             array.push(["El jugador con mejor media apuntado a la temporada es: " + el.name + " con una media de " + orden[orden.length - 1]]);
//         }
//     });

//     return (array)


// }

// console.log(mvp(data))




