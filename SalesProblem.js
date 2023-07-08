console.log("Question 1");

const topResult = document.getElementById("topResults");
const bottomResults = document.getElementById("bottomResults");
const nearZeroResults = document.getElementById("nearZeroResults");

let productProfitObject = {
  productA: -75,
  productB: -70,
  productC: 93,
  productD: 5,
  productE: -88,
  productF: 29,
  /*   productG: -5, */
};

let productProfitArray = Object.values(productProfitObject);

if (!(productProfitArray.length > 0)) {
  console.log("No Data");
}

//topProduct function
function topProduct() {
  let highestSales = Math.max(...productProfitArray);
  const topProduct = Object.keys(productProfitObject).find(
    (key) => productProfitObject[key] === highestSales
  );
  topResult.innerText = topProduct;
  if (!(productProfitArray.length > 0)) {
    topResult.innerText = "No Data";
  }
  console.log(topProduct);
}
//bottomProduct function
function bottomProduct() {
  let lowestSales = Math.min(...productProfitArray);
  const bottomProduct = Object.keys(productProfitObject).find(
    (key) => productProfitObject[key] === lowestSales
  );
  bottomResults.innerText = bottomProduct;
  if (!(productProfitArray.length > 0)) {
    bottomResults.innerText = "No Data";
  }
  console.log(bottomProduct);
}
//Near Zero Profit function
function zeroProfitProduct() {
  let nearZeroAbs = productProfitArray.map(Math.abs);
  let nearZero = Math.min(...nearZeroAbs);
  const zeroProfitProduct = Object.keys(productProfitObject).find(
    (key) => productProfitObject[key] === nearZero
  );
  nearZeroResults.innerText = zeroProfitProduct;
  if (!(productProfitArray.length > 0)) {
    nearZeroResults.innerText = "No Data";
  }

  console.log(zeroProfitProduct);
}

topProduct();
bottomProduct();
zeroProfitProduct();

//Finished in 2 hours and 16 minutes
