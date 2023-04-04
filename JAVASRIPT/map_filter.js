// 3 fundamental functions of arrays
// map, filter, reduce

let names = ["Pedro","JAck","Jessica"];

names.map((name)=>{
    return name + "1"
});
// example react below

names.map((name) => {
return <h1> {names} </h1>
});
// below uses filter

names.filter((name) => {
    return name !== "Pedro"
});
// some other concepts that are useful

//Async
//Await
//Fetch