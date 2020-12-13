const fs = require('fs')

const infile = fs.readFileSync('input/day07', 'utf-8')

function day071(input){
	let bagTypes = new Set()
	return canContain('shiny gold', bagTypes, input).size
}
function day072(input){
	let bags = new Map()
	input.split('\r\n').forEach(e=>{
		let eArr = e.split(' contain ')
		let container = eArr[0].split(' ').slice(0,-1).join(' ')
		let preContents = eArr[1].split(/(?:, )*(?=\d)/)
		let contents = []
		preContents.forEach(f=>{
			f = f.split(' ').slice(0, -1).join(' ')
			if(f!='no other')contents.push(f)
		})
		bags.set(container, contents)
	})
	return mustContain('shiny gold', bags)
}
function canContain(color, types, input){
	input.split('\r\n').forEach(e=>{
		let eArr = e.split(' contain ')
		let container = eArr[0].split(' ').slice(0,-1).join(' ')
		if(types.has(container)) {
			return types
		}
		let contents = eArr[1].split(/(?:, )*\d /)
		contents.shift()
		contents.forEach(f=>{
			f = f.split(' ').slice(0,-1).join(' ')
			if(f==color){
				types.add(container)
				types = canContain(container, types, input)
			}
		})
	})
	return types
}
function mustContain(color, bags){
	let bagCount = 0
	bags.get(color).forEach(e=>{
		let count = parseInt(e.slice(0,1),10)
		bagCount += count+count*mustContain(e.slice(2), bags)
	})
	return bagCount
}
console.log(day071(infile))
console.log(day072(infile))