
function createCounter(n){
    let counter = n;

    return function(){
        const current = counter;
        counter += 1;
        return current;
    }
}
const counter = createCounter(10);
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());