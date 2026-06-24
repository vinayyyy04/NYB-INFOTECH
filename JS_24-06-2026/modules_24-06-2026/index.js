//import--used to bring exported items from another file into the current file.

import { employee } from "./modules.js";
import { markAttendance } from "./modules.js";

console.log(employee.name);
console.log(markAttendance(employee.name));



import {name, greet} from "./modules.js";

console.log(name);
console.log(greet());