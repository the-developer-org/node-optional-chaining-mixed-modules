import { getNestedProperty } from '../src/utils/helper.mjs';

const data = { level1: { level2: { level3: 'optional chaining in action' } } };

console.log('Example 2 - Optional Chaining in ES6:');
console.log(
	'Nested property:',
	getNestedProperty(data, 'level1.level2.level3')
);
console.log(
	'Non-existent property:',
	getNestedProperty(data, 'level1.level2.missing') || 'Property not found'
);
