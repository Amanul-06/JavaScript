const accountId = 144553
let accountEmail = "amanul@example.com"
var accountPassword = "12345"
accountCity = "Kolkata"
let accountState;

// accountId = 2 // not allowed
accountEmail = "ah@google.com"
accountPassword = "121212"
accountCity = "Delhi"

/*
Prefer to use let over var
because of scope problems in JS
*/

console.log(accountId)

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])