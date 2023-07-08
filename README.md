**Instructions for the exam**

**On Question 2 - The Sales Problem:**

For this exercise, you will have to go through a sales profit data of multiple products and return the product with:

Highest sales profit

Lowest sales profit

Profit nearest to 0

Implement the functions:

topProduct() to return the product name having the highest sales profit

bottomProduct() to return the product name having the lowest sales profit

zeroProfitProduct() to return the product name having a sales profit closest to 0 in a given array of key-value pair productProfitArray

Input & Conditions:

If productProfitArray is empty returnn "No Data"

If two products' sales profit are as close to 0, consider the positive profit as the one closest to zero (eg. Product A: -100, Product B: 100, return Product B)

**On Question 2 - The Longest Dynasty Problem**

Given a chronological list of dynasties and their respective end of reign in roman numerals (MCMLXXIX), identify the longest reigning dynasty.

Implement the functions:

longestDynasty() to return the name of the dynasty which reigns the longest in an array of key-value pair dynastyReign

convertYear() to translate given year in roman numerals to integer

Conditions:

Starting year is year 1000 (M in roman numerals)

The end of reign of one dynasty is the start of reign of another

Remove entries with invalid roman numerals (year of end of reign)

If passed roman number in convertYear() is invalid, return the word "Invalid" instead of the year

If dynastyReign is empty return "No Data"
