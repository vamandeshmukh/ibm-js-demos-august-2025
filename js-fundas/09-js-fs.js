console.log("09-js-fs.js");

// =========
// fs module 
// =========

// import fs from "fs/promises";
// import path from 'path';

// // // read file 

// const readFile = async () => {
//     try {
//         const text = await fs.readFile("./sample.txt", "utf8");
//         console.log(text);
//     } catch (error) {
//         console.error(error);
//     }
// }
// readFile();

// // write file 

// const writeFile = async () => {
//     try {
//         await fs.writeFile("D:\\Projects\\ibm-ui\\js-demos\\js-fundas\\sample2.txt", "sample text");
//         console.log("Done");
//     } catch (err) {
//         console.error(err);
//     }
// }
// writeFile();

// ================
// directory module 
// ================

// await fs.mkdir("D:\\Projects\\ibm-ui\\js-demos\\js-fundas\\sample-folder", { recursive: true });

// const items = await fs.readdir("D:\\Projects\\ibm-ui\\js-demos\\js-fundas", { withFileTypes: true });
// for (const item of items) {
//     console.log(item.isDirectory() ? `DIR: ${item.name}` : `FILE: ${item.name}`);
// }

// const samplePath = path.join(process.cwd(), 'sample.txt');
// console.log(samplePath);

// ===========
// path module 
// ===========

// import path from 'path';

// const filePath = "D:\\Projects\\ibm-ui\\js-demos\\js-fundas\\sample.txt";

// console.log(path.dirname(filePath));
// console.log(path.basename(filePath));
// console.log(path.extname(filePath));
// console.log(path.delimiter);
// console.log(path.resolve(filePath));
// console.log(path.join("ibm-ui", "js-demos", "js-fundas"));


// // ==========
// // url module 
// // ==========

// const apiUrl = new URL("https://jsonplaceholder.typicode.com/users?username=Bret");

// console.log(apiUrl.protocol);
// console.log(apiUrl.host);
// console.log(apiUrl.hostname);
// console.log(apiUrl.pathname);
// console.log(apiUrl.search); 



