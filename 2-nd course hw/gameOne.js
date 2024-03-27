function gameMonth () {
let monthNuber2 = Number(prompt('Введи номер месяца, и я скажу какое время года'));
switch (monthNuber2) {
    case 1:
    case 2:
    case 12: alert('За окном зима, одевайся теплей');
        break;

    case 3:
    case 4:
    case 5: alert('За окном весна, слышишь как поют птицы и звенит капель');
        break;
    case 6:
    case 7:
    case 8: alert('За окном лето, пора ехать на пляж');
        break;
    case 9:
    case 10:
    case 11: alert('За окном осень, не забудь зонтик и теплый шарф');
        break;

    default: alert('В году 12 месяцев, попробуй еще раз');
        break;
}
}