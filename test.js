for(let m=1; m<1000; m++){
    let input = toString(m)
    let length = input.length
    for(let n=0; n<m; n++){
        let sum = n
        n_str = n.toString()
        for(let i=0;i<length;i++){
            sum = sum + parseInt(n_str[i])
        }
        if(m===sum){
            console.log(n)
            break;
        }
        if(n===m){
            console.log(0)
        }
    }
}