data = {
    David: 3,
    Atonio: 8,
    Nico: 5,
    Gemma: 7,
    Jesus: 4,
    Isa:6,
    Amin: 7
}

data2 = {
    Juan: 5,
    Pepe: 5,
    Mohamed: 7,
    Atonio: 6,
    Farah: 4,
    Monica: 3,
    Antonela: 8    
}

function votacion(objeto){
    array_votos = []
    for(let element in objeto){
        array_votos.push(objeto[element])
    }
    console.log(array_votos);
    let media = array_votos.reduce((acc, curr)=>acc+curr)
    media = Math.floor(media/array_votos.length)*1.1
    console.log(media)
    let data_final = {}

    for(let element in objeto){
        if(objeto[element]>=media){
            data_final[element] = `Promovido con ${objeto[element]}`
        }else{
            data_final[element] = `Suspendido con ${objeto[element]}`
        }        
    }
    console.log(`Media de votaciones: ${media}`)
    return data_final
}

console.log(votacion(data))
console.log(votacion(data2))