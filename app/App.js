import { CardsController } from "./Controllers/CardsController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();

  cardsController = new CardsController()


}

window["app"] = new App();
