// 3 fundamental functions of arrays
// map, filter, reduce

let names = ["Pedro","JAck","Jessica"];

const try1 = names.map((name)=>{
    return name + "1"
});
console.log(try1);
// example react below

const try2 = names.map((name) => {
// return <h1> {names} </h1>;
});
console.log(try2);
// below uses filter

const try3 = names.filter((name) => {
    return name !== "Pedro"
});
console.log(try3);
// some other concepts that are useful

//Async
//Await
//Fetch