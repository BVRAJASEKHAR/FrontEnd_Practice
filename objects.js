// Key-Value pair

const user = {
    name: 'Adam',
    age: 10,
    isAdmin: false,
    favoriteMovies: ["The Batman", "The Dark Knight"],
    favoritebookSeries: {
        name: "Harry Potter",
        author: 'J.K Rowling'
    },
    printName: function printName() {
        console.log("Name is Adam")
    }
}
console.log(user)
console.log(user.name, user["name"])
user.printName()
