/*
    Primitive Types
*/

// Number (int + float)

// 따라서 / 도 int 범위에서 끝나지 않음 ** 로 거듭제곱 표현 가능
// NaN는 Not a Number이지만 숫자로 침(0 / 0 등)


// String

// Have to use quote(", ') or backtick(`)
// Strings are indexed(start from 0)
// str.length > get to length of the str
// str1 + str2 > concatenation

// str.method();
// toUpperCase, toLowerCase, trim
// can chain the method str.method1().method2()

// indexOf(arg) return the first occurent index of argument(if doesn't exist return -1)
// slice(beginIndex[, endIndex]) //endIndex is optional

// Templete literal
// `I like ${3 + 4}` >> "I like 7"


// Boolean(true or false)

// use when performing logic


// Null(typeof 시 object 반환 설계 결함으로 null은 기본형이 맞음)

// primitive value
// represent the intentional absence of any value


// Undefined

// primitive value
// variables that do not have an assigned value are undefined

/*
    Variables
*/

// let (keyword that use to store value in variable)

// Usage >> let year = 2024;
// Updating variable year = year + 1
// Updating shortcut(add 1 or sub 1) year++, year--, ++year, --year

// year++, year-- => return value before increment or decrement
// ++year, --year => return value after increment or decrement

// const (constant)
// can reassign, update the value

// var(old method)

/*
    Naming variable
*/

// cannot start with a digit or digits
// snake case current_date(uncommon)
// camel case currentDate(common)
// (suggest) use is to show that it is a boolean(ex. isGameOver)

/*
    Math Object
*/

// Math.PI

// Math.floor(), Math.ceil() >> round down, round up
// Math.random() >> return random value(0 <= x < 1)