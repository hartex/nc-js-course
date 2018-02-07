const defaultConst = 111;

// default export must be only one per script
export default defaultConst;

export function square(x) {
    return x * x;
}

export const CONST = 123123;

export const someObject = {
    name: 'some name',
    age: 123,
    showName: function () {
        console.log(this.name);
    }
}