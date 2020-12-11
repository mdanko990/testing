function listOfFrieds(list) {
    return list.split(';').map(person => ({
        firstName: person.split(':')[0],
        secondName: person.split(':')[1],
    })).sort((person1, person2) => {
            if(person1.secondName === person2.secondName) 
                return person1.firstName.localeCompare(person2.firstName);
            else{
                return person1.secondName.localeCompare(person2.secondName);
            } 
        }).map(person => `(${person.secondName.toUpperCase()}, ${person.firstName.toUpperCase()})`).join('')
}

console.log(listOfFrieds('Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Turnbull;Raphael:Corwill;Alfred:Corwill'))
