export default function signUpUser(firstName, lastName) {
  return Promise.resolve({
    firstName,
    lastName
  })
}

// but why promise.resolve? why not 'new promise((resolve, reject) => {resolve(...)})?
// In JavaScript, you can create a Promise object without using the new keyword directly,
// thanks to static methods like Promise.resolve() and Promise.reject().
// The Promise class provides these static methods to simplify the process of creating
// and handling Promises in certain scenarios:

// 1. Promise.resolve(value): Creates a new Promise that is resolved with the provided value.

// 2. Promise.reject(reason): Creates a new Promise that is rejected with the provided reason.
// The methods Promise.resolve() and Promise.reject() are called static methods because they
// are attached to the Promise class itself, rather than to instances of the Promise. As
// static methods, they are directly accessed from the class and don't require creating an
// instance of the class with the new keyword.
