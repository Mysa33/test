/**
 * Objectif de l'exercice :
 *
 * - Convertir du JSON brut en objets TS de type 'Culture' et 'Prix'.
 * - Calculer la quantité totale pour chaque type de culture, tout champs confondus.
 * - Calculer, pour chaque type de culture, la valeur totale de vente.
 * - Calculer la valeur totale de vente de toutes les cultures réunies.
 *
 * Créer toutes les classes que vous souhaitez pour résoudre élégamment le problème.
 *
 * Le code doit-être écrit et testé dans le présent fichier.
 *
 */
import {BackendStub} from "./Backend";
describe("Je peux afficher des informations sur les cultures", () => {

  const backend = new BackendStub();

  it("en convertissant les flux bruts en classe TypeScript utiles à la résolution du problème de façon typée", () => {

    var myArray = backend.getPrices();
    var myArrayCulture = backend.getCultures(); 
    class Price {
      constructor(readonly type: string, readonly price: number) {
        let reformattedArray = myArray.map(obj => {
          return new Price(obj["type"], obj["price"]);
        });
        //console.info(reformattedArray);
      }
    }
    
    class Culture {
      constructor(readonly field: number, readonly type: string, readonly qty : number) {
        let reformattedArrayCulture = myArrayCulture.map(obj => {
          return new Culture(obj["field"], obj["type"],obj["qty"]);
        });
        //console.info(reformattedArrayCulture);
      }
    }
    
    
   
    
  });

  it("la quantité totale pour chaque type de culture, tout champs confondus", () => {

    
  
  });

  it("pour chaque type de culture, la valeur totale de vente", () => {

  });

  it("la valeur totale de vente de toutes les cultures réunies.", () => {


  });

});
