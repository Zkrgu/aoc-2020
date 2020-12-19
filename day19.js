const fs = require('fs')

const infile = fs.readFileSync('input/day19', 'utf-8')

function day191(input){
	let [inrules, inlns] = input.split('\r\n\r\n')
	let rules = new Map()
	inrules.split('\r\n').map(e=>{f=e.split(': ');rules.set(parseInt(f[0]),f[1])})
	let test = new RegExp('^'+makeRule(rules, rules.get(0),0)+'$')
	let c = 0;
	inlns.split('\r\n').forEach(e=>{
		if(test.test(e))c++
	})
	return c
}
function day192(input){
	let [inrules, inlns] = input.split('\r\n\r\n')
	let rules = new Map()
	inrules.split('\r\n').map(e=>{f=e.split(': ');rules.set(parseInt(f[0]),f[1])})
	rules.set(8, '42 | 42 134')
	rules.set(134, '"+"')
	rules.set(11, '42 31 | 42 11 31')
	let test = new RegExp('^'+makeRule(rules, rules.get(0),0)+'$')
	let c = 0;
	inlns.split('\r\n').forEach(e=>{
		if(test.test(e))c++
	})
	return c
}
function makeRule(rules, rule, n){
	if(n>4) return ''
	if(rule.startsWith('"')){
		return rule.slice(1,-1)
	}else{
		return '(?:'+rule.split(' | ').map(e=>e.split(' ').map(f=>makeRule(rules, rules.get(parseInt(f)), rules.get(parseInt(f))==rule?n+1:0)).join('')).join('|')+')'
	}
}

console.log(day191(infile))
console.log(day192(infile))

