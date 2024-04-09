let counters = {
  man: 0,
  woman: 0,
  child: 0,
  drinking: 0,
};

function manipulatePersonCounter(person, operation) {
  if (operation === "subtract") {
    counters[person]--;
  } else if (operation === "add") {
    counters[person]++;
  }
}
