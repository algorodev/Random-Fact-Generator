import { createQuoteElement, createRefreshRandomFactButton } from './utils/dom.helpers.ts'
import './styles/index.scss'

const dailyButton = document.getElementById('daily-button')
const randomButton = document.getElementById('random-button')
const contentBox = document.getElementById('content')

if (dailyButton && randomButton && contentBox) {
	const quoteElement = await createQuoteElement('today')
	contentBox.append(quoteElement)

	dailyButton.addEventListener('click', async () => {
		dailyButton.classList.add('tab__item--active')
		randomButton.classList.remove('tab__item--active')

		contentBox.replaceChildren()
		const quoteElement = await createQuoteElement('today')
		contentBox.append(quoteElement)
	})

	randomButton.addEventListener('click', async () => {
		dailyButton.classList.remove('tab__item--active')
		randomButton.classList.add('tab__item--active')

		contentBox.replaceChildren()
		const quoteElement = await createQuoteElement('random')
		const refreshButton = createRefreshRandomFactButton(contentBox)
		contentBox.append(quoteElement)
		contentBox.append(refreshButton)
	})
}
