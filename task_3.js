let isTrue = true;
let isFalse = false;
let andOperator = isTrue && isFalse;
let orOperator = isTrue || isFalse; 
let notFalse = !isFalse;
let notTrue = !isTrue;

if (andOperator) {
    console.log("Both isTrue and isFalse are True");
    
} else {
    console.log("At least one of isTrue and isFalse are False");  
}

if (orOperator) {
    console.log("At least one of isTrue and isFalse are True");
    
} else {
    console.log("Both isTrue and isFalse are False");  
}

if (notFalse) {
    console.log("isFalse was False");
    
} else {
    console.log("isFalse was True");  
}

if (notTrue) {
    console.log("isTrue was True");
    
} else {
    console.log("isTrue was False");  
}