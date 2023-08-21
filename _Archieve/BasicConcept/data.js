const johnString = "JOHN";
const johnObject = { name:"John",age:45,status:'Married'}
const johnFunction = () => { console.log('..FUNCTION CALL IN JOHN MODULE...')}

module.exports = { johnString, johnObject, johnFunction };
// module.exports = { johnString, johnObject, johnFunction }
