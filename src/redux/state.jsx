import {rerenderEntireTree} from "../index";

let state = {
    dollarRate : 73,
     newCalculation: 0,

     calculate(text) {
         let res;
         res = text * this.dollarRate + ' руб';
         this.newCalculation = res;
         rerenderEntireTree(state)
     },


 }

 export default state