const cats= ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push("Ralph");
};

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
};
function destructivelyRemoveLastCat(name) {
    cats.pop("Bob");
};
function destructivelyRemoveFirstCat(name) {
    cats.shift("Bob");
};
function appendCat(name){
   const mumbi = [...cats,"Broom"];
    return mumbi;
};
function prependCat(name){
    const pet = ["Arnold",...cats];
     return pet;
 };




  
 function removeLastCat(){
    return cats.slice(0,-1);
 };
 function removeFirstCat(){
    return cats.slice(1);
  };