
let money = prompt("Ваш бюджет на месяц?", ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};

let costs1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	costsMoney1 = prompt("Во сколько обойдется?", ''),
	costs2 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	costsMoney2 = prompt("Во сколько обойдется?", '');

appData.expenses.costs1 = costsMoney1;
appData.expenses.costs2 = costsMoney2;

alert(appData.budget / 30);

//console.log(appData.expenses.costs1);
//console.log(appData.expenses.costs2);