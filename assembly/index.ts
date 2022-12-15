import {getDateC} from "./env"

function isPrime(x: u32): bool {
  if (x < 2) {
    return false;
  }

  for (let i: u32 = 2; i < x; i++) {
    if (x % i === 0) {
      return false;
    }
  }

  return true;
}

export function add(a: i32, b: i32): i32 {
  return a + b;
}

export function fib(n: i32): i32 {
  let a = 0,
    b = 1;
  if (n > 0) {
    while (--n) {
      let t = a + b;
      a = b;
      b = t;
    }
    return b;
  }
  return a;
}

export function generate(): string {
  let day = getDateC()
  let data = `<div>TEST: ${day}</div>`;
  data += "<div>ADDED</div>";
  return data;
}
