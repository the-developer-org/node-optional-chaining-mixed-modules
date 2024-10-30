import express from 'express';
import { getNestedProperty } from './utils/helpers';
const config = require('./utils/config');

const app = express();

console.log('Config object:', config);
console.log('Safe access with optional chaining:', config?.settings?.theme);

const nestedData = { level1: { level2: { level3: 'found me' } } };
console.log(
	'Nested access with helper function:',
	getNestedProperty(nestedData, 'level1.level2.level3')
);

app.listen(3000, () => {
	console.log('Server is running on port 3000');
});
