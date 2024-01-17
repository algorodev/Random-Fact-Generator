import { FactType } from '../types/fact.types.ts'

const BASE_ULR = 'https://uselessfacts.jsph.pl/api/v2/facts'

export const getFact = (factType: FactType) =>
	fetch(`${BASE_ULR}/${factType}`)
		.then(response => response.json())
		.catch(error => console.error(error.message))
