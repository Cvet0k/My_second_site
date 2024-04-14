// Task 1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];
 function sortPeople  (person1, person2) { 
    if (person1.age < person2.age) {
        return -1 ;
    } else {
        return 1;
    }
}
 console.log(people.sort(sortPeople));

 


 