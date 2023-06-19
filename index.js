// Write your solution here!

let cats = ['Milo','Otis', 'Garfield']

function destructivelyAppendCat(name){
   let myNewCat = (cats.push(name) )
   return myNewCat
}

function destructivelyPrependCat(name){
    let myNewCat = (cats.unshift(name) )
    return myNewCat
}
function destructivelyRemoveLastCat(name){
    let myNewCat = (cats.pop(name) )
    return myNewCat
}
function destructivelyRemoveFirstCat(name){
    let myNewCat = (cats.shift(name) )
    return myNewCat
}
function appendCat(name){
    let myNewCat = [...cats,name];
    return myNewCat
}
function prependCat(name){
    let myNewCat = [name,...cats,];
    return myNewCat
}
function removeLastCat(name){
    let myNewCat = (cats.slice (0,length-1))
    return myNewCat
}
function removeFirstCat(name){
    let myNewCat = (cats.slice (1))
    return myNewCat
}