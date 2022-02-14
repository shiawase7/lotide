const assertEqual = require('../assertEqual');
const head = require('../head');

//Tests
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([1]), 1);
assertEqual(head([]), undefined);
assertEqual(head([2,3,"four"]), 2);
