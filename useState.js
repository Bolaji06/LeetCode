
function useState(initialState){
    let state = initialState;

    const setState = (curState) => {
        return state = curState;
    }

    return [state, setState]

}
const [state, setState] = useState(2);
//console.log(setState(3));
console.log(setState((cur) => cur + 1));
console.log(state);
console.log(state);