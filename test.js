// const pauseThenLog = (pause)=> 
//     new Promise((resolve, reject) => {
//         if(pause){
//             setTimeout(() => resolve(`Paused for ${pause} seconds`),pause)
//         }else {
//             reject(`no pause specified`)
//         }
//     });

// // console.log(pauseThenLog(3000)
// //     .then((response) => console.log(response))
// //     .catch((err)=> console.log(err)));

//  const runTest = async (pause)=> {
//     console.log("Running test");
//     try {
//         const response = await (pauseThenLog(pause))
//         console.log(response)
//         const result = await (response)
//         console.log(`response gotten ${result}`)
//     } catch (err) {
//         console.error(err)
//     }
//  }
//  runTest(3000);

console.log(process)