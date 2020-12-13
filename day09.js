const fs = require('fs')

const infile = fs.readFileSync('input/day09', 'utf-8')

function day091(input){
	input = input.split('\r\n').map(x=>parseInt(x))
	let arr = []
	let ans = -1
	input.forEach((e,i)=>{
		if(i<25) arr.push(e)
		else{
			let num = arr.map(b=>arr.map(c=>b+c==e?b+c:0)).flat().reduce((b,c)=>b+c)
			if(num==0){
				ans = e
			}
			arr.shift()
			arr.push(e)
		}
	})
	return ans
}
function day092(input){
	input = input.split('\r\n').map(x=>parseInt(x))
	let num = 776203571 //day091(input)
	let sum=input[0]
	let i = 0
	let j = 0
	while(sum!=num){
		if(sum<num){
			i++
			sum+=input[i]
		}else{
			sum-=input[j]
			j++
		}
	}
	return Math.min.apply(null,input.slice(j,i))+Math.max.apply(null,input.slice(j,i))
}

console.log(day091(infile))
console.log(day092(infile))