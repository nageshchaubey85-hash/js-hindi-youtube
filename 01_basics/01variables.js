const accountId=144556
let accountEmail="nagesh"
var accountPassword="13164"
accounCity="jaipur"
let accountState;//show undefined
//accountId=2// not allowed
accountEmail="hc@hc.com"
accountPassword="21211211"
accountCity="Bengluru"
let pizza=null//contain null value
console.log(accountId);
/*
prefer not to use var
because of issues in block scope and functional scope
*/
console.log([accountId,accountEmail,accountPassword,accountCity])
console.table([accountId,accountEmail,accountPassword,accountCity,accountState,pizza])


