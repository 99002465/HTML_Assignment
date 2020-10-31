var mobile=[
{
    brand:'MI',
       price:13000,
       features:{
           ram:'64Mb',
           camera:32,
           screensize:6.5
       },
       accessaries:['charger','earphones']
    },
    {
        brand:'Samsung',
           price:15000,
           features:{
               ram:'32Mb',
               camera:32,
               screensize:5.5
           },
           accessaries:['charger','earphones']
        },
        {
            brand:'Nokia',
               price:10000,
               features:{
                   ram:'32Mb',
                   camera:16,
                   screensize:5.0
               },
               accessaries:['charger','earphones']
            }


]
mobile.forEach(element => {
    

for(const prop in mobile){
    var mob=mobile[prop];
    if(mob instanceof Array){
        for(const i in mob)
        console.log('accessaries:'+mob[i])
    }else if(typeof mob=='object'){
        for(const key in mob){
            console.log(key+':'+mob[key]);
        }
    }else if(typeof stud=='function'){
         stud();
        }else
        console.log(stud);
    }
});