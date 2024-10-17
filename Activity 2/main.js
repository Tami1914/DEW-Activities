//write your JS code here:
const OPERATIONS = [
    { operation: "push", data: [[1, 2, 3], 4] },
    { operation: "+", data: [1, 2, 3] },
    { operation: "+", data: [3] },
    { operation: "*", data: [2, 3] },
    { operation: "filter", data: [[1, 2, 3], 3] },
    { operation: "merge", data: [[1, 2, 3], [4, 5], [6], [7]] },
];

function opSum(data){
    let result = 0;
    for(let i=0; i< data.length; i++){
        result += data[i];
    }
    return result;
}

function opMul(data){
    data.forEach( i => {
        let result = result * i;
    });
}

/* function opMul(data){
    return data.reduce(
        (acc,curr) => acc*curr, 1
    );
} */

function opPush(data){
    let [first, ...rest] = data;
    console.log("esto es lo que tiene first:", first);
    console.log("esto es lo que tiene rest:", rest);
    return [...first, ...rest];
}

function opMerge(data){
    return data.reduce((acc, curr) => [...acc, ...curr]);
}

function batchProcessing(operations) { 
    for (let i=0; i<operations.length; i++){
        const op = operations[i];
        switch(op.operation){
            case "+":
                opSum(op.data);
                break;
            case "*":
                opMul(op.data);
                break;
            case "push":
                opPush(op.data);
                break;
            case "merge":
                opMerge(op.data);
                break;
            case "filter":
                opFilter(op.data);
                break;
        }
    }
}