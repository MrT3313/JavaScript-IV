const Jerry = new Person({
    name: 'Jerry',
    age: 34,
    location: 'Hawaii',
    gender: 'M'
})

const Grizzly = new Person({
    name: 'GrizzlyAdams',
    age: 389,
    location: 'TheWoods',
    gender: 'M'
})

const Eve = new Person({
    name: 'Eve',
    age: 0,
    location: 'LastKnownLocation: Heaven',
    gender: 'F'
})


console.log(Eve)
console.log(Grizzly)
console.log(Jerry)

const MrT = new Instructors({
    name: 'Mr.T',
    age: 24,
    location: 'Texas',
    gender: 'M',
    
    speciality: 'JS',
    favLanguage: 'Python',
    catchPhrase: 'I PITTY THE FOOOOOOOOOL!!'
})

const MsLambert = new Instructors({
    name: 'MsLambert',
    age: 31,
    location: 'randomville',
    gender: 'F',
    
    speciality: 'The Dewey Decimal Classification System',
    favLanguage: 'signLanguage',
    catchPhrase: 'WILL YOU KEEP IT DOWN!!!!'
})

const duck = new Instructors({
    name: 'duck',
    age: 59,
    location: 'littlePond',
    gender: 'M',
    
    speciality: 'CSS',
    favLanguage: 'Javascript',
    catchPhrase: 'please stop bringing wheat bread...'
})

console.log(MrT)
console.log(MsLambert)
console.log(duck)
