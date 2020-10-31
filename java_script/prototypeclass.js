var Employee=function(){}
Employee.prototype.name='Aksh';
Employee.prototype.printName=function(){
    console.log('welcome'+this.name);
};
emp1=new Employee();
emp1.name='ram';
emp1.printName();

var Product=function(){
    Product.prototype={
        name:'Laptop',
    showDesc:function(){
        console.log('15 inch 12Gb'+this.name);
    },
    printStock:function(stock){
        console.log('stock available'+stock);
    }
    }
}