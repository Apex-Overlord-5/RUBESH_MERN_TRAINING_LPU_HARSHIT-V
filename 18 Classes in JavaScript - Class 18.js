// Rubesh Raman
// 12115752
// Class 18 Assignment
// LPU
// javascript Object 
let rubeshInfo = {
  name: "Rubesh",
  email: "rubesh@example.com",
  age: 21,
  count: 0,
  status: true,
  hobbies: ["Web Development", "Reading", "Hiking"],
  login: function () {
    console.log("Login", this.name);
    return this; // Returning 'this' for method chaining
  },
  logout: () => {
    console.log("Logout", this.name);
    // Arrow functions don't have their own 'this', using outer 'this'
  },
  getName() {
    return this.name;
  },
  updateCount() {
    this.count++;
    console.log("Updated Count:", this.count);
    return this; // Returning 'this' for method chaining
  },
  test() {
    console.log("Testing method");
    return this; // Returning 'this' for method chaining
  },
};

// Calling methods and testing method chaining
rubeshInfo.test().login().updateCount().logout();
console.log("Outside", this); // 'this' here refers to the global object (if in a browser environment)

// ES6 Class keyword
class PersonalInfo {
  constructor(name = 'Rubesh', email = 'rubesh@example.com', count = 0) {
    this.name = name;
    this.email = email;
    this.count = count;
  }

  login() {
    console.log(this.name, 'has logged in!');
    return this; // Returning 'this' for method chaining
  }

  logout() {
    console.log(this.name, 'has logged out!');
    return this; // Returning 'this' for method chaining
  }
}

// Creating instances of the PersonalInfo class
let personInfo1 = new PersonalInfo('Rubesh', 'rubesh@example.com');
let personInfo2 = new PersonalInfo('John', 'john@example.com');
let personInfo3 = new PersonalInfo('Alex', 'Alex@example.com');

// Calling methods and testing method chaining with class instances
personInfo1.login().logout();
personInfo2.login().logout();
console.log(typeof personInfo3);

// Number, String, Object instances
let rollNo = new Number(15);
console.log(typeof rollNo, typeof 15);

let nm = new String('Rubesh');
console.log(nm.toUpperCase());

let obj = new Object({ name: 'Rubesh' });
console.log(obj);

// Objects and methods
let rubeshProfile = {
  name: 'Rubesh',
  email: 'rubesh@example.com',
  count: 0,
  age: 21,
  status: true, 
  interests: ['Web Development', 'Reading', 'Hiking'], // Array
  login() {
      console.log(this.name, 'has logged in');
      return this; // Returning 'this' for method chaining
  },
  logout() {
      console.log('Logout', this.login());
      return this; // Returning 'this' for method chaining
  },
  updateLogin() {
      this.count++;
      console.log('Updated Login Count:', this.count);
      return this; // Returning 'this' for method chaining
  },
};

// Testing method chaining with object methods
rubeshProfile.login().updateLogin().updateLogin().logout();
console.log(rubeshProfile.count);