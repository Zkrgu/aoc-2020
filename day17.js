const fs = require('fs')

const infile = fs.readFileSync('input/day17', 'utf-8')

function day171(input){
	let active = []
	input = input.split('\r\n').map((e,i)=>e.split(''))
	input.forEach((e,i)=>e.forEach((f,j)=>f=='#'?active.push(`${i},${j},${0}`):null))
	let minX = -1
	let minY = -1
	let minZ = -1
	let maxX = input.length
	let maxY = input[0].length
	let maxZ = 1
	for(let i=0;i<6;i++){
		let modactive = []
		for(let x=minX;x<=maxX;x++){
			for(let y=minY;y<=maxY;y++){
				for(let z=minZ;z<=maxZ;z++){
					let c = getNeighborCount1(active,x,y,z);
					let i = active.findIndex(e=>e==`${x},${y},${z}`)
					if((c==2||c==3)&&i>-1){
						modactive.push(`${x},${y},${z}`)
					}else if(c==3&&i<0){
						modactive.push(`${x},${y},${z}`)
					}
				}
			}
		}
		minX--
		minY--
		minZ--
		maxX++
		maxY++
		maxZ++
		active = [...modactive]
	}
	return active.length
}
function day172(input){
	let active = []
	input = input.split('\r\n').map((e,i)=>e.split(''))
	input.forEach((e,i)=>e.forEach((f,j)=>f=='#'?active.push(`${0},${i},${j},${0}`):null))
	let minW = -1
	let minX = -1
	let minY = -1
	let minZ = -1
	let maxW = 1
	let maxX = input.length
	let maxY = input[0].length
	let maxZ = 1
	for(let i=0;i<6;i++){
		let modactive = []
		for(let w=minW;w<=maxW;w++){
			for(let x=minX;x<=maxX;x++){
				for(let y=minY;y<=maxY;y++){
					for(let z=minZ;z<=maxZ;z++){
						let c = getNeighborCount2(active,w,x,y,z);
						let i = active.findIndex(e=>e==`${w},${x},${y},${z}`)
						if((c==2||c==3)&&i>-1){
							modactive.push(`${w},${x},${y},${z}`)
						}else if(c==3&&i<0){
							modactive.push(`${w},${x},${y},${z}`)
						}
					}
				}
			}
		}
		minW--
		minX--
		minY--
		minZ--
		maxX++
		maxY++
		maxZ++
		maxW++
		active = [...modactive]
	}
	return active.length
}
function getNeighborCount1(active,x,y,z){
	let c = 0
	for(let xo=-1;xo<=1;xo++){
		for(let yo=-1;yo<=1;yo++){
			for(let zo=-1;zo<=1;zo++){
				if(xo!=0||yo!=0||zo!=0){
					if(active.findIndex(e=>e==`${x+xo},${y+yo},${z+zo}`) > -1){
						c++
					}
				}
			}
		}
	}
	return c
}
function getNeighborCount2(active,w,x,y,z){
	let c = 0
	for(let wo=-1;wo<=1;wo++){
		for(let xo=-1;xo<=1;xo++){
			for(let yo=-1;yo<=1;yo++){
				for(let zo=-1;zo<=1;zo++){
					if(wo!=0||xo!=0||yo!=0||zo!=0){
						if(active.findIndex(e=>e==`${w+wo},${x+xo},${y+yo},${z+zo}`) > -1){
							c++
						}
					}
				}
			}
		}
	}
	return c
}

console.log(day171(infile))
console.log(day172(infile))