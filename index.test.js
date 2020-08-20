const calculator = require('./index');

test('check wherther calculator is defined or not',() =>{
    expect(calculator).toBeDefined();
});

test('check wherther add definied or not',() =>{
    expect(calculator.add()).toBeDefined();
});

test('check wherther sub definied or not',() =>{
    expect(calculator.sub()).toBeDefined();
});

test('check wherther mul definied or not',() =>{
    expect(calculator.mul()).toBeDefined();
});

test('check wherther div definied or not',() =>{
    expect(calculator.div()).toBeDefined();
});

test('check wherther 2+4 is 6 or not',() =>{
    expect(calculator.add(2,-4)).toBe(-2);
});

test('check wherther 4-2 is 2 or not',() =>{
    expect(calculator.sub(4,2)).toBe(2);
});

test('check wherther 2*4 is 8 or not',() =>{
    expect(calculator.mul(2,4)).toBe(8);
});

test('check wherther 8/4 is 2 or not',() =>{
    expect(calculator.div(8,4)).toBe(2);
});
