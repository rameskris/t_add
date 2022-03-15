function trippleAdd(a){
    return function(b){
        return function(c){
            console.log(a+b+c)
        }
    }
}

trippleAdd(10)(20)(30)