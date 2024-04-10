let counters = JSON.parse(localStorage.getItem('counters')) || {
  man: 0,
  woman: 0,
  child: 0,
  drinking: 0,
};

function updateLocalStorage() {
  localStorage.setItem('counters', JSON.stringify(counters));
}

let userData = {
  name: '',
  email: '',
  cep: '',
  check: false,
};

function counterManager(person, operation) {
  const counterDisplay = document.querySelector(`#${person}Count`);

  if (operation === 'subtract' && counters[person] > 0) {
    counters[person]--;
  } else if (operation === 'add') {
    counters[person]++;
  }

  counterDisplay.innerText = counters[person];
  updateLocalStorage()
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

document.addEventListener('DOMContentLoaded', function () {
  if (window.location.pathname === '/app/src/result/result.html') {
    showCounters();
  }
});
