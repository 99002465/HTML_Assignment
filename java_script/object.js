
        var student ={
            name:'ram',
            age:20,
            hobbies:['dance','drawing'],
            greet:function(){
             console.log('good day')
            },
            address:{
                city:'Bangalore',
                state:'KAR'
            
            }
            
        }
        for(const prop in student){
            var stud=student[prop];
            if(stud instanceof Array){
                for(const i in stud)
                console.log('hobby:'+stud[i])
            }else if(typeof stud=='object'){
                for(const key in stud){
                    console.log(key+':'+stud[key]);
                }
            }else if(typeof stud=='function'){
                 stud();
                }else
                console.log(stud);
            }

        
        

