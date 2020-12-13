import re

f = open('input/day04','r')
content = f.readlines()
f.close()

content = "".join(content).split('\n\n')
for i in range(len(content)):
	try:
		content[i] = re.split(r"\s",content[i])
		for j in range(len(content[i])):
			content[i][j] = content[i][j].split(':')
		content[i] = {g[0] : g[1] for g in content[i]}
	except:
		pass
def day041(input):
	count = 0
	for e in input:
		if all(key in e for key in ('byr','iyr','eyr','hgt','hcl','ecl','pid')):
			count += 1
	return count

def day042(input):
	count = -1
	for e in input:
		if all(key in e for key in ('byr','iyr','eyr','hgt','hcl','ecl','pid')):
			byr = 1920 <= int(e['byr']) <= 2002
			iyr = 2010 <= int(e['iyr']) <= 2020
			eyr = 2020 <= int(e['eyr']) <= 2030
			hgt = len(re.findall('(?:59|6[0-9]|7[0-6])in|1(?:[5-8][0-9]|9[0-3])cm',e['hgt'])) > 0
			hcl = len(re.findall('#[0-9a-f]{6}',e['hcl'])) > 0
			ecl = len(re.findall('amb|blu|brn|gry|grn|hzl|oth',e['ecl'])) > 0
			pid = len(re.findall('[0-9]{9}', e['pid'])) > 0
			if byr and iyr and eyr and hgt and hcl and ecl and pid:
				count += 1
	return count

if __name__ == "__main__":
	print(day041(content))
	print(day042(content))