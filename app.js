// console.log('connenting');

// 01 eita ke literal object bole
// const student={name: 'rubel mia', job:'web-devolper'};


// 02 eita ke constructor object bole
// const person= new Object();


// const human=Object.create(student);

// console.log(human.name);


class pepole{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }
}

const pepol=new pepole('piyas', 22);
console.log(pepol);


class studentDetiles {
    constructor(age, height, id, subject, year) {
        this.age = age;
        this.height = height;
        this.id = id;
        this.subject = subject;
        this.year = year;
    }
};

const student=new studentDetiles(23,4.6,78,'bangla',2020);
console.log(student);




class myprofashion{
    constructor(name,height,habbit,job,subject,collage){
        this.name=name;
        this.height=height;
        this.habbit=habbit;
        this.job=job;
        this.subject=subject;
        this.collage=collage;
    }
};


const hello=new myprofashion('rubel mia',5.6, 'web-devolpment','no-job', 'english', 'mymenshing');
console.log(hello);






const bigObject={
    name:'asmot ali',
    job:'no-job',
    student:{
        id:34,
        roll:03,
    },
    place:'jamalpur',
    house:'malancho',
    salary:5000,
    treatde: function(expens){
        this.salary=this.salary-expens;
        return this.salary;
    }
}

console.log(bigObject.name);
const salaryRemining=bigObject.treatde(2000);
// console.log(salaryRemining);




const bottol ={name:'yellow', color:'red',size:3.5, price:250,};
for(const pop in bottol){
    console.log(pop);
}

const keys=Object.keys(bottol);//ei keys dara object sob name dora jai
// console.log(keys);
const value=Object.values(bottol);//values dara object sob value ke pawa jai
// console.log(value);


const allObject=Object.entries(bottol);//entries dara object name and value ke ekta ekta kore array return kore
// console.log(allObject);
delete bottol.color;// eita dara kuno object er property (name and value) duitai delete kore dey
// console.log(bottol);



const bottol1 ={name:'yellow', color:'red',size:3.5, price:250,};
for(const pop in bottol1){ // object er upor for loop use korar jonno (for in use korte hoi)
    console.log(pop); // eita diya shudu object name ke pawa jai
    console.log(bottol1[pop]); // eita diya object er value pawa jai
    console.log(pop, bottol1[pop]);//abr duita ek shatei access kora jai
}



// quiz of moduil
const obj ={a:1, b:7, c:3, length:2};
console.log(Object.keys(obj).length);

const obj1= {module: 35, video:2}; const obj2= {module: 35, video:2};
console.log(obj1 === obj2);


const getGirlFriend= (name = "chokina")=>"name"; 
console.log(getGirlFriend()); 