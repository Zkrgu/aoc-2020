const { kMaxLength } = require('buffer')
const fs = require('fs')

const infile=fs.readFileSync('input/day13', 'utf-8')

function day131(input){
	let [timestamp, buses] = input.split('\r\n')
	buses = buses.split(',').filter(e=>e!='x').map(e=>parseInt(e))
	let min = Infinity
	let f = 0
	buses.forEach(e=>{
		if(e-timestamp%e<min){
			min = e-timestamp%e
			f = e
		}
	})
	return f*min
}

function day132(input){
	let [timestamp, buses] = input.split('\r\n')
	buses = buses.split(',').map(e=>e!='x'?parseInt(e):'x')
	let lines = new Map()
	buses.forEach((e,i)=>{
		e!='x'?lines.set(i,e):null
	})
	let sum = 0
	let product = 1
	lines.forEach((k,v)=>{
		while((sum+v)%k != 0) sum += product
		product *= k
	})
	return sum
}
console.log(day131(infile))
console.log(day132(infile))