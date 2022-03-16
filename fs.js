const fs= require('fs')
// console.log(fs);

// read file
// fs.readFile('./docs/txt.txt' , (err , data) =>{   // it's a async function
//     if (err){
//         console.log(err);
//     }
//     console.log(data);
// })
// write file 
fs.writeFile('./docs/txt2.txt' , 'Lorem dolor.' , ()=>{
    console.log('file was written')
}
);
