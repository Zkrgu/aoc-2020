const fs = require('fs')

const input = fs.readFileSync('input/day02', 'utf-8')

function day021(input){
	let count = 0
	let change = input
	change.replace(/^(\d+)-(\d+) ([a-z]):.*$/gm, (match, low, high, letter) =>{
		let letterCount = [...match.matchAll(new RegExp(`${letter}`, 'g'))].length-1
		if(low<=letterCount && letterCount<=high){
			count++
		}
		return ""
	})
	return count
}
function day022(input){
	let count = 0
	let change = input
	change.replace(/^(\d+)-(\d+) ([a-z]):.*$/gm, (match, low, high, letter) =>{
		let password = match.split(':').slice(1).join('')
		if(password[low] == letter ^ password[high] == letter){
			count++
		}
	})
	return count
}
console.log(day021(input))
console.log(day022(input))
