// to take input from cmd line process.argv[2] it is an [1] is node file name then [2]
//      
let inputArray = process.argv.slice(2);
let fs = require("fs");
let path = require("path");
// console.log(inputArray);
// node main.js tree "directoryPath"
// node main.js  organize "directoryPath"
// node main.js help 
let command = inputArray[0];

switch(command){
    case "tree":
        treeFn(inputArray[1]);
        break;
    case "organize":
        organizeFn(inputArray[2])
        break;
    case "help":
        helpFn();
        break;
    default :
        console.log("Please 🙏 Input Right command");
}
function treeFn(dirPath) {
    console.log("tree command implemented",dirPath)
}
function organizeFn(dirPath) {
    // console.log("organize command implemnted for ", dirPath);
    // 1. input -> directory path given
    let destPath;
    if (dirPath == undefined) {
        destPath = process.cwd();
        return;
    } else {
        let doesExist = fs.existsSync(dirPath);
        if (doesExist) {

            // 2. create -> organized_files -> directory
            destPath = path.join(dirPath, "organized_files");
            if (fs.existsSync(destPath) == false) {
                fs.mkdirSync(destPath);
            }

        } else {

            console.log("Kindly enter the correct path");
            return;
        }
    }
    // 3.identify catefory of all the files present in that input directory 
    // 4.copy/cut files to that organized inside of any of category  
}
function helpFn() {
    console.log(`
    List of All the command :
        node main.js tree "directoryPath"   
        node main.js  organize "directoryPath"
        node main.js help 
    `);
}   