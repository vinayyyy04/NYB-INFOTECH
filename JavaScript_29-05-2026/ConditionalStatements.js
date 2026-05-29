let results = prompt("enter your results (0-100):");
let grade;

if (results >=90 && results <=100) {
    grade = "a";
} else if (results >=70 && results <=90) {
    grade = "b";
}else if (results >=60 && results <=80) {
    grade = "c";
}else if (results >=50 && results <=60) {
    grade = "d";
}else if (results >=0 && results <=35) {
    grade = "e";
}

console.log("according to you marks, your results is:" ,grade);


function result(v){
    switch(v){
        case 10:
            console.log("oustanding");
            break;
            case 9:
                console.log("good");
                break;
                case 8:
                    console.log("average");
                    break;
                    case 7:
                        console.log("ok");
                        case 3:
                            console.log("fail");
    }
}

let gradeA = 10;
result(gradeA);
let gradeB = 9;
result(gradeB);
let gradeC = 8;
result(gradeC);
let gradeD = 7;
result(gradeD);
let gradeE = 3;
result(gradeE);
