/**
 * Please create an array/list of numbers from 1 to 100. Print all these numbers in reverse order, but with the following rules :
 * 1. Do not print prime numbers.
 * 2. Replace numbers divisible by 3 with the text "Foo."
 * 3. Replace numbers divisible by 5 with the text "Bar."
 * 4. Replace numbers divisible by both 3 and 5 with the text "FooBar."
 * 5. Print the numbers horizontally, not vertically.
 */

const isPrime = (num) => {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
};

const arr = [];
for (let i = 100; i >= 1; i--) {
  // arr.push(i);
  if (isPrimeTernary(i)) continue;
  if (i % 3 === 0 && i % 5 === 0) {
    arr.push("FooBar");
  } else if (i % 3 === 0) {
    arr.push("Foo");
  } else if (i % 5 === 0) {
    arr.push("Bar");
  } else {
    arr.push(i);
  }
}

console.log(arr.join(" "));
