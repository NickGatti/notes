# Notes and Daily Commits

## CDNS

Materialize:

```
<!-- Compiled and minified CSS -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">

<!-- Compiled and minified JavaScript -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script>
```

Materialize => NPM

```
npm install materialize-css
```

jQuery CDN:

```html
https://code.jquery.com/
```

Other notable resources:

```
https://reactstrap.github.io/
https://bootswatch.com/
http://www.material-ui.com/#/
https://fontawesome.com/
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
let obj = {}
if ( obj.constructor === Object ) return true
```

### Check Object contents length
```javascript
let obj = {}
if (Object.keys( obj ).length === 0 ) return 'empty'
```

### Check if Array is Array
```javascript
let theArray []
if (Array.isArray(theArray)) return true
```

### What the callback? Keep callin' (server heavy) THIS IS KNOWN AS LONG POLLING
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

### What the callback? Keep callin' (minus server spam) THIS IS KNOWN AS SHORT POLLING
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
    setTimeout(getInfo, 5000)
}
```

### Copy Pasta Express JS API Code with POST caperbilities

```javascript
// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
```

### Copy Pasta Express JS API Code with no so much POST caperbilities

```javascript
// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
```

### Where is this? This is in its parent scope!

```javascript

function getInfo() {
  $.get('www.api.com/api', run)
}

function run() {
  console.log(this)
  //THIS IS IN GET INFO!!!
}
```

### Where is this? Fat Arrow Function! This is in its own scope!

```javascript

let run = () => {
  console.log(this)
  //THIS IS HERE IN RUN!!!
}

function getInfo() {
  $.get('www.api.com/api', run)
}
```

## Higher Order Functions:

## Arrays:

### Map
#### Return the same length array filled with results based on conditions from the original array

```javascript
var new_array = arr.map(function callback(currentValue, index, array) {
    // Return element for new_array
}[, thisArg])
```

Parameters

callback
Function that produces an element of the new Array, taking three arguments:

* currentValue

 The current element being processed in the array.

* index Optional

 The index of the current element being processed in the array.

* array Optional

 The array map was called upon.

* thisArg Optional

 Value to use as this when executing callback.

* Return value

 A new array with each element being the result of the callback function.

Source MDN

```javascript
let arr = [1, 2, 3, 4, 5]

let myFunc = () => {
  return arr.map( (data) => {
    return data > 1 ? 'Higher than one' : 'Lower than one'
  } )
}

myFunc()
```
> Output is ['Lower than one', 'Higher than one', 'Higher than one', 'Higher than one', 'Higher than one']

### Filter
#### Return an array of results based on the conditions of the original array

```javascript
var newArray = arr.filter(callback[, thisArg])
```

* callback
Function is a predicate, to test each element of the array. Return true to keep the element, false otherwise, taking three arguments:

* element

The current element being processed in the array.

* index

The index of the current element being processed in the array.

* array

The array filter was called upon.

* thisArg Optional

Optional. Value to use as this when executing callback.

```javascript
let arr = [1, 2, 3, 4, 5]

let myFunc = () => {
  return arr.filter( (data) => {
    if (data > 1) return data
  } )
}

myFunc()
});
```

> Output is [2, 3, 4, 5]

### Knex Migrate

```
> knex migrate:make create_onetable_and_another_table
```

### Knex Seed

```
> knex seed:make 01_base_table
> knex seed:make 02_dependant_table
```

### Knex Deploy

If never have done before
```
> knex migrate:latest
```

If have done before
```
> knex migrate:rollback
> knex migrate:latest
```

Then seed
```
> knex seed:run
```

### EJS

At the where an app.use goes
```
app.set('view engine', 'ejs');
```

Logic
```
// The tag below is used for logic. Such as if statements or for loops.
<% %>
// The tag below is used for displaying information to the user. Use this if you want to display a variable on the page.
<%= %>
```
