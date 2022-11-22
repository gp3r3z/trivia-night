import { appState } from "../AppState.js"
import { Card } from "../Models/Card.js"

import { Pop } from "../Utils/Pop.js";

class CardsService {


    async getTriviaCards(difficulty) {
        const res = await axios.get('https://opentdb.com/api.php?amount=10&category=15&difficulty=' + difficulty + '&type=boolean')
        // console.log('%cLOG: ', 'color:yellow;', ' ', res.data.results)


        // appState.cards = res.data.results.map(cd => new Card(cd))
        appState.cards = res.data.results
        console.log('%cLOG: ', 'color:green;', 'Added to array of cards', appState.cards)


        let getQuestion = appState.cards[appState.cardCounter]

        appState.activeCard = new Card(getQuestion)

        console.log('%cLOG: ', 'color:green;', 'Here is the Active card', appState.activeCard)

    }

    submitAnswer(answer) {
        console.log('%cLOG: ', 'color:yellow;', 'In the data ', answer, '\n Trivia ansswer', appState.activeCard.correct_answer)

        if (appState.activeCard.correct_answer == answer) {
            window.alert('The Answer is correct')
            appState.cardCounter++

            let newQuestion = appState.cards[appState.cardCounter]

            appState.activeCard = new Card(newQuestion)
            appState.topScore++
            appState.emit('activecard')
        } else {
            window.alert("The answer is wrong try again ")
        }
    }

}



// TODO What happens after done with current card array 

export const cardsService = new CardsService()