import { getFact } from '../services/api.service.ts'
import { FactI, FactType } from '../types/fact.types.ts'

export const createQuoteElement = async (type: FactType) => {
	const quoteElement = document.createElement('q')
	const fact: FactI = await getFact(type)

	quoteElement.classList.add('fact')
	quoteElement.textContent = fact.text

	return quoteElement
}

export const createRefreshRandomFactButton = (contentBox: HTMLElement) => {
	const refreshButton = document.createElement('button')
	const refreshButtonLabel = document.createElement('label')

	refreshButton.id = 'refresh-button'
	refreshButton.classList.add('button')
	refreshButtonLabel.textContent = 'Refresh Fact'
	refreshButtonLabel.htmlFor = 'refresh-button'
	refreshButton.append(refreshButtonLabel)

	refreshButton.addEventListener('click', async () => {
		contentBox.replaceChildren()

		const quoteElement = await createQuoteElement('random')
		const refreshButton = createRefreshRandomFactButton(contentBox)
		contentBox.append(quoteElement)
		contentBox.append(refreshButton)
	})

	return refreshButton
}
