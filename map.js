let animals = [
    { name: 'Fluffykins', species: 'rabbit' },
    { name: 'Caro', species: 'dog' },
    { name: 'Hamilton', species: 'dog' },
    { name: 'Harold', species: 'fish' },
    { name: 'Ursula', species: 'cat' },
    { name: 'Jimmy', species: 'fish' }
]

// Normal.
let names = animals.map(function(animals) {
    return animals.name
})

// Short code is good because less code almost alway means less bug.
// Note: Less logic also.
let names2 = animals.map(animals => animals.name)

// For loop.
let names3 = []
for (let i = 0; i < animals.length; i++) {
    names3.push(animals.name)
}




console.log(names);
