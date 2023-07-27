/** *** what is abstract class? *******
Abstract classes are classes that cannot be instantiated directly and
are meant to be subclassed. They often contain abstract methods
(methods without an implementation) that must be overridden in the subclasses.
For example, in the abstract class Shape, you may have an abstract method
calculateArea() that must be implemented in concrete subclasses
like Circle and Rectangle.
*****/

export default class Building {
  constructor (sqft) {
    if (
      new.target !== Building &&
      typeof this.evacuationWarningMessage !== 'function'
    ) {
      throw new Error(
        'Class extending Building must override evacuationWarningMessage'
      );
    }
    this._sqft = sqft;
  }

  get sqft () {
    return this._sqft;
  }
}

/** *** why this condition "typeof this.evacuationWarningMessage !== 'function'"
If a method is not overridden in the subclass, and we examine the subclass
directly (not considering the superclass), the method will not exist in the
subclass, and therefore, it will not be considered a function in the
context of the subclass.

When a subclass extends a superclass, it inherits all the properties and methods
from the superclass. If the subclass does not provide its own implementation of
a method that is already defined in the superclass, it will automatically inherit
the method from the superclass.

However, if the subclass does not provide its own implementation of the method(in
other word if the subclass does not overridde the method),
the method will not be present as a 'property' in the instance of the subclass.
As a result, when we examine the subclass directly, the method will not be
considered a function in the context of the subclass.

So, to summarize:

1. When a subclass inherits a method from a superclass, the method is part of
   the prototype chain, and the subclass can access and use the method.
2. If the subclass provides its own implementation of the method
   (i.e., it overrides the method), the overridden method becomes a direct
   property of the subclass's instance.
3. If the subclass does not provide its own implementation of the method
   (i.e., it does not override the method), the method is still accessible
   through the prototype chain, but it is not a direct property of the
   subclass's instance.
****/

/*****
 In JavaScript, when you create an object using a class constructor,
 the constructor property of that object points to the constructor
 function that was used to create the object.
 ****/


/**** what is the use of 'Symbol.toStringTag' in javascripit?
 The Symbol.toStringTag is a well-known symbol in JavaScript that is used
 to customize the string representation of an object. By defining a getter
 for this property, we can control what string value is returned when the
 object is converted to a string.

 It is used in conjunction with the Object.prototype.toString() method, which
 is automatically called when you try to convert an object to a string (e.g., using console.log()).

 By default, the Object.prototype.toString() method returns a string in the format
 [object Object], which doesn't provide meaningful information about the object.

 By defining a getter for Symbol.toStringTag in a class, you can customize the
 string representation of instances of that class when they are converted to a string.
 ****/
