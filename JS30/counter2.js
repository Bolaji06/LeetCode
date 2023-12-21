
var createCounter = function(init) {
    let cur = init;
    
    const increment = () => { 
        return cur += 1;
    }
    const decrement = () => {
        return cur -= 1
    }
    const reset = () => {
        cur = init;
        return cur;
    }
    
    return {
        increment,
        decrement,
        reset,
    }
    
};
const counter = createCounter(6);
// console.log(counter.decrement());
console.log(counter.decrement());
console.log(counter.decrement());
console.log(counter.decrement());
// console.log(counter.decrement());
// console.log(counter.reset());
