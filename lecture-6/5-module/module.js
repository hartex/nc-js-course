import someConst from "./another-module.js";

export const aaa = 1;

const zzz = 1;

export {
    zzz as hhh
};

export class Person {}

export function sayHi() {
    console.log("hi " + someConst);
}