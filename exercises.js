
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
// methods()


function classicForLoops() {
	// 1 Skapa en loop som itererar 1000 varv. För varje iteration ska du console.log() vilket varv du är på
	// Räkna antalet varv med "i"  (i står ofta för "index")
	for( let i=0; i < 1000; i++ ) {
		console.log('For 1. Varv ', i + 1)
	}

	// 2:   i=100, i > 0, i--

	// 3 Loopa ut ovanstående array med en for-loop. För varje varv ska du console.log() innehållet ( frukten ).
	let fruits = ['apple', 'orange', 'pear', 'kiwi', 'pineapple'];
	for( let i=0; i < fruits.length; i++ ) {
		console.log('For 3', fruits[i])
	}

	// 7 Sök i en array: Skapa en funktion som tar en array och ett sökord som argument och returnerar alla element som innehåller sökordet.
	let testData = ['baseball', 'chipmunk', 'javascript', 'css', 'web development', 'server']
	function searchArray(array, searchWord) {
		let matches = []
		for( let i=0; i < array.length; i++ ) {
			// 'baseball'.includes('munk')
			// 'chipmunk'.includes('munk')
			if( array[i].includes(searchWord) ) {
				matches.push(array[i])
			}
		}
		return matches
	}
	let searchResults = searchArray(testData, 's')
	for( let i=0; i < searchResults.length; i++ ) {
		console.log('For 7. Sökningen hittade: ', searchResults[i])
	}
}
// classicForLoops()


function forEachExamples() {
	// Samma resultat på 4 olika sätt

	let things = ['hammer', 'nails', 'ruler', 'screwdriver', 'screws', 'saw'];
	// Loopa ut ovanstående array och console.log() varje pryl.

	for( let i=0; i<things.length; i++ ) {
		console.log('ForEach 7a ', things[i])
	}
	for( let item of things ) {
		console.log('ForEach 7b ', item)
	}
	things.forEach(withEach1)  // skicka själva funktionen till forEach
	// things.forEach(withEach1())  // skicka retur-värdet till forEach
	// Obs! forEach ska bestämma när funktionen anropas!!

	function withEach1(item) {
		console.log('ForEach 7c ', item)
	}
	things.forEach((item, index) => {
		console.log('ForEach 7d ', item, index)
	})

	// Spara en arrow function i en variabel
	const exempel = x => x + 1
	exempel(5) // returnerar 6
	/*
	Man kan skriva en funktion på flera sätt:
	function f(x) { return x + 1 }
	(x) => { return x + 1 }
	(x) => x + 1
	x => x + 1
	*/
}
forEachExamples()
