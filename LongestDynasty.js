console.log("Question 2");

const dynastyResult = document.getElementById("dynastyResults");

let dynastyReign = [
  { "San Dynasty": "MXLI" } /* 1041 */,
  { "Viloria Dynasty": "MCCCIIII" } /* 1304 */,
  { "Tan Dynasty": "MCCCXCVIII" } /*  1398*/,
  { "Bon Dynasty": "MCDXLV" } /* 1445 */,
  { "Maiko Dynasty": "MDCLXIV" } /*  1664*/,
  { "Paul Dynasty": "MCMXLIX" } /*1949  */,
  /* { "Andre Dynasty": "MMMXICX" } /*3119*/
];

let romanToInteger = [
  (I = 1),
  (V = 5),
  (X = 10),
  (L = 50),
  (C = 100),
  (D = 500),
  (M = 1000),
];

let dynastyValues = dynastyReign.map(Object.values);

let mapThough = Array.prototype.concat.apply([], dynastyValues);

function convertYear(evaledSingleReign) {
  let dynastyReignLength = [];
  let year = evaledSingleReign[0];
  while (evaledSingleReign.length > 0) {
    if (evaledSingleReign[0] > evaledSingleReign[1]) {
      year -= evaledSingleReign[1];
      evaledSingleReign.shift();
      dynastyReignLength.push(year);
    } else if (evaledSingleReign[0] < evaledSingleReign[1]) {
      year += evaledSingleReign[1];
      evaledSingleReign.shift();
      dynastyReignLength.push(year);
    } else if ((evaledSingleReign[0] = evaledSingleReign[1])) {
      year += evaledSingleReign[0];
      evaledSingleReign.shift();
      dynastyReignLength.push(year);
    } else {
      evaledSingleReign.shift();
    }
  }

  return year;
}

let arraySplitReverse = mapThough.map((single) => {
  return single.split("").reverse();
});

let arrayValues = arraySplitReverse.map((each) => {
  return each.map(eval);
});

function longestdynasty() {
  let listOfYears = []; //an array of year decimals
  let arrayOfYears = arrayValues.map((singleYear) => {
    return convertYear(singleYear);
  });

  listOfYears.push(arrayOfYears);

  let yearsOrder = listOfYears[0];
  yearsOrder.unshift(1000);
  let dummy = [];

  let difference = "";
  while (yearsOrder.length > 1) {
    difference = Math.abs(yearsOrder[0] - yearsOrder[1]);

    dummy.push(difference);

    yearsOrder.shift();
  }

  let dynastyKeys = dynastyReign.map(Object.keys);
  let dynastyKeysArray = Array.prototype.concat.apply([], dynastyKeys);

  let dynastyDecimalValues = dummy;

  const merged = dynastyKeysArray.reduce(
    (obj, key, index) => ({ ...obj, [key]: dynastyDecimalValues[index] }),
    {}
  );
  console.log(merged);
  let longestReignYear = Math.max(...dynastyDecimalValues);
  let longestDynasty = Object.keys(merged).find(
    (key) => merged[key] === longestReignYear
  );
  console.log(longestDynasty);
  dynastyResult.innerText = longestDynasty;
}

longestdynasty();
