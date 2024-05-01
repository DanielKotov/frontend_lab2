class User {
    _tel = ''
    #age = 0

    constructor(user_name) {
        this.name = user_name
    }

    hello() {
        console.log("Hi! My name is " + this.name + "I' am " + this.age + "years old")
    }

    set tel(user_tel) {
        const phoneRegex = /^\+7\d{10}$/
        if (phoneRegex.test(user_tel)) {
            this._tel = user_tel
        }
        else {
            alert("Указан некорректный номер")
        }
    }

    set age(user_age) {
        if (user_age >= 1 && user_age <= 100) {
            this.#age = user_age
        }
        else {
            alert("Указан некорректный возраст")
        }
    }

    get tel() {
        return this._tel
    }

    get age() {
        return this.#age
    }
}

class Student extends User{
    #knowledge = 0;
    constructor(name) {
        super(name);
    }

    learn() {
        this.#knowledge++
    }

    hello() {
        console.log(`Hi! My name is ${this.name}. And I am ${this.age} years old. And I am a student!`)
    }

    get knowledge() {
        return this.#knowledge
    }

}

function User2(user_name, user_age) {
    this.name = user_name
    this.age = user_age

    this.hello = function() {
        console.log("Hi! My names is" + this.name + "I' am" + this.age + "years old")
    } 
}

Array.prototype.reverse = function () {
    return [...this, ...this]
};

function testAgeSetter() {
    user = new User('Daniel')
    user.age = 20202
    console.log(user.hello())
    user.age = 30
    console.log(user.hello())
  }
  
  function testTelSetter() {
    user = new User('Daniel')
    user.tel = '+123123'
    console.log(user.tel)
    user.tel = '+71234567890'
    console.log(user.tel)
  }
  
  function testStudent() {
    student = new Student('Danya')
    student.learn()
    console.log(student.knowledge)
    student.learn()
    console.log(student.knowledge)
  }