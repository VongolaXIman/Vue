# Javascript
Self-Learning

## stringObject.length;
```
var myStr = "myString";
myStr.length; /* 8 */
var myStr = "基本字串";
myStr.length; /* 4 */
var myStr = "《基本(符號)字串》";
myStr.length; /* 10 */
var myStr = "基本的な文字列AA";
myStr.length; /* 9 */
```

## stringObject.substr(start, length)
```
var myStr = "myString";
myStr.substr(2,3); /* Str */
myStr.substr(-3,3); /* ing */
myStr.substr(2); /* String */
```

## stringObject.substring(start, index)
```
var myStr = "myString";
myStr.substring(2,5); /* Str */
myStr.substring(2,25); /* String (超出 length 只取到字串的結尾) */
```

## stringObject.charAt(index)
```
var myStr = "myString";
myStr.charAt(0); /* m */
myStr.charAt(2); /* S */
myStr.charAt(10); /* 返回一個空字串 */
```

## stringObject.charCodeAt(index)
```
var myStr = "ABC";
myStr.charCodeAt(0); /* 65 (等於 VBScript Asc("A")) */
myStr.charCodeAt(1); /* 66 */
```
```
var myStr = "字串";
myStr.charCodeAt(0); /* 23383 */
```
