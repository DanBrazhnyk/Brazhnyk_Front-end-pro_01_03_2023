const arr =[1,1,1,2,2,2,2,3,3,3,3,3,4,5,5]
const arrFunc =(arr)=>{
    const newArr=[];
    arr.forEach(element => {
        newArr[element] = newArr[element]?newArr[element]+1 : 1;
    });
    const filter = arr.filter(item=>newArr[item]%2!==0)

    return [...new Set(filter)]
}
console.log(arrFunc(arr))

function ezjQuery(selector) {
    if (!(this instanceof ezjQuery)) {
    return new ezjQuery(selector);
    }
    this.selector = selector;
    this.htmlString = `<${selector}></${selector}>`;
    this.add = function(tag, text) {
    const newHtmlString = text
        ? `<${tag}>${text}</${tag}>`
        : `<${tag}></${tag}>`;
    this.htmlString = this.htmlString.replace(`</${this.selector}>`, `${newHtmlString}</${this.selector}>`);
    return this;
    }
    this.render = function() {
    return this.htmlString;
    }
}
    let helloList = ezjQuery('body')
  .add('div')
  .add('ul')
  .add('li', 'Hello')
  .render();

console.log(helloList);// "<body><div><ul><li>Hello</li></ul></div></body>"

let bodyDiv = ezjQuery('body')
  .add('div')
  .render();
console.log(bodyDiv);// "<body><div></div></body>"
document.write(helloList)