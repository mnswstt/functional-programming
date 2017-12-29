let animals = [
    { name: 'Fluffykins', species: 'rabbit' },
    { name: 'Caro', species: 'dog' },
    { name: 'Hamilton', species: 'dog' },
    { name: 'Harold', species: 'fish' },
    { name: 'Ursula', species: 'cat' },
    { name: 'Jimmy', species: 'fish' }
]

let is_dog = (animal) => {
    return animal.species === 'dog'
}

let dogs = animals.filter(is_dog)
//let otherAnimals = animals.reject(is_dog)

console.log(dogs)
//console.log(otherAnimals)

