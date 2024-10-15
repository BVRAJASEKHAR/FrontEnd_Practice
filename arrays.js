// Empty array
const array = []

const array1 = [1, 2, 3]
console.log(array1)

const array2 = [1, 'Scaler', true, undefined, null, [1, 2, 3]]
console.log(array2)

// array2 = [12, 23]

// How to access elements, nth element -> array2[n-1]
console.log(array2[0], array2[3])

array2[3] = "New value"
console.log(array2.length)



// const a = 10
// a = 11
// const a1 = [1, 2, 3]
// a1 = [3, 4, 5]

// a1[0] = 10


// Array methods

let cars = ['Maruti', 'BMW', 'Audi']
console.log(cars)
cars.push('Tesla')
console.log(cars)

// Removes last element
const deletedElement = cars.pop()
console.log(cars, deletedElement)

// Insert at the start
cars.unshift("Tesla")
console.log(cars)

// Delete from the start
const deletedValue = cars.shift()
console.log(cars, deletedValue)

