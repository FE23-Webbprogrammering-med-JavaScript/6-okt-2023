// Let's get together
// 1 skapa en enkel webbsida som visar en lista över tal från 1 till 10, men bara de udda talen ska visas i fet stil. index.html kan se ut så här.

// 1. plocka ut DOM-elementet för <ul>
// 2. loopa för sifforna mellan 1-10
// 3. skapa ett <li> element
// 4. lägg in text i <li>
// 4b. ... men om talet är udda, lägg till en CSS-klass
// 5. lägg till <li> sist i <ul>
// ... och så fet stil???

const numberList = document.querySelector('#numberList')
// Bra coding practice - kontrollera att du har gjort rätt medan du kodar
// console.log('Finns numberList? ', numberList)

for( let i=1; i<=10; i++ ) {
	const listItem = document.createElement('li')  // <li>
	listItem.innerText = i  // innerText eller innerHTML
	if( i % 2 !== 0 ) {
		// classList har metoderna: add, remove, toggle
		listItem.classList.add('odd')   // <li class="odd">
	}
	numberList.append(listItem)
}
/*
7 / 2 === 3.5
6 / 2 === 3
7 % 2 === 1
6 % 2 === 0

*/



// 5 Skapa en sida med en enkel meny där användaren kan ändra bakgrundsfärg baserat på användarens val. index.html kan se ut så här.

// 1. plocka ut elementen (buttons, body)
// 2. lägg till event listener på varje button
// 3. vid klick: ändra CSS background-color för body (.style eller .classList)

const body = document.querySelector('body')
console.log('Finns body?', body)
const redButton = document.querySelector('#redButton')
const blueButton = document.querySelector('#blueButton')
const greenButton = document.querySelector('#greenButton')
// console.log('Finns red button?', redButton)

redButton.addEventListener('click', () => {
	// body.style.backgroundColor = 'red' <- funkar
	body.className = 'red'  // <- best practice
})
blueButton.addEventListener('click', () => { body.className = 'blue' })
greenButton.addEventListener('click', () => { body.className = 'green' })
