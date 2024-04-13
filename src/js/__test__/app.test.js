import Team from '../app';
const bowerman = {
	name: 'Bowerman',
	type: 'bowerman'
};
const swordsman = {
	name: 'Swordsman',
	type: 'swordsman'
};
const magician = {
	name: 'Magician',
	type: 'magician'
};

test('adding', () => {
    const team = new Team();
	team.add(magician);
	expect(team.members.has(magician)).toBe(true);
});
test('replay', () => {
	expect(() => {
		const team = new Team();
		team.add(bowerman);
		team.add(bowerman);
	}).toThrow('error');
});
test('plenty', () => {
	const team = new Team();
	team.addAll(bowerman, swordsman, magician, swordsman);
	const recieved = team.members.size;
	expect(recieved).toBe(3);
})
test('array', () => {
	const team = new Team();
	team.addAll(bowerman, swordsman, magician);
	const recieved = team.toArray();
	const expected = [{
			name: 'Bowerman',
			type: 'bowerman'
		},
		{
			name: 'Swordsman',
			type: 'swordsman'
		},
		{
			name: 'Magician',
			type: 'magician'
		}
	];
	expect(recieved).toEqual(expected);
})