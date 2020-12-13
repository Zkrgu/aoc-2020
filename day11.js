const fs = require('fs');

const infile = fs.readFileSync('input/day11', 'utf-8')

function day111(input){
	input = input.split('\r\n').map(e=>e.split(''))
	var a = [...input.map(e=>[...e])]
	var b = [...a.map(e=>[...e])]
	while(true){
		a.forEach((e,i)=> {
			e.forEach((f,j)=>{
				let c
				// if(i==0) console.log("ok")
				switch(f){
					case 'L':
						c = 0;
						for(let k=i-1;k<i+2;k++){
							for(let l=j-1;l<j+2;l++){
								if(k>-1&&l>-1&&k<a.length&&l<a[0].length) c += a[k][l]=="#"?1:0
							}
						}
						if(c==0){
							b[i][j] = "#"
						}
						break;
					case '#':
						c = 0;
						for(let k=i-1;k<i+2;k++){
							for(let l=j-1;l<j+2;l++){
								if(k>-1&&l>-1&&k<a.length&&l<a[0].length) c += a[k][l]=="#"?1:0
							}
						}
						if(c>4){
							b[i][j] = "L"
						}
						break;
				}
			})
		});
		if(JSON.stringify(a)==JSON.stringify(b)) return a.flat().reduce((p,c)=>(p=="#"?1:p)+(c=="#"?1:0))
		a = [...b.map(e=>[...e])]
	}
}
function day112(input){
	input = input.split('\r\n').map(e=>e.split(''))
	var a = [...input.map(e=>[...e])]
	var b = [...a.map(e=>[...e])]
	while(true){
		a.forEach((e,i)=> {
			e.forEach((f,j)=>{
				let c
				// if(i==0) console.log("ok")
				switch(f){
					case 'L':
						c = 0;
						for(let k=i-1;k<i+2;k++){
							for(let l=j-1;l<j+2;l++){
								if(k>-1&&l>-1&&k<a.length&&l<a[0].length){
									let d = a[k][l]
									let m = 0
									let n = 0
									while(d == '.'){
										if(k+m<0||l+n<0||k+m>=a.length||l+n>=a[0].length) break;
										d=a[k+m][l+n]
										m+=k-i
										n+=l-j
									}
									c += d=="#"?1:0
								}
							}
						}
						if(c==0){
							b[i][j] = "#"
						}
						break;
					case '#':
						c = 0;
						for(let k=i-1;k<i+2;k++){
							for(let l=j-1;l<j+2;l++){
								if(k>-1&&l>-1&&k<a.length&&l<a[0].length){
									let d = a[k][l]
									let m = k-i
									let n = l-j
									while(d == '.'){
										if(k+m<0||l+n<0||k+m>=a.length||l+n>=a[0].length) break;
										d=a[k+m][l+n]
										m+=k-i
										n+=l-j
									}
									c += d=="#"?1:0
								}
							}
						}
						if(c>5){
							b[i][j] = "L"
						}
						break;
				}
			})
		});
		if(JSON.stringify(a)==JSON.stringify(b)) return a.flat().reduce((p,c)=>(p=="#"?1:p)+(c=="#"?1:0))
		a = [...b.map(e=>[...e])]
	}
}

console.log(day111(infile))
console.log(day112(infile))