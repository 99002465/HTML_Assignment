
(function greet(name){
    console.log('hello'+name);
})('Aksh');

var total=(function(n1,n2,n3){
    return n1+n2+n3;
})(10,20,30);
console.log(total);
/*function avgofNum(x,y){
    
    return function(){
        return x+y;
    }
}*/
(function(x,y){
    return function(){
        return(x+y);
    }
})(10,20)();

/*var result=avgofNum(20,30)
console.log(avgofNum(10,20)());
console.log(result());
console.log(result()/2);*/