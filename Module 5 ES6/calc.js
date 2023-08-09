
function sum(a,b){
    console.log(a+ b)
}

function sub(a,b){
    console.log(a-b)
}

function mul(a,b){
    console.log(a*b)
}

function div(a,b){
    console.log(a/b)
}


// Lastly we have to write module.exports if we want our module to be exported and to be used in any place.
module.exports={
    add:sum,
    sub:sub,
    mul:mul,
    division:div
}
