function zzz(name, age) {
    const status = age > 18 ? 'adult' : 'underage';
    return function (surname) {
        return {
            name,
            age,
            status,
            surname
        }
    }
}

const z1 = zzz('John', 22);