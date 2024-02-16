const clients = [
	{
    name: "Moore Hensley",
    gender: "male",
    balance: 2811
  },
  {
    name: "Sharlene Bush",
    gender: "female",
    balance: 3821
  },
  {
    name: "Ross Vazquez",
    gender: "male",
    balance: 3793
  },
  {
    name: "Elma Head",
    gender: "female",
    balance: 2278
  },
  {
    name: "Carey Barr",
    gender: "male",
    balance: 3951
  },
  {
    name: "Blackburn Dotson",
    gender: "male",
    balance: 1498
  },
  {
    name: "Sheree Anthony",
    gender: "female",
    balance: 2764
  }
];

const getTotalBalanceByGender = (users, gender) => { // стрілочна функція з двома параметрами
    return users // використання ланцюжка медів
        .filter(user => user.gender === gender) // фільтрація за значенням gender
        .reduce((total, user) => total + user.balance, 0); // накопичення всіх значень balance в відфільтрованому масиві обєктів за gender значенням
};

console.log(getTotalBalanceByGender(clients, "male")); // 12053

console.log(getTotalBalanceByGender(clients, "female")); // 8863