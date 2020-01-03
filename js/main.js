let money, time;

function start() {
	money = +prompt("Ваш бюджет на месяц?", '');
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

	while (isNaN(money) || money == "" || money == null) {
		money = +prompt("Ваш бюджет на месяц?", '');
	}
}
start();

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: true,
	chooseExpenses: function () {
		for (let i = 0; i < 2; i++) {
			let
				a = prompt("Введите обязательную статью расходов в этом месяце", ''),
				b = prompt("Во сколько обойдется?", '');

			if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != "" && b != "" && a.length < 50) {
				console.log("done");
				appData.expenses[a] = b;
			} else {
				i = i - 1;
			}
		}
	},
	chooseOptExpenses: function () {
		for (let i = 0; i < 3; i++) {
			let a = prompt("Введите необязательную статью расходов в этом месяце", '');
			appData.optionalExpenses[i] = a;
		}
	},
	detectDayBudget: function () {
		appData.moneyPerDay = (appData.budget / 30).toFixed();
		alert("Ежедневный бюджет:" + appData.moneyPerDay);
	},
	detectLevel: function () {
		if (appData.moneyPerDay < 100) {
			console.log("минимальный");
		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
			console.log("средний");
		} else if (appData.moneyPerDay > 2000) {
			console.log("высокий");
		} else {
			console.log("Ошибка");
		}
	},
	checkSavings: function () {
		if (appData.savings == true) {
			let save = +prompt("Сколько денег на депозите"),
				percent = +prompt("Под какой процент?");
			appData.monthIncome = save / 100 / 12 * percent;
			alert("доход в месяц с депозита:" + appData.monthIncome);
		}
	},
	chooseIncome: function () {
		for (let i = 0; i < 1; i++) {
			let items = prompt('Что принесет дополнительный доход? (перечислите через запятую)', "");
			if ((typeof (items)) === 'string' && (typeof (items)) != null && items != "") {
				appData.income = items.split(', ');
			} else {
				i--;
			}
		}
		appData.income.push(prompt('Может что-то еще?'));
		appData.income.sort();

		appData.income.forEach (function (itemmassive, i) {
			alert("Способы доп. заработка: " + (i+1) + " - " + itemmassive);
		});
	},
	/*showIncome: function () {
		appData.income.forEach(function (item) {
			alert("Способы доп. заработка: " + (i+1) + item);
		});
	},*/
	showAllappdata: function(){
		for (var prop in appData) {
			console.log("Наша программа включает в себя данные: " + prop + " = " + appData[prop]);
		  }
	}
	

};
