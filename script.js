let counters = JSON.parse(localStorage.getItem('counters')) || {
  man: parseInt(localStorage.getItem('manCount')) || 0,
  woman: parseInt(localStorage.getItem('womanCount')) || 0,
  child: parseInt(localStorage.getItem('childCount')) || 0,
  drinking: parseInt(localStorage.getItem('drinkingCount')) || 0,
};

let userData = {
  name: '',
  email: '',
  cep: '',
  check: true,
};

const peopleAmount = counters.man + counters.woman + counters.child;

const bbqItemsCalculation = {
  peopleAmount: peopleAmount,
  meatAmount: counters.man * 0.4 + counters.woman * 0.32 + counters.child * 0.2,
  garlicBreadAmount: counters.man * 2 + counters.woman * 2 + counters.child * 1,
  sodaAmount: Math.max(0, Math.floor(peopleAmount / 5)),
  waterAmount: Math.max(0, Math.floor(peopleAmount / 5)),
  beerAmount: counters.drinking * 3,
  coalAmount: peopleAmount,
  saltAmount: peopleAmount * 0.04,
  bbqIceAmount: Math.max(2.5, Math.floor(peopleAmount / 10) * 5),
};

document.addEventListener('DOMContentLoaded', function () {
  if (window.location.pathname === '/index.html') {
    RecoverUserData();
  } else if (window.location.pathname === '/app/src/result/result.html') {
    showCounters();
  }
});

document.addEventListener('DOMContentLoaded', function () {
  if (window.location.pathname === '/app/src/result/result.html') {
    resultItemSetter('meatAmount', bbqItemsCalculation.meatAmount.toFixed(2) + ' kg');
    resultItemSetter(
      'garlicBreadAmount',
      bbqItemsCalculation.garlicBreadAmount + ' unidades'
    );
    resultItemSetter(
      'sodaAmount',
      bbqItemsCalculation.sodaAmount+ ' garrafas de 2L'
    );
    resultItemSetter(
      'waterAmount',
      bbqItemsCalculation.waterAmount + ' garrafas de 1L'
    );
    resultItemSetter(
      'beerAmount',
      bbqItemsCalculation.beerAmount + ' garrafas de 600mL'
    );
    resultItemSetter('coalAmount', bbqItemsCalculation.coalAmount + ' kg');
    resultItemSetter('saltAmount', bbqItemsCalculation.saltAmount.toFixed(2) + ' kg');
    resultItemSetter('bbqIceAmount', bbqItemsCalculation.waterAmount + ' kg');
  }
});

document.querySelector('#signIn').addEventListener('submit', function (event) {
  event.preventDefault();
  signIn();
});

function updateLocalStorage() {
  localStorage.setItem(`counters`, JSON.stringify(counters));
}

function counterManager(person, operation) {
  const counterDisplay = document.querySelector(`#${person}Count`);

  if (operation === 'subtract' && counters[person] > 0) {
    counters[person]--;
  } else if (operation === 'add') {
    counters[person]++;
  }

  counterDisplay.innerText = counters[person];
  updateLocalStorage();
}

function RecoverUserData() {
  const manDisplay = document.querySelector('#manCount');
  const womanDisplay = document.querySelector('#womanCount');
  const childDisplay = document.querySelector('#childCount');
  const drinkingDisplay = document.querySelector('#drinkingCount');

  manDisplay.innerText = counters.man;
  womanDisplay.innerText = counters.woman;
  childDisplay.innerText = counters.child;
  drinkingDisplay.innerText = counters.drinking;
}

function storeUserData() {
  const nameInput = document.querySelector('#name');
  const emailInput = document.querySelector('#email');
  const cepInput = document.querySelector('#cep');
  const checkInput = document.querySelector('#check');

  userData['name'] = nameInput.value;
  userData['email'] = emailInput.value;
  userData['cep'] = cepInput.value;
  userData['check'] = checkInput.checked;
}

function showCounters() {
  const res = document.querySelector('#showCounters');
  const sum = document.querySelector('#sum');

  res.innerHTML = `
        <p> ${counters.man} homem</p>
        <p> ${counters.woman} mulheres</p>
        <p> ${counters.child} crianças</p>
        `;
  countSum = counters.man + counters.woman + counters.child;

  sum.innerHTML = `${countSum} convidados`;
}

function signIn() {
  window.alert('Usuário cadastrado com sucesso!');
  window.location.href = '/app/src/result/result.html';
}

function resultItemSetter(itemId, value) {
  const bbqItem = document.getElementById(itemId);
  bbqItem.innerText = value;
}

function newBBQ() {
  counters.man = 0;
  counters.woman = 0;
  counters.child = 0;
  counters.drinking = 0;
  userData.name = '';
  userData.email = '';
  userData.cep = '';
  updateLocalStorage();

  document.location.href = '/index.html'

}