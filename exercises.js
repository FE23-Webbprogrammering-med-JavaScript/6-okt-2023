// Gör en array som innehåller 5 st olika frukter av datatypen string.

let fruits = ['apple', "banana", `lime`, 'kumquat', 'grape']
console.log('Basics 1', fruits)

// gör en array som innehåller 3 olika datatyper, ex. string, number, array.
let mix = ['banana', 3.14, fruits]
console.log('Basics 2', mix)

// console.log() hur många objekt arrayen ovan innehåller.
console.log('Basics 3. mix har ' + mix.length + ' element')
console.log(`Basics 3. mix har ${mix.length} element`)

let animals = ['cat', 'hamster', 'parrot', 'funky chihuahua']
// I arrayen ovan, hämta cat.
console.log('Basics 4 ', animals[0])

// I arrayen ovan, byt ut hamster mot tiger.
animals[1] = 'tiger'
console.log('Basics 6', animals)

let animalsCopy = [ ...animals ]  // shallow copy
animalsCopy[1] = 'lejon'
console.log('Basics 6*', animalsCopy)

