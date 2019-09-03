'use strict';

function calculate(a, b, c) {
    let dicsriminant = b*b-(4*a*c);
    let returnableArray = [];
    if (dicsriminant  > 0) {
        returnableArray.push( (`-${b-Math.round(Math.sqrt(dicsriminant))}/${2*a}`));
        returnableArray.push( (`-${b+Math.round(Math.sqrt(dicsriminant))}/${2*a}`));
        return returnableArray;

    } else if (dicsriminant  < 0) {
        returnableArray.push( (`(-${b}-${Math.round(Math.sqrt(Math.abs(dicsriminant)))}i)/${2*a}`));
        returnableArray.push ((`(-${b}+${Math.round(Math.sqrt(Math.abs(dicsriminant)))}i)/${2*a}`));
        return returnableArray;
    }

    returnableArray.push((`${-b/(2*a)}`));
    return returnableArray;
}
calculate(1,5, 3).map(function (item) {
    console.log(item.toString());
});