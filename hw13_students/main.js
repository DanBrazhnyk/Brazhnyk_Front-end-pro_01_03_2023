class Student{
    constructor(name,surname,dateOfBirth){
        this.name = name,
        this.surname = surname,
        this.dateOfBirth = dateOfBirth,
        this.marks = [],
        this.activities = []
    }
    getAge(){
        const currentDate = new Date()
        return this.name +' '+ this.surname+' is '+( currentDate.getFullYear() - this.dateOfBirth) +' years old.';
    }
    getAverageMark(){
    const filterPresents = this.marks.filter(item=>item!==null)
    const sum = filterPresents.reduce((initialValue,curr) => initialValue + curr ,0)
    return  sum/filterPresents.length
    }
    getMarks(){
        return this.marks
    }
    getAcivity(){
        return this.activities
    }
    getCountAcivity(){
        let count = 0;
        this.activities.forEach(item =>{
            if(item === true){
            count++
        }})
        return count
    }
    present(mark){
        if(this.marks.length < 25 && this.activities.length < 25){
        this.marks.push(mark) 
        this.activities.push(true);}
        return this;
    }
    absent(){
        if(this.marks.length < 25 && this.activities.length < 25){
        this.marks.push(null) 
        this.activities.push(false);}
        return this;
    }
    summary(){
        const averageAcivity = this.getCountAcivity()/this.activities.length
    if(averageAcivity<0.9 && this.getAverageMark()<90)
    {
        return 'Редиска!';
    }
    if(averageAcivity<0.9 || this.getAverageMark()<90)
    {
        return 'Добре, але можна краще.';
    }   
    if(averageAcivity>=0.9 && this.getAverageMark()>=90)
    {
        return'Молодець!';
    }
}
}

const student = new Student('Jakob','Brighton',2000)
console.log(student.getAge())
student.present(91).present(82).present(93).present(100).present(83).present(83).present(83).present(100).present(100).present(83).present(83).present(83).present(100).present(83).present(83).present(83).present(100).present(96).present(100).present(100).present(96).present(100).present(100).present(86).present(100)
console.log(student.getMarks())
console.log(student.getCountAcivity())
console.log(student.getAverageMark())
console.log(student.summary())
console.log(student.getAcivity())
console.log('-----------------------------------------')

const student2 = new Student('Jorge','Leao',2002)
console.log(student2.getAge())
student2.present(99).present(72).absent().present(93).present(100).absent().present(88).present(77).present(89).absent().present(100).present(92).absent()
console.log(student2.getMarks())
console.log(student2.getCountAcivity())
console.log(student2.getAverageMark())
console.log(student2.summary())
console.log(student2.getAcivity())
console.log('-----------------------------------------')

const student3 = new Student('Ben','Ten',1998)
student3.present(94).present(85).present(73).absent().present(83).present(83).present(83).absent().absent().present(83).present(83).present(83).absent().present(83).present(83).present(83).absent().present(96).present(100).absent().present(96).absent().present(100).present(86).absent()
console.log(student3.getAge())
console.log(student3.getMarks())
console.log(student3.getCountAcivity())
console.log(student3.getAverageMark())
console.log(student3.summary())
console.log(student3.getAcivity())