const fs = require('fs')

const infile = fs.readFileSync('input/day03', 'utf-8')

function day031(input){
	let trees = 0
	let counter = 0
	input.split(/\r*\n\r*/).some((e,i,a)=>{
		let eArr = e.split('')
		if(eArr[counter%eArr.length]=="#") trees++
		counter += 3
	})
	return trees
}
function day032(input){
	let a = slope(input, 1, 1)
	let b = day031(input)
	let c = slope(input, 5, 1)
	let d = slope(input, 7, 1)
	let e = slope(input, 1, 2)
	return a*b*c*d*e
}
function slope(input, right, down){
	let trees = 0
	let counter = 0
	input.split(/\r*\n\r*/).some((e,i,a)=>{
		if(i%down==0){
			let eArr = e.split('')
			if(eArr[counter%eArr.length]=="#") trees++
			counter += right
		}
	})
	return trees
}

console.log(day031(infile))
console.log(day032(infile))