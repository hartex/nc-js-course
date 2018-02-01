const LinkedList = require('./hw-node');

let list;

beforeEach(() => {
    setUpList();
});

test('List length should be correct', () => {
    expect(list.length).toBe(5);
});

test('List get() returns correct element', () => {
    expect(list.get(3)).toBe('dsfs');
});

test('List set() sets correct element', () => {
    list.set(1, 'aaaaaaa');
    expect(list.get(1)).toBe('aaaaaaa');
});

test('List push() adds element to the list tail', () => {
    list.push('dsdf', 12);
    expect(list.get(5)).toBe('dsdf');
});


function setUpList() {
    list = new LinkedList(1, 23, 44, 'dsfs', {});
}