// CODE here for your Lambda Classes



// * First we need a Person class. This will be our `base-class`
// * Person receives `name` `age` `location` all as props
// * Person receives `speak` as a method.
// * This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props
// const fred = new Instructor({
//     name: 'Fred',
//     location: 'Bedrock',
//     age: 37,
//     favLanguage: 'JavaScript',
//     specialty: 'Front-end',
//     catchPhrase: `Don't forget the homies`
//   });
class Person{
  constructor(attributes){
    this.name = attributes.name,
    this.location=attributes.location,
    this.age=attributes.age
  }
  
   speak(){
     return `Hello my name is ${this.name} , I am from ${this.location}.`;
   }
  }

  class Instructor extends Person{
      constructor(instructorAttributes){
          super(instructorAttributes);
          this.specialty=instructorAttributes.specialty; 
          this.favLanguage=instructorAttributes.favLanguage;
          this.catchPhrase=instructorAttributes.catchPhrase;
      }
      demo(subject){
        return `Today we are learning about ${subject}..`;
      }
      grade(subject){
          return `${this.name} receives a perfect score on ${subject}';`
      }
  }
// * Now that we have a Person as our base class, we'll build our Instructor class.
// * Instructor uses the same attributes that have been set up by Person
// * Instructor has the following unique props:
//   * `specialty` what the Instructor is good at i.e. 'redux'
//   * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
//   * `catchPhrase` i.e. `Don't forget the homies`
// * Instructor has the following methods:
//   * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
//   * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'
class Student extends Person{
    constructor(stuentAttributes){
        super(stuentAttributes);
     this.previousBackground=stuentAttributes.previousBackground;
     this.className=stuentAttributes.className;
     this.favSubjects=stuentAttributes.favSubjects;
    }
    listsSubjects(){
        return this.favSubjects;
    }
    PRAssignment(subject){
      return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject){
         return `${this.name} has begun sprint challenge on ${subject}.`
    }
}


// * Now we need some students!
// * Student uses the same attributes that have been set up by Person
// * Student has the following unique props:
//   * `previousBackground` i.e. what the Student used to do before Lambda School
//   * `className` i.e. CS132
//   * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
// * Student has the following methods:
//   * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
//   * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
//   * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`

class ProjectManagers extends Instructor{
    constructor(pmAttributes){
        super(pmAttributes);
        this.gradClassName=pmAttributes.gradClassName;
        this.favInstructor=pmAttributes.favInstructor;

    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
    }
    debugsCode(student,subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}


// * Now that we have instructors and students, we'd be nowhere without our PM's
// * ProjectManagers are extensions of Instructors
// * ProjectManagers have the following unique props:
//   * `gradClassName`: i.e. CS1
//   * `favInstructor`: i.e. Sean
// * ProjectManagers have the following Methods:
//   * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
//   * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`

const fredrik = new Person({
    name: 'Fredrik',
    location: 'Bedrock',
    age: 34,
  });
  const Ben = new Person({
    name: 'BEN',
    location: 'NY',
    age: 32,
  });
  const Bob = new Person({
    name: 'Bob',
    location: 'Seattle',
    age: 47,
  });
  const jone = new ProjectManagers({
    name: 'jone',
    location: 'belivue',
    age: 36,
    favLanguage: 'JavaScript and Redux',
    specialty: 'UX',
    catchPhrase: `Don't forget coding..`
  });
  const chris = new Instructor({
    name: 'chris',
    location: 'California',
    age: 28,
    favLanguage: 'CSS',
    specialty: 'Front-end',
    catchPhrase: `Coding is a game..`
  });
  const merry = new Student({
    name: 'merry',
    location: 'Canada',
    age: 28,
    previousBackground:'used to work on a football player assistant.',
    className:'CS144',
    favSubjects:['Html', 'CSS', 'JavaScript']

  });
  const maria = new Student({
    name: 'maria',
    location: 'California',
    age: 28,
    previousBackground:'used to work on a cafiteria..',
    className:'CS132',
    favSubjects:['Html', 'CSS', 'JavaScript','C#','Phyton']
  });
  const Alex= new ProjectManagers({
   gradClassName:'CS1',
   favInstructor:"jone"
  });
  const Alm= new ProjectManagers({
    gradClassName:'CS3',
    favInstructor:"chris"
   });

  console.log(Ben.speak());
  console.log(Bob.speak());
  console.log(jone.grade('tom','javascript'));
  console.log(chris.speak());
  console.log(fredrik.speak());
  console.log(Ben.speak());
  console.log(Bob.speak());
  console.log(jone.standUp('#web22'));
  console.log(jone.debugsCode(maria,'javascript'));
  console.log(Alex.standUp('#help_web23'));
 console.log(Alex.demo("Jscript"));
  console.log(Alm.grade('tom','javascript'));
console.log(merry.listsSubjects());
console.log(merry.PRAssignment('UserInterface'));
console.log(merry.sprintChallenge('Userinterface'));
console.log(maria.listsSubjects());
console.log(maria.PRAssignment('UserInterface'));
console.log(maria.sprintChallenge('Userinterface'));

