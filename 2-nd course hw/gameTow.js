function gameWords () {
const massivWords = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
massivWords.sort(()=> Math.round(Math.random()));
alert(`Запони эти слова: \n${massivWords.join(' ')}`);
let wordUser = prompt('Введи слова через пробел');
if (!wordUser) {
    alert("Не получил ответа!");
    return;
  }
if (massivWords.join(' ').toLowerCase() === wordUser.toLowerCase() ) {
    alert('Ты угадал! Ты молодец')
    
} else  { 
    alert('Ты не угадал! Попробуй еще раз');
    
}

}

