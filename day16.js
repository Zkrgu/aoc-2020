const fs = require('fs')

const infile = fs.readFileSync('input/day16', 'utf-8')

function day161(input){
	input = input.split(/\r\n.*tickets?:\r\n/g)
	let requirements = input[0].split('\r\n')
	requirements.pop()
	requirements = requirements.map(e=>e.split(': ')[1].split(/-| or /gm).map(f=>parseInt(f)))
	let tickets = input[2].split('\r\n').map(e=>e.split(',').map(f=>parseInt(f)))
	tickets.forEach((e,i)=>{
		let validFields = 0
		e.forEach((f,j)=>{
			for(let k=0;k<requirements.length;k++){	
				if(requirements[k][0]<=f&&f<=requirements[k][1]||requirements[k][2]<=f&&f<=requirements[k][3]){
					tickets[i][j]=0;
					break;
				}
			}
		})
	})
	return tickets.flat().reduce((p,c)=>p+c)
}
function day162(input){
	input = input.split(/\r\n.*tickets?:\r\n/g)
	let reqs = input[0].split('\r\n')
	reqs.pop()
	let requirements = reqs.map(e=>e.split(': ')[1].split(/-| or /gm).map(f=>parseInt(f)))
	let tickets = input[2].split('\r\n').map(e=>e.split(',').map(f=>parseInt(f)))
	let validTickets = []
	tickets.forEach((e,i)=>{
		let validFields = 0
		e.forEach((f,j)=>{
			for(let k=0;k<requirements.length;k++){	
				if(requirements[k][0]<=f&&f<=requirements[k][1]||requirements[k][2]<=f&&f<=requirements[k][3]){
					validFields++
					break;
				}
			}

		})
		if(validFields == requirements.length){
			validTickets.push(tickets[i])
		}
	})
	let fieldValues = []
	reqs.map(e=>fieldValues.push([]))
	validTickets.forEach(e=>{
		e.forEach((f,i)=>{
			fieldValues[i].push(f)
		})
	})
	let fieldCandidates = []
	reqs.map((e,i)=>fieldCandidates.push([i]))
	fieldValues.forEach((e,i)=>{
		requirements.forEach((f,j)=>{
			let c =0
			e.forEach(g=>{
				if(f[0]<=g&&g<=f[1]||f[2]<=g&&g<=f[3]) c++
			})
			if(c==e.length){
				let req = reqs[j]
				req = req.split(':')[0]
				fieldCandidates[i].push(req)
			}
		})
	})
	fieldCandidates.sort((a,b)=>a.length-b.length)
	let fieldMap = new Map()
	fieldCandidates.forEach((e,i)=>{
		e.slice(1).forEach(f=>{
			if(!fieldMap.has(f)) fieldMap.set(f, e[0])
		})
	})
	let myTicket = input[1]
	myTicket = myTicket.split(',').map(e=>parseInt(e))
	let product = 1;
	fieldMap.forEach((v,k)=>{
		if(k.startsWith('departure')) product *= myTicket[v]
	})
	return product
}

console.log(day161(infile))
console.log(day162(infile))