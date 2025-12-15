const map = new Map();
map.set('name','Ali');
map.set(1,'ID');
console.log(map.get('name'));

const set = new Set();
set.add([1,2,2,3]);
console.log(set);
// Asyncronous Call
console.log('Start')
setTimeout(() =>{
    console.log("async..");
},2000);
console.log("End");

// timer
setTimeout(() =>{
    console.log("1");
},1);

