const fs = require('fs')

const infile = fs.readFileSync('input/day12', 'utf-8')

function day121(input){
	input = input.split('\r\n')
	let rot = 0
	let ns = 0
	let ew = 0
	input.forEach((e)=>{
		let [instr, num] = e.split(/(?<=[A-Z])/)
		num = parseInt(num)
		switch(instr){
			case 'N':
				ns+=num
				break;
			case 'S':
				ns-=num
				break;
			case 'E':
				ew+=num
				break;
			case 'W':
				ew-=num
				break;
			case 'L':
				rot+=num
				break;
			case 'R':
				rot-=num
				break;
			case 'F':
				switch((4+rot/90%4)%4){
					case 0:
						ew+=num
						break;
					case 1:
						ns+=num
						break;
					case 2:
						ew-=num
						break;
					case 3:
						ns-=num
						break;
				}
				break;
		}
	})
	return Math.abs(ns)+Math.abs(ew)
}
function day122(input){
		input = input.split('\r\n')
	let x = 0
	let y = 0
	let wx = 10
	let wy = 1
	input.forEach((e)=>{
		let [instr, num] = e.split(/(?<=[A-Z])/)
		num = parseInt(num)
		switch(instr){
			case 'N':
				wy+=num
				break;
			case 'S':
				wy-=num
				break;
			case 'E':
				wx+=num
				break;
			case 'W':
				wx-=num
				break;
			case 'L':
				switch((4+num/90%4)%4){
					case 1:
						m = wx
						wx = wy*-1
						wy = m
						break;
					case 2:
						wx*=-1
						wy*=-1
						break;
					case 3:
						m = wx
						wx = wy
						wy = m*-1
						break;
				}
				break;
			case 'R':
				switch((4+num/90%4)%4){
					case 3:
						m = wx
						wx = wy*-1
						wy = m
						break;
					case 2:
						wx*=-1
						wy*=-1
						break;
					case 1:
						m = wx
						wx = wy
						wy = m*-1
						break;
				}
				break;
			case 'F':
				x += wx*num
				y += wy*num
		}
	})
	return Math.abs(y)+Math.abs(x)
}

console.log(day121(infile))
console.log(day122(infile))