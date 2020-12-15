def day141(input):
	input = input.split('\n')
	mask = ''
	mem = {}
	for e in input:
		[instr, val] = e.split(' = ')
		if instr == "mask":
			mask = val
		else:
			addr = int(instr[4:-1])
			val = int(val)
			andmask = int(mask.replace("1","0").replace('X', '1'),2)
			ormask = int(mask.replace('X', '0'),2)
			mem[addr] = val & andmask | ormask
	return sum(mem.values())

def day142(input):
	input = input.split('\n')
	mask = ''
	mem = {}
	for e in input:
		[instr, val] = e.split(' = ')
		if instr == 'mask':
			mask = val
		else:
			addr = int(instr[4:-1])
			val = int(val)
			write(mem, addr, mask, val)
	return sum(mem.values())

def write(mem, addr, mask, val):
	addr = addr & int(mask.replace("0","1").replace("X","0"),2)
	if 'X' in mask:
		i = mask.find('X')
		write(mem, addr, mask[:i]+'0'+mask[i+1:],val)
		write(mem, addr, mask[:i]+'1'+mask[i+1:],val)
	else:
		mem[addr|int(mask,2)] = val

if __name__ == "__main__":
	infile = open('input/day14', 'r').read()
	print(day141(infile))
	print(day142(infile))