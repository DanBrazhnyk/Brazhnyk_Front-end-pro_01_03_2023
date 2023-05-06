import { sum as getSum } from "./closuresSum.js";
import { mult as getMult} from "./closuresMult.js";
//Тут фдруг чего уже фантазия началась)
const price = getSum(150)(700)
const procent = getMult(price,2)

export{price,procent}