true && true; // true
true && false; // false
false && true; // false
false && false; // false

2 < 3 && 6 < 8; // true && true = true
2 < 3 && 6 > 8; // true && false = false
2 > 3 && 6 < 8; // false && true = false
2 > 3 && 6 > 8; // false && false = false

true || true; // true
true || false; // true
false || true; // true
false || false; // false

2 < 3 || 6 < 8; // true || true = true
2 < 3 || 6 > 8; // true || false = true
2 > 3 || 6 < 8; // false || true = true
2 > 3 || 6 > 8; // false || false = false