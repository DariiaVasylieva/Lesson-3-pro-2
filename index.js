yearOfBirth = prompt('Какой ваш год рождения?');
yourCity = prompt('В каком городе вы живете?');
favoriteSport = prompt('Какой ваш любимый спорт?');

age = new Date().getFullYear() - yearOfBirth;

if (!yearOfBirth) {
    messageAge = `Жаль, что вы не ввели свой год рождения.`;
} else {
    messageAge = `Ваш возраст: ${age}`;
}

if (!yourCity) {
    messageOfLiving = `Жаль, что вы не ввели свой город, в котором вы живете.`;
} else if (yourCity.toLowerCase() === 'киев') {
    messageOfLiving = `Вы живете в столице Украины!`;
} else if (yourCity.toLowerCase() === 'лондон') {
    messageOfLiving = `Вы живете в столице Англии!`;
} else if (yourCity.toLowerCase() === 'вашингтон') {
    messageOfLiving = `Вы живете в столице Соединённых Штатов Америки!`;
} else {
    messageOfLiving = `Вы живете в городе ${yourCity}!`;
}

if (!favoriteSport) {
    messageSport = 'Жаль, что вы не ввели свой любимый спорт.';
} else if (favoriteSport.toLowerCase() === 'футбол') {
    messageSport = `Круто! Хотите стать Криштиану Роналду?`;
} else if (favoriteSport.toLowerCase() === 'баскетбол') {
    messageSport = `Круто! Хотите стать Леброном Джеймсом?`;
} else if (favoriteSport.toLowerCase() === 'бокс') {
    messageSport = `Круто! Хотите стать Мухаммедом Али?`;
} else {
    messageSport = `Ваш любимый спорт ${favoriteSport}!`;
}

alert(`${messageAge}
 ${messageOfLiving}
 ${messageSport}`);