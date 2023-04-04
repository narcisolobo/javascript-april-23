# OOP in JavaScript

JavaScript is a prototype-based language — an object's behaviors are specified by its own properties and its prototype's properties. However, with the addition of classes in ES6, the creation of hierarchies of objects and the inheritance of properties and their values are much more in line with other object-oriented languages such as Java.

In many other languages, classes, or constructors, are clearly distinguished from objects, or instances. In JavaScript, classes are mainly an abstraction over the existing prototypical inheritance mechanism. However, classes allow us to simulate an object-oriented approach.

## JavaScript Classes

Let's take a look at JavaScript classes.

- Classes create objects through the `new` operator.
- Each object has some properties (data or method) added by the class.
- The class stores some properties (data or method) itself, which are usually used to interact with instances.

These correspond to the three key features of classes:

- Constructor method
- Instance methods and instance fields
- Static methods and static fields.

*We won't be utilizing static methods and fields in this stack, but we should know that it is possible.*

### Declaring a class
Classes are usually created with class declarations. We can think of classes as "blueprints". Using a class, we can create or *instantiate* objects that belong to that class using this blueprint we define.

```js
class MyClass {
  // class body...
}
```

### Constructor
Perhaps the most important job of a class is to act as a "factory" for objects.

```js
class Character {
  constructor(name, race, strength = 10) {
    // Assign the name and race values as properties of "this".
    this.name = name;
    this.race = race;
    this.strength = strength;
  }
}
```

Notice we are grouping related data together - `name` `race`, and `strength`. This grouping of data in a class is known as *encapsulation* - one of the Four Pillars of OOP.

We are also providing a default value for the `strength` instance field. If a value is provided, the constructor will use that value. Otherwise, a value of 10 will be used.

### Instantiating Objects

Using the `new` operator, we can instantiate objects which belong to a class. 

```js
const fuzzball = new Character('Fuzzball', 'Khajit');
console.log(fuzzball.name);
// Fuzzball
```

### Defining Instance Methods

Inside of our classes, we can also define instance methods. Instance methods provide functionality to instances of the class.

```js
class Character {
  constructor(name, race, strength = 10) {
    this.name = name;
    this.race = race;
    this.strength = strength;
  }

  showStats() {
    console.log(this.name, this.race, this.strength);
  }

  attack() {
    console.log(`${this.name} is attacking!`);
  }
}
```

We can now call these instance methods on instances of the class using dot notation.

```js
fuzzball.showStats();
// Fuzzball Khajit 10
```

Users of this class do not need to know what's going on behind the scenes when the showStats method is invoked. All they need to know is how to use it. This technique of "hiding" what goes on behind the scenes is called *abstraction* - another one of the Four Pillars of OOP.

### Extending a Class

JavaScript allows us to extend a class as well. This is called *inheritance* - another Pillar of OOP. To inherit from another class, use the `extends` keyword.

Inheritance means that one object can "borrow" another object's behaviors, while overriding or enhancing certain parts with its own logic.

```js
class Barbarian extends Character {
  // class body
}
```

Inside the constructor for this subclass, we can call on the parent constructor by calling `super()`.

```js
class Barbarian extends Character {
  constructor(name, race, strength = 12) {
    super(name, race, strength);
  }
}
```

Notice that our `Barbarian` class has a higher default strength than the base `Character` class.

Instantiating a `Barbarian` is done using the `new` keyword - just like before.

```js
const conan = new Barbarian('Conan', 'Human');
console.log(conan.strength);
// 12
```

### Polymorphism

Finally, we come to our final Pillar of OOP - *polymorphism*. Polymorphism literally means *many forms*. It allows us to implement a parent method differently in a child subclass.

```js
class Barbarian extends Character {
  constructor(name, race, strength = 12) {
    super(name, race, strength);
  }

  attack() {
    console.log(`Barbarian ${this.name} is attacking!`);
  }
}
```

Notice we are using the same method name as the one we are overriding in the parent class. Let's see what happens when we call this method.

```js
conan.attack();
// Barbarian Conan is attacking!
```

We are implementing a parent method, the `attack()` method, differently here in our `Barbarian` subclass.
