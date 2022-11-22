import { appState } from "../AppState.js"
import { cardsService } from "../Services/CardsService.js"
import { setHTML, setText } from "../Utils/Writer.js"

import { getFormData } from '../Utils/FormHandler.js'

function _drawActiveCard() {
    let currentCard = appState.activeCard
    let template = ''

    template += currentCard.CardTemplate
    setHTML('active-card', template)
}
function _drawTopScore() {
    let topScore = appState.topScore

    setText('top-score', topScore)
}



export class CardsController {
    constructor() {
        console.log('%cLOG: ', 'color:green;', 'Controller connected')
        appState.on('activeCard', _drawActiveCard)
        appState.on('topScore', _drawTopScore)


    }

    getTriviaCards(difficulty) {
        console.log('%cLOG: ', 'color:green;', 'Here is the difficulty', difficulty)
        cardsService.getTriviaCards(difficulty)
    }
    submitAnswer(answer) {
        window.event.preventDefault()
        console.log('%cLOG: ', 'color:green;', 'Submitting answer', answer)

        cardsService.submitAnswer(answer)

    }



}