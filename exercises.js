
function basics() {
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
}
// basics()

function methods() {
	let fruits = ['kiwi', 'apple', 'pear'];
	// 10 Lägg till en frukt i slutet av arrayen ovan.
	fruits.push('melon')
	console.log('Methods 10', fruits)

	// 11 Lägg till en frukt i början av arrayen ovan.
	fruits.unshift('onion')
	console.log('Methods 11', fruits)

	// 14 Sätt in en frukt i arrayen ovan på index 1.
	// start index==1, deleteCount==0
	fruits.splice(1, 0, 'banana')
	console.log('Methods 14', fruits)

	// fruits.splice(1)
	// console.log('Methods', fruits)

	let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	// 17 Spegelvänd arrayen ovan.
	nums.reverse()
	console.log('Methods 17', nums)

	let str = 'Supercalifragilisticexpialidocious';
	// 18 Kika om strängen ovan innehåller bokstaven n.
	let hasN = str.includes('n')   // enklast
	let indexOfN = str.indexOf('n')  // fungerar, lite mer komplicerad
	console.log('Methods 18', hasN, indexOfN)

	// 19 Kika om strängen ovan innehåller bokstaven x.
	let hasX = str.includes('x')   // enklast
	let indexOfX = str.indexOf('x')  // fungerar, lite mer komplicerad
	console.log('Methods 19', hasX, indexOfX)

	// 21 I strängen ovan, plocka fram de 5 första tecknena.
	let first5 = str.substring(0, 5)  // 01234
	console.log('Methods 21', first5)
}
methods()
