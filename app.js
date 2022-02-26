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