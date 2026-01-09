export function ageCalculator(y, m, d) {
    const today = new Date();
    const birthDate = new Date(y, m, d);

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (
    monthDifference < 0 || 
    (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
    age--;
    }

    return age;
}
