# Javascript
Self-Learning
```
const — 一般使用在識別值(identifier)不會被重新指定值。
let — 一般使用在變數(variable)可能會被重新指定值。
var — 在ES6推出“let”宣告方法後，JavaScript最弱的變數宣告，問題: 區域變數覆蓋全域變數或者for loop循環變數洩漏為全域變數
```
![](https://miro.medium.com/max/512/1*3uXxMQHwJd-ecA2VnlD5rA.png)

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

## stringObject.concat(stringX,stringX,...,stringX)
```
var myStr = "my";
myStr.concat("String"); /* myString */
```
```
var myStr = "my";
myStr.concat("Str","ing"); /* myString */
```

## stringObject.indexOf(searchvalue,fromIndex)
```
var myStr = "myString String";
myStr.indexOf("Str",1); /* 2 */
myStr.indexOf("Str",5); /* 9 */
myStr.indexOf("Str",10); /* -1 沒有找到 */
```

## stringObject.lastIndexOf(searchvalue,fromIndex) 反向尋找
```
var myStr = "myString String";
myStr.lastIndexOf("Str",5); /* 2 */
myStr.lastIndexOf("Str"); /* 9 */
myStr.lastIndexOf("Str",1); /* -1 沒有找到 */
```

## stringObject.replace(regexp, replaceString)
*符合 regexp 部份被 replaceString 部份取代  
*可加 /g 代表總體尋找，可加 /i 代表不分大小寫
```
var myStr = "myString";
myStr.replace(/Str/,"xxx"); /* myxxxing */
myStr.replace(/str/,"xxx"); /* myString (大小寫不同) */
```
```
var myStr = "As As as As";
myStr.replace(/As/,"Bs"); /* Bs As as As (預設下只有一次) */
myStr.replace(/As/ig,"Bs"); /* Bs Bs Bs Bs (i 忽略大小寫, g 全部取代) */
```

## stringObject.match(regexp)
*傳回「找到的字串」  
*regexp 為待尋找的字串，可加 /g 代表總體尋找，可加 /i 代表不分大小寫
```
var myStr = "myString";
myStr.match("Str"); /* Str */
myStr.match(/Str/); /* Str */
myStr.match(/str/); /* null */
myStr.match(/str/ig); /* Str,Str (總體尋找) */
```

## stringObject.search(regexp)
*傳回「找到的字串 位置」  
*regexp 為待尋找的字串，可加 /g 代表總體尋找，可加 /i 代表不分大小寫
```
var myStr = "myString String";
myStr.search("Str"); /* 2 */
myStr.search(/Str/); /* 2 */
myStr.search(/str/); /* -1 */
myStr.search(/str/i); /* 2 (忽略大小寫) */
```

## stringObject.slice(start, end)
```
var myStr = "myString ABCDEF";
myStr.slice(5); /* ing ABCDEF */
myStr.slice(2,7); /* Strin */
myStr.slice(-6,-3); /* ABC */
myStr.slice(-3); /* DEF */
```

## stringObject.split(separator, length);
```
var myStr = "What plan for Weekend?"
myStr.split(""); /* W,h,a,t, ,p,l,a,n, ,f,o,r, ,W,e,e,k,e,n,d,? */
myStr.split("",8); /* W,h,a,t, ,p,l,a (分隔數目 8) */
```
```
myStr.split(" "); /* What,plan,for,Weekend? */
myStr.split(/\s+/); /* What,plan,for,Weekend? */
myStr.split(" ",3); /* What,plan,for (分隔數目 3) */
myStr.split(/\s+/,3); /* What,plan,for (分隔數目 3) */
/* /\s+/ :多次空白字元
```
```
var myStr = "2:3:4:5"
myStr.split(":"); /* 2,3,4,5 */
var myStr = "A|B|C|D|E|FG"
myStr.split("|"); /* A,B,C,D,E,FG */
```

## JavaScript encodeURIComponent()/decodeURIComponent() Function
```
<!DOCTYPE html>
<html>
<body>

<p>Click the button to decode a URI after encoding it.</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
function myFunction() {
  var uri = "https://w3schools.com/my test.asp?name=ståle&car=saab";
  var uri_enc = encodeURIComponent(uri);
  var uri_dec = decodeURIComponent(uri_enc);
  var res = "Encoded URI: " + uri_enc + "<br>" + "Decoded URI: " + uri_dec;
  document.getElementById("demo").innerHTML = res;
}
</script>

</body>
</html>
```
[https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_decodeuricomponent](http://)
