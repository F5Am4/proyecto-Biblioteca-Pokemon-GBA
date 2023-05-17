let characters = JSON.parse(poke_file).result
let input_character = document.getElementById("input_character")
let character_info = document.getElementById("character_info")

function find_character(){
   let input_value = input_character.value
   let result = find_result (input_value)
   console.log (result)

   character_info.innerHTML = `
   <img width="190px" height="165px" src="${result.ThumbnailImage}">
   <p> Nombre: ${result.name}</p>
   <p> Número: ${result.number}</p>
   <p> Peso: ${result.height}</p>
   <p> Tipo: ${result.type}</p>
   <p> Habilidades: ${result.abilities}</p>
   `
}

function find_result(input_value){
    for (let i = 0; i < characters.length; i++){
      if (characters[i].name == input_value){
        return characters[i]
      }
    }

    for (let i = 0; i < characters.length; i++){
      if (characters[i].slug == input_value){
        return characters[i]
      }
    }

    for (let i = 0; i < characters.length; i++){
      if (characters[i].id == input_value){
        return characters[i]
      }
    }
    for (let i = 0; i < characters.length; i++){
      if (characters[i].id == input_value){
        return characters[i]
      }
    }
}


/*
class pokemon{
  constructor(name, attack = 0, defense = 0){
    this.name = name
    this.attack = attack
    this.defense = defense
  }
}

class pokemonElectrico extends pokemon{
    constructor(name, attack = 0, defense = 0, color){
    super(name, attack, defense)
    this.color = color
  }
}

class pokemonFuego extends pokemon{
  constructor(name, attack, defense, color, size){
  super(name, attack, defense, color, size)
  this.syze = size
  }
}

class pokemonAgua extends pokemon{
  constructor(name, attack = 0, defense = 0, color, size){
  super(name, attack, defense, color, size)
  }
}
  
let pikachu = new pokemonElectrico('pikachu', 87 , 50, 'amarillo', 'chico')
let charmander = new pokemonFuego('charmander', 115, 50,'rojo', 'grande')
let squirtle = new pokemonAgua('squirtle', 95, 60, 'azul', 'mediano') 
*/

/*
<!----------------------------------------- clase ----------------------------->

let pokemon = JSON.parse(file)
let input_pokemon = document.getElementById("input_pokemon")
let pokemon_info = document.getElementById("pokemon_info")

function find_pokemon(){
  let resultado = input_pokemon.value //Leo el contenido dentro de mi input
  
  let result = find_result(input_value)

  //console.log(result);
  // agrego en mi div de id pokemon_info la información
  pokemon_info.innerHTML = ´
  <p>Name: ${result.name}</p>
  <p>Type: ${result.type}</p>
  <p>Color: ${result.color}</p>´  


  for (let i = 0; < pokemon.length; i++){
   if (pokemon[i].name == resultado){
     return pokemon[i]
  }
 }
}

function find_result(){

}
*/



/*
<!---------------------------------- Metodo queue ------------------------------------>

function separar_queues(queue) {
  let pares = new queue();
  const size = queue.size()
  for(let i = 0; i < size; i++){ // i = 0

    console.log(`Dentro del if ${i +1 % 2 == 0}`)


    if((i+1) % 2 == 0){ // revisamos si es par // (1 % 2 == 0) false
       // Pares.enqueue(queue[i])
       let elemento_desenfilado = queue.dequeue()
       pares.enqueue(elemento_desenfilado)
    } else { // si es impar
         let elemento_desenfilado = queue.dequeue()
         queue.enqueue(elemento_desenfilado)
    }
  }
  queue.print()
  pares.print()
}

// entrada: separar_queues(queue)
// salida: cola 1
// salida: cola 2
queue.enqueue('amarillo')
queue.enqueue('rosa')
queue.enqueue('rojo')
queue.enqueue('verde')
queue.enqueue('azul')
queue.enqueue('negro')
queue.enqueue('morado')
queue.enqueue('blanco')
*/