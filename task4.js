

export class FriendAge {
    constructor(name, year, month, day) {
    this.name = name;
    this.year = year;
    this.month = month;
    this.day = day;
    }

    returnAge() {
    const today = new Date();
    const birthDate = new Date(this.year, this.month, this.day); // Nota: tu index.js no resta 1 al mes
    
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return `${this.name} is ${age} today!`;
    }
}