export interface FactI {
	id: string
	text: string
	source: string
	source_url: string
	language: string
	permalink: string
}

export type FactType = 'random' | 'today'
