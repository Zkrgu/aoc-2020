const fs = require('fs')

const input = fs.readFileSync('input/day01', 'utf-8').split(/\n/).map((l)=>parseInt(l))

function day011(input){
	let change =  input.sort((a,b)=>a-b)
	let result = -1
	change.forEach((e,i,a)=>{
		a.slice(i,i)
		let num = a.find(f=>f==2020-e)
		if(num > -1){
			result = e*num
			return true
		}
	})
	return result
}
function day012(input){
	let change = input.sort((a,b)=>a-b)
	for(i=0;i<change.length;i++){
		for(j=i+1;j<change.length;j++){
			for(k=j+1;k<change.length;k++){
				if(change[i]+change[j]+change[k] == 2020){
					return change[i]*change[j]*change[k]
				}
			}
		}
	}
}

function fun011(a){
	return a.map(b=>a.map(c=>b- -c==2020?-b*-c:0)).flat().reduce((b,c)=>b+c)/2
}
function fun012(a){
	return a.map(b=>a.map(c=>a.map(d=>b- -c- -d==2020?-b*-c*d|0:0))).flat(2).reduce((b,c)=>b- -c)/6
}

console.log(fun011(input))
console.log(fun012(input))