function deepEqual(a,b){
        if((typeof a==='object'&&a!==null)&&(typeof b==='object'&&b!==null)){
                let a_keys = Object.keys(a)
                let b_keys = Object.keys(b)
                //compare length of the array of both objects
                if(a_keys.length!==b_keys.length){return false}
                for(let key in a_keys){
                        if(a[key]!==b[key]){
                                return false
                        }
                //compare them and only return a result if its false
                        if(!deepEqual(a[key],b[key])){return false}
                }
        }else{
                if(a!==b){return false}
        }
return true
}
