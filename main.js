var favAnimal = {
    name: 'Zoe',
    animal: 'cat'
};
console.log('favAnimal', favAnimal.animal);

var instructorPets = [
    {
        instructorName: 'Zoe',
        petName: 'Biff',
        animalType: 'evil cat',
        isFavorite: false
    },
    {
        instructorName: 'Zoe',
        petName: 'Whiskey',
        animalType: 'cat',
        isFavorite: true
    },
    {
        instructorName: 'Lauren',
        petName: 'Frankie',
        animalType: 'sweet dog',
        isFavorite: true
    },
    {
        instructorName: 'Callan',
        petName: 'Seymour',
        animalType: 'one eyed dog',
        isFavorite: true
    }, 
    {
        instructorName: 'Callan',
        petName: 'Wiley',
        animalType: 'destructive dog',
        isFavorite: false
    }
]
console.log('instructorPets: ', instructorPets);

var petDiv = document.getElementById('pet-names');
for (var i=0; i<instructorPets.length; i++) {
    petDiv.innerHTML += '<h1>' + instructorPets[i].petName + '</h1>';
}
