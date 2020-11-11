import {user, userScheme} from "./user-Scheme.js";

user.firstName = "";
user.age = 70;

import {validateObject} from "./validateF-O.js";


import {dumpErrors} from "./dumpErrors.js";


const result = validateObject(user, userScheme);

if (result.length !== 0) {
    dumpErrors(result, user);
} else {
    console.log(`All is ok`);
}
