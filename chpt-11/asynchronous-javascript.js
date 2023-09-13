// Asynchronous Javascript
// Everything a computer program does takes time. Some actions, like
// declaring a variable or performing a simple calculation, take such
// a small amount of time that the action seems instantaneous. But
// when programs start to involve network requests, database access,
// and accessing resources outside of the web browser, wait times can
// start to add up.

// Asynchronous programming is a technique that allows JavaScript to
// start a process and then continue to run the program while it waits
// for the result.

// A real life comparison for asynchronous programming:
// When you wash your clothes by hand, you have to stop everything else
// you're doing until the clothes are clean. If you use a washing
// machine, you can turn it on and then go do something else. When the
// washing cycle is complete, the machine alerts you and you can move
// the laundry to the dryer and then get back to work or finish your
// lunch. Asynchronous JavaScript works the same way.

// A synchronous program
function count(maxNumber) {
  let i = 0;
  while (i < maxNumber) {
    console.log(i);
    i++;
  }
}
count(1000);

// 1. you can follow the execution of the code step-by-step and know the
//      exact order in which the statements will be executed.
// 2. synchronous programming is easy to understand
// 3. problems with synchronous code occur when a process takes a long
//      time to complete. Because JavaScript is single-threaded,
//      statements that take a long time to execute blocks anything
//      else from happening.

// Events
// Event handlers provide JavaScript with a way to do asynchronous
// programming. When you use addEventListener(), you tell JavaScript to
// do something whenever it detects a certain type of event. Without
// being able to create event listeners, any type of event would have
// to happen in a particular order, and modern JavaScript user
// interfaces would be impossible.

// see sync.html for a login form written with sychronous programming
// the data entry and messages are done using alert() and prompt().
// Both of these methods are synchronous. Everything in your program
// stops and you can't use the browser while they wait for input.

// now check the same program written asynchronously in async.html
// On the asynchronous login, you don't need to enter your username or
// password in a certain order, and the rest of the program (if there
//  were more JavaScript) can continue to run at the same time.

// Making Promises
// A promise is an object (created from JavaScript's built-in Promise
// interface) that represents the result of an asynchronous operation.
// A promise lets you work with the result of an asynchronous operation
// as though it were synchronous and without complex nesting of callbacks
// Promises in JavaScript work like promises in real life - for example,
// you run a restaurant and a customer promises to pay you Tuesday for
// a hamburger you give him today.
// When the promise is made, the result of the promise is unknown. The
// only thing you know is that the person will eventually keep the
// promise or not keep it. In programming, we say that there are three
// possible states for the promise:

// Pending: The promise has been made, but the outcome is uncertain.
// Fulfilled: The promise was kept, and the customer paid you on Tuesday.
// Rejected: The promise wasn't kept.

// Promises still use callback functions, but rather than using nesting
// to pass a value from one finished task to the next, they use a promise
// chain.
doLogin()
  .then((result) => sendLoginData(result))
  .then((result1) => logIn(result1))
  .then((result2) => loadPage(result2))
  .then((result3) => {
    console.log(`final result: ${result3}`);
  })
  .catch(failureCallback);

// Important things to know about using Promises:
//  Each function in a callback chain must return a promise.
//  The then() function is actually a type of event handler that executes
//  the function passed to it when the previous function in the chain
//  returns.
//  The catch() handler runs only when one of the steps in the chain fails.

// Writing Promises
// To create a basic promise, use the "new" keyword with the "Promise"
// constructor. The Promise constructor takes a callback function as its
// arguement. This callback function takes two callback function
// arguements: resolve and reject
let myPromise = new Promise((resolve, reject) => {
  someAsynchronousFunction(function () {
    resolve("Success!");
  });
});

// Once you've created a promise, you can chain it with other promises
// using then():
myPromise().then((result) => {
  // do something with the result
});

// see promise.html for a program that uses a promise and XMLHttpRequest()
// method to load text from a web server and then display it.

// Most of the time, you won't need to write functions that create
// promises. Instead, you'll write functions that make use of methods
// defined by asynchronous APIs built into web browsers or Node.js

// Introducing async functions
// Promises and promise chains are a great improvement over nested
// callbacks in terms of readability, but there's a better way to write
// asynchronous code: async functions.

// To write an async function, prefix the name of the function with the
// "async" keyword. Once you do that, you can write expressions using the
// "await" keyword inside the function:
async function getData() {
  const response = await fetch("http://www.example.com/data");
  return response;
}

// If you want to run asynchronous operations in a sequence, the way you
// would with nested callbacks or a promise chain, you just write additional
// "await" expressions. Each "await" expression waits for the asynchronous
// operation to resolve before allowing the next expression to proceed:

async function getData() {
  const response = await fetch("http://www.example.com/data");
  const response2 = await processData(response);
  return response2;
}

// Behind the scenes, async functions use promises. The await keyword is
// essentially a ".then" callback, and the "return" statement in an
// async function is the final link in a promise chain. Async function
// always return a promise.

// Async functions make writing asynchronous code as easy and straighforward
// as writing synchronous code.

// Check promise-to-async.html to see the promise chain replaced by an
// async function.

// Handling errors with async/await
// Unlike with promise chains, there's no catch function for async functions.
// Instead, you can use a try/catch statement-it's made up of a try block
// and either a catch block, a finally block, or both a catch block and a
// finally block.
try {
  // try to do something
} catch (e) {
  // do something with e, which is an Error object
} finally {
  // something to do whether successful or not
}

// In an async function, put the "await" expression in a try block and
// put error reporting or error handling code in the catch block:
async function openBook() {
  try {
    const bookText = await bookLoad("mobydick.txt");
    displayArea.innerText = bookText;
  } catch (e) {
    displayArea.innerText = e;
  }
}

// Getting data with the Fetch API
// The Fetch API, which is a more modern and easy way to access files &
// the HTTP pipeline, was first introduced in 2015 as a replacement for
// XMLHttpRequest().

// The most basic form of using the Fetch API is to provide the fetch()
// method with a path to a resource (such as a file or a data stream):
fetch("myfile.json");

// The fetch() method returns a promise that resolves to a "Response"
// object.
// A Response object represents a response to a request made using the
// Fetch API

const response = await fetch("https://api.github.com/orgs/facebook");
console.log(response);

// The property of the Response object that contains the data returned
// by fetch() method is the "body" property.
// But, if you expand the body property, you can see that it doesn't
// seem to contain data you can read. Instead, it tells you that the body
// is a "ReadableStream". A stream works similarly to how streaming video
// or audio works. It's not actually a video or audio file itself, but
// the stream of data can be assembled into video or audio with some
// parsing. In the same way, you need to do some parsing to convert
// the response's body property to data you can work with in your programs

// Fortunately, the Response object provides methods for parsing the
// response body easily. Method you use to parse this stream received
// from GitHub is the "json()" method. The json() method returns a
// Promise that resolves to the result of parsing the body stream as
// json() data.

const data = await response.json();
console.log(data);

// Viewing "data" in the console, you see that the response body has
// been converted into a JavaScript object.

// Handling fetch() errors
// A fetch() promise is only rejected if a network error occurs. However,
// many other types of errors can happen in an HTTP request that are
// important to detect and handle. If the problem with the request
// doesn't have to do with a problem like the client lacking internet
// access, for example, the promise still resolves.
// To detect and handle errors that happen with a fetch() request, you
// can check the value of the response object's status property for a
// value of 200. A status of 200 indicates that the request was successful

async function fetchTheData(url) {
  try {
    const response = await fetch(url);
    if (response.status >= 200 && response.status <= 299) {
      return response.json();
    } else {
      throw Error(response.statusText);
    }
  } catch (error) {
    console.log(error);
  }
}

// Introducing HTTP
// HyperText Transfer Protocol (HTTP) is the protocol used to communicate
// on the web. Every time a web browser fetches a web page, an image,
// a media file, or any other type of resource from the web, it's using
// HTTP. HTTP is a client-server protocol. The client is typically a
// web browser, and the server is a web server. The client and server
// communicate with each other using messages.
// Messages sent by the client are called requests, and messages sent
// by the server are called responses.
// See examples of HTTTP request & response on chrome's developer tools
// on the Network tab.

// The request method:
// GET: The GET method is used to get data from a server. It's the
//  method that's used by the fetch() method when you invoke it with
//   just a single argument.
// POST: The POST method submits data to the specified URL. This is
//  the method that's used, for example, when you submit a form on the
//  web.
// PUT: The PUT method replaces the target resource with the payload
//  of the HTTP request.
// PATCH: The PATCH method makes a partial update to a resource. For
//  example, a request that will result in only some fields of a
//  database record being updated should use PATCH.
// DELETE: The DELETE method deletes the specified resource.

// HTTP status codes:
// The HTTP status codes indicate whether the HTTP request was succesful
// and tells you what went wrong if it wasn't successful. HTTP status
// codes range from 100 to 599. In web application development, however,
// you're likely to see only the following status codes:

// 200: Indicates that the request succeeded.
// 301: Indicates the requested resource has permanently moved to a
//  new URL, which is given in the response. Think of a 301 redirect as
//  a change-of-address form.
// 400: Indicates a bad request. Often happens because your request is
//  missing some piece of data required by the server.
// 401: Indicates that your request isn't authorized. You likely need
//  to provide authentication data.
// 404: Indicates that the resource you're looking for can't be found.
// 500: Internal server error. Indicates that something went wrong on
//  the server.

// Making requests with CORS
// The method used by browsers and servers for allowing cross-origin
// HTTP requests is called the cross-origin resource sharing standard
// or CORS. CORS uses HTTP headers that let the server tell browsers
// what origins and types of request it allows.
// This helps prevent cross-site scripting or XSS. For example, a script
// downloaded as part of an otherwise innocent-seeming website might use
// fetch() to download code that can install viruses or other malware on
// your computer.

// Making a simple request
// When a browser makes a cross-origin request using the GET, HEAD or
// POST methods with certain content types (including form data and
//  plain text), it's known as a simple request.
// In a simple request, the browser makes the request and the server
// responds with a status code of 200 if the origin of the script is
// allowed by the value of the server's "Access-Control-Allow-Origin"
// header.
// Type below into a browser console to see an example of a simple
// request:
await fetch("https://api.github.com/repos/chrisminnick/javascriptaio");

// Making a non-simple request
// Non-simple requests are ones that have the potential to change server
// data. In these case, the browser makes a preflight request. The
// preflight request uses the "OPTIONS" HTTP method. It tells the server
// the details of the request it wants to make, including the origin of
// the script, the HTTP method of the request,and the headers it wants
// to send.

// Working with JSON data
// The most common format for sending and receiving data to and from
// JavaScript application is JavaScript Object Notation (JSON). JSON
// data resembles JavaScript object literal notation, and it's easy
// to convert between JSON data and JavaScript objects.

// Getting JSON data
// The most common way to get JSON data into your application is by
// using fetch(). Once you have the JSON data, you can use the Response
// object's json() method to convert it to data that can be used inside
// your JavaScript code.
// However you get JSON data into your program, you still need to convert
// it to JavaScript before you can use it. You can use JavaScript's
// built-in JSON.parse() method to do this.
const person = '{"firstName": "Conway", "age": 59}'; // JSON data

// Notice that the value of person is a string. As such, there's no easy
// way to extract the individual names or values from it. You have to
// convert the JSON string to an object.

const personObject = JSON.parse(person);

// Sending JSON data
// If you have an object in your application that you want to send to a
// server as JSON data, it needs to be converted to JSON before it can
// be sent. JavaScript has a built-in method that does this for you,
// called JSON.stringify().
// To use the stringify() method, pass an object or value into it.

const personJSON = JSON.stringify(personObject);
