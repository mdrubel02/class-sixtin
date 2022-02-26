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


const salaryRemining=bigObject.treatde(2000);
console.log(salaryRemining);