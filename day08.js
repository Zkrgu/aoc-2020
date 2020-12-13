const fs = require('fs')
const { parse } = require('path')

const infile = fs.readFileSync('input/day08', 'utf-8')

function day081(input){
	input = input.split('\r\n').map((l)=>{
		let [, op, val] = /([^s]+) ([+\-]\d+)/.exec(l.trim())
		return [op, parseInt(val)]
	})
	let exec = new Set()
	let acc = 0
	let i = 0
	while(!exec.has(i)){
		exec.add(i)
		let [op, val] = input[i]
		switch(op){
			case 'nop':
				i++
				break;
			case 'acc':
				acc+=val
				i++
				break;
			case 'jmp':
				i+=val
				break;
		}
	}
	return acc
}

function day082(input){
	input = input.split('\r\n').map((l)=>{
		let [,op, val] = /([^\s]+) ([+\-]\d+)/.exec(l.trim())
		return [op, parseInt(val)]
	})
	for(i=0;i<input.length;i++){
		let mod = input.map(([ op,val])=>[op,val]);
		if(mod[i][0] == 'jmp'){
			mod[i][0] = 'nop'
		}else if(mod[i][0] == 'nop'){
			mod[i][0] = 'jmp'
		}
		let exec = new Set()
		let acc = 0
		let j = 0
		let exit = false;
		while(!exec.has(j)){
			exec.add(j)
			let [op, val] = mod[j]
			switch(op){
				case 'nop':
					j++
					break;
				case 'acc':
					acc+=val
					j++
					break;
				case 'jmp':
					j+=val
					break;
			}
			if(j >= mod.length)return acc
		}
	}
}
console.log(day081(infile))
console.log(day082(infile))