# Notes and Daily Commits


jQuery CDN
```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
```

### Closure Javascript
```javascript
function runningAverage() {
    let count = 0
    let accu = 0
    return function ( num ) {
        accu += num
        count++
        return Math.round( accu / count * 100 ) / 100
    }
}

var rAvgSol = runningAverage();
rAvgSol( 10 )
```

* vars count and accu are in the scope of the outer function
* its like a higher order function, accumulator pattern
* we can reset the accumulator by redeclaring rAvgSol


### Barbones JS AJAX
```javascript
var xhr = new XMLHttpRequest()

xhr.open( 'GET', 'www.someapi.com/theirapi' )
xhr.send()

xhr.addEventListener( 'load', callback )

function callback() {
    if ( this.status < 200 && this.status >= 400 && this.readyState !== 1 ) return
    console.log( this.responseText )
    console.log( JSON.parse( this.responseText ) )
}
```

### Check if variable is Object
```javascript
let obj;
if ( obj.constructor === Object ) return true
```

### Check Object contents length
```javascript
let obj;
if (Object.keys( obj ).length === 0 ) return 'empty'
```

### Check if Array is Array
```javascript
let theArray;
if (Array.isArray(theArray)) return true
```

### What the callback? Keep callin'
```javascript

var xhr = new XMLHttpRequest()
xhr.addEventListener( 'load', callback )

getInfo()

function getInfo() {
  xhr.open( 'GET', 'www.someapi.com/theirapi' )
  xhr.send()
}

function callback() {
    if ( this.status < 200 && this.status >= 400 && this.readyState !== 1 ) return
    getInfo()
}
```


### What the callback? Keep callin' -MINUS SPAM
```javascript

var xhr = new XMLHttpRequest()
xhr.addEventListener( 'load', callback )

getInfo()

function getInfo() {
  xhr.open( 'GET', 'www.someapi.com/theirapi' )
  xhr.send()
}

function callback() {
    if ( this.status < 200 && this.status >= 400 && this.readyState !== 1 ) return
    setTimeout(getinfo, 5000)
}
```
