var jokes = [ // joke objeccts
  {
    id: 1,
    jokeText:
      "Why don't scientists trust atoms? Because they make up everything.",
    jokeType: "Science",
  },
  {
    id: 2,
    jokeText:
      "Why did the scarecrow win an award? Because he was outstanding in his field.",
    jokeType: "Puns",
  },
]

const id = 1;
const findObject = jokes.find((joke)=> joke.id === id);

console.log(findObject.id);
console.log(findObject.jokeText);
console.log(findObject.jokeType);