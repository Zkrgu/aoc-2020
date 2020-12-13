const fs = require('fs')

const infile = fs.readFileSync('input/day06', 'utf-8')

function day061(input){
	let count = 0
	input.split('\r\n\r\n').forEach((e)=>{
		chars = new Set()
		e.split(/\r\n/g).join('').split('').forEach(f=>{
			chars.add(f)
		})
		count += chars.size
	})
	return count
}
function day062(input){
	let count = 0
	input.split('\r\n\r\n').forEach((e)=>{
		chars = new Map()
		len = e.split('\n').length
		e.split(/\r\n/g).join('').split('').forEach(f=>{
			if(chars.has(f)){
				chars.set(f, chars.get(f)+1)
			}else{
				chars.set(f,1)
			}
		})
		chars.forEach(f=>{
			if(f==len) count+=1
		})
	})
	return count
}

console.log(day061(infile))
console.log(day062(infile))