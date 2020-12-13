const fs = require('fs')

const infile = fs.readFileSync('input/day05', 'utf-8').split('\n')

function day051(input){
	let arr = new Array(1024)
	input.some((e,i)=>{
		let row = parseBin(e.slice(0,7))
		let col = parseBin(e.slice(7,10))
		arr[row*8+col] = row*8+col
	})
	arr = arr.filter(e=>typeof e == "number")
	return arr.pop()
}
function day052(input){
	let arr = new Array(1024).fill('0')
	input.some((e,i,a)=>{
		let row = parseBin(e.slice(0,7))
		let col = parseBin(e.slice(7,10))
		// arr[row][col] = row*8+col
		arr[row*8+col] = row*8+col
	})
	let num = -1
	arr.some((e,i)=>{
		if(e==='0'&&arr[i-1] != 0 && arr[i-1] != undefined){
			return num = i
		}
	})
	return num
}
function parseBin(str){
	str = str.replace(/F|L/g, '0').replace(/B|R/g, '1')
	return parseInt(str, 2)
}

console.log(day051(infile))
console.log(day052(infile))