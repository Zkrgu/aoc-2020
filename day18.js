const fs = require('fs')

const infile = fs.readFileSync('input/day18', 'utf-8')

function day181(input){
	input = input.split('\r\n')
	let c = 0
	input.forEach(e=>{
		c += oddMaths(e)
	})
	return c
}
function day182(input){
	input = input.split('\r\n')
	let c = 0
	input.forEach(e=>{
		c += oddMaths2(e)
	})
	return c
}
function oddMaths(str){
	if(str.match(/\([^()]*\)/)){
		str = str.replace(/\(([^()]*)\)/g, (match, nums)=>{
			return oddMaths(nums)
		})
		return oddMaths(str)
	}else{
		return str.split(/ (?=\+|\*)/).map(e=>e[0]=='*'||e[0]=='+'?e.split(' '):e).reduce((p,c)=>c[0]=='*'?-p*-c[1]:p- -c[1])
	}
}
function oddMaths2(str){
	if(str.match(/\([^()]*\)/)){
		str = str.replace(/\(([^()]*)\)/g, (match, nums)=>{
			return oddMaths2(nums)
		})
		return oddMaths2(str)
	}else{
		if(str.includes('*') && str.match(/\d+(?: \+ \d+)+/g)) return oddMaths2(str.replace(/\d+(?: \+ \d+)+/g, "($&)"))
		return str.split(/ (?=\+|\*)/).map(e=>e[0]=='*'||e[0]=='+'?e.split(' '):e).reduce((p,c)=>c[0]=='*'?-p*-c[1]:p- -c[1])
	}
}

console.log(day181(infile))
console.log(day182(infile))