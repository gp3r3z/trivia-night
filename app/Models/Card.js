import { generateId } from '../Utils/generateId.js'

export class Card {
    constructor(data) {
        this.question = data.question
        this.type = data.type
        this.correct_answer = data.correct_answer

    }

    get CardTemplate() {
        return `
        <div class="col-3 bg-secondary text-center p-3 border border-dark rounded m-1 ">
      
        <h3>${this.question}</h3> 
      
        <button class="btn btn-primary" type="submit" onclick="app.cardsController.submitAnswer('True')">True</button>
        <button class="btn btn-primary" type="submit" onclick="app.cardsController.submitAnswer('False')">False</button>
          </div>
        
    
        `
    }


}