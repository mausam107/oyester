function conversion(obj){
    let arr=[]
    let arr2=[]
    for(let i=0;i<Object.keys(obj).length;i++){

        arr.push( Object.entries(obj)[i]  );
        let entries = new Map(arr);
        let obj2= Object.fromEntries(entries);
        arr.pop();
        arr2.push(obj2);
    }
    return arr2;
}

console.log(conversion({ a: 1, b: 2, c: 3 }))

// const entries = new Map([
//     ['foo', 'bar'],
//     ['baz', 42]
//   ]);
  
//   const obj = Object.fromEntries(entries);
  
//   console.log(obj);

function conversion2(arr){
    let obj={}
    for(let i=0;i<arr.length;i++){
        obj[Object.keys(arr[i])]=  Object.values(arr[i])[0]
    }
    return obj;
}

console.log(conversion2([{ a: 1 }, { b: 2 }, { c: 3 }]))

