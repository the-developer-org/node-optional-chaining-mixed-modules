const config = require('../src/utils/config.cjs');

console.log('Example 1 - Optional Chaining in CJS:');
console.log('Theme:', config?.settings?.theme);
console.log(
	'Non-existent property:',
	config?.settings?.nonExistent?.value || 'No value found'
);
