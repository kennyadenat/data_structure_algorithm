exports.nestedObject = function () {
  let FCC_User = {
    username: 'awesome_coder',
    followers: 572,
    points: 1744,
    completedProjects: 51
  }

  let userDate = FCC_User['completedProjects'];
  // console.log(userDate);

  let food = {
    apples: 25,
    oranges: 32,
    plums: 28
  }

  food['bananas'] = 13;
  food['grapes'] = 35;
  food['strawberries'] = 27;



  let userActivity = {
    id: 23,
    date: 'March 10 2018',
    data: {
      totalUsers: 51,
      online: 42
    }
  }

  // userActivity.data.online = 45;
  userActivity['data']['online'] = 67;

  console.log(userActivity);

  class NameModel {
    constructor(firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
    }
    sayList() {
      console.log(this.firstname);
    }
  }
  const myNames = new NameModel(['tolulope', 'adelugba', 'olamide'], 'oluwaseun');
  myNames.sayList();

  class AgeModels extends NameModel {
    constructor(firstname, lastname, age, address) {
      super(firstname, lastname);
      this.age = age;
      this.address = address;
    }
  }
}