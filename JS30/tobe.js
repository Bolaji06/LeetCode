
function expect (val) {
    const error = (msg) => new Error (msg);

    return {
        tobe: (tobe) => val === tobe ? {'value' : true} : {error : error('Not Equal')},
        notTobe: (notTobe) => val !== notTobe ? { value : false } : {error: error('Equal')},
    }
}
const ex = expect(9).tobe(9);
const exs = expect(9).notTobe(9)
console.log(exs);