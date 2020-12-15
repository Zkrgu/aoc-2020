const fs = require('fs')

const infile = fs.readFileSync('input/day15', 'utf-8')

function day151(input){
	input = input.split(',').map(e=>parseInt(e))
	let arr = [...input]
	for(let i=arr.length;arr.length<2020;i++){
		let reAdd = arr.pop()
		let newNum = arr.lastIndexOf(reAdd)
		newNum = newNum>-1?i-1-newNum:0
		arr.push(reAdd,newNum)
	}
	return arr.pop()
}
function day152(input){
	input = input.split(',').map(e=>parseInt(e))
	let arr = new Uint32Array(30000000)
	let prev = 0
	for(let i=0;i<30000000;i++){
		if(i<input.length){
			prev = input[i]
			arr[prev] = i+1
		}else{
			let previ = arr[prev] || -1;
			arr[prev] = i
			prev = previ==-1?0:i-previ;
		}
	}
	return prev
}
console.log(day151(infile))
console.log(day152(infile))
  