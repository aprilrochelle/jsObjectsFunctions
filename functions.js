// function expressions
var a = function() {
    console.log('a', 3);
};

// function declarations
function b() {
    console.log('b', 2);
};

var num = 3;
function numPrinter(monkeyButt) {
    console.log('mynumber: ', monkeyButt);
};

// numPrinter(num);

function cat() {
    return 'love them';
};
var message = cat();
console.log('message: ', message);

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
];

// display each pet as a card
// pet name is H1
// display owner name
// display type
// if favorite, make background green; if not make red

function domStringMaker(animalArray) {
// take pet names and create dom string
// call printToDom function
    for (var i=0; i<animalArray.length; i++) {
        var animalString = "";
        if (animalArray[i].isFavorite) {
            animalString += '<div class="pet isFavorite">';
        } else {
            animalString += '<div class="pet isNotFavorite">';
        };
        animalString += '<h1>' + animalArray[i].petName + '</h1>';
        animalString += '<h3> Owner: ' + animalArray[i].instructorName + '</h3>';
        animalString += '<h3> Type: ' + animalArray[i].animalType + '</h3>';
        animalString += '</div>';
        printToDom(animalString, 'pet-names');
    }
};

function printToDom(stringToPrint, divId) {
// take string and innerHTML to the divId
    var myDiv = document.getElementById(divId);
    myDiv.innerHTML += stringToPrint;
};

domStringMaker(instructorPets);