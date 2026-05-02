// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

test('Valid phone number with dashes returns true', () => {
    expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('Valid phone number with parentheses returns true', () => {
    expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('Phone number missing dashes returns false', () => {
    expect(isPhoneNumber('1234567890')).toBe(false);
});

test('Phone number with letters returns false', () => {
    expect(isPhoneNumber('abc-def-ghij')).toBe(false);
});

test('Valid standard email returns true', () => {
    expect(isEmail('hello@example.com')).toBe(true);
});

test('Valid email with underscore returns true', () => {
    expect(isEmail('test_user@domain.co')).toBe(true);
});

test('Email missing domain extension returns false', () => {
    expect(isEmail('hello@example')).toBe(false);
});

test('Email missing @ symbol returns false', () => {
    expect(isEmail('hello.example.com')).toBe(false);
});

test('Valid 8-character password returns true', () => {
    expect(isStrongPassword('Pass_123')).toBe(true);
});

test('Valid 15-character password returns true', () => {
    expect(isStrongPassword('A12345678901234')).toBe(true);
});

test('Password starting with a number returns false', () => {
    expect(isStrongPassword('1Password')).toBe(false);
});

test('Password less than 4 characters returns false', () => {
    expect(isStrongPassword('Ab1')).toBe(false);
});

test('Valid date with 2-digit month and day returns true', () => {
    expect(isDate('05/02/2026')).toBe(true);
});

test('Valid date with 1-digit month and day returns true', () => {
    expect(isDate('1/1/2000')).toBe(true);
});

test('Date with 2-digit year returns false', () => {
    expect(isDate('05/02/26')).toBe(false);
});

test('Date separated by dashes returns false', () => {
    expect(isDate('05-02-2026')).toBe(false);
});

test('Valid 6-character hex code with # returns true', () => {
    expect(isHexColor('#FF5733')).toBe(true);
});

test('Valid 3-character hex code without # returns true', () => {
    expect(isHexColor('FFF')).toBe(true);
});

test('Hex code with invalid characters returns false', () => {
    expect(isHexColor('#ZZZZZZ')).toBe(false);
});

test('2-character hex code returns false', () => {
    expect(isHexColor('#FF')).toBe(false);
});