const fs = require('fs'),
infile = fs.readFileSync('input/day10', 'utf-8')

function day101(input){
	input = input.split('\r\n').map(e=>parseInt(e)).sort((a,b)=>a-b)
	input.unshift(0)
	input.push(input[input.length-1]+3)
	input = input.map((v,i,a)=>a[i+1]-v)
	return input.filter(e=>e==1).length*input.filter(e=>e==3).length
}

function day102(input){
	input = input.split('\r\n').map(e=>parseInt(e)).sort((a,b)=>a-b)
	input.unshift(0)
	input.push(input[input.length-1]+3)
	let diff = input.map((v,i,a)=>a[i+1]-v)
	let count = new Array(input.length).fill(0)
	count.unshift(1)
	input.map((e,i)=>{
		for(let j=i+1;j<input.length;j++){
			if(input[j]-e>3)break;
			count[j] += count[i];
		}
	})
	return count[input.length-1]
}

console.log(day101(infile))
console.log(day102(infile))