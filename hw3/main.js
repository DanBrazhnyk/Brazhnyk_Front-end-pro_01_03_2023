let num1 = prompt('Please write a number') || 0;
let num2 = prompt('PLease write a number') || 22;
console.log(num1)

let num3 = (num1 && num2) > 0 ? 80 :  40;
console.log(num3);

let num={}
if (num1>=90) num.size = 'big'
else if (num1<=40) num.size ='small'
else { num.size = 'medium'}
console.log(num.size)

let value;
switch(num.size)
{
    case 'big':
        value = 1000;
        break;
    case 'medium':
        value = 100 ;  
        break; 
    case 'small':  
        value = 10;
        break;
        default:
            alert('Smth is going wrong!');
}
console.log(value)

let result = num1*num2*num3*value;
console.log(result)

result % 2 != 0 ? console.log("Not equal to 0"):(num2>50)? alert(num2):alert("Not match to conditions");
