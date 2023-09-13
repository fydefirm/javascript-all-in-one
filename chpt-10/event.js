// Events
// Events are things that happen outside of your program, such as a
// mouse button click or an HTML element loading or a timer reaching
// a certain point.

// Understanding the JavaScript Runtime Model
// A programming language's runtime model describes how implementations
// of the language should run code. In the case of JavaScript, the
// runtime model is implemented in JavaScript engines such as
// Chrome's V8 engine, Mozilla's SpiderMonkey engine and Apple's
// JavaScriptCore engine.
// At a high level, JavaScript's runtime model is made of these three
// components:
// The stack
// The heap
// The queue

// STACKING function calls
// the stack is made up of frames, think of them as film frames.
// JavaScript processes frame one at a time and then moves on to the
// next one. The stack and heap are part of the core JavaScript engine.

// HEAPING objects
// The heap is an area of memory where objects are stored. Unlike the
// stack, which is ordered based on first-in-first-out (FIFO), the
// heap is unstructured.

// QUEUING messages
// Events, such as happen when you click a button in a web page,
// create messages. Your browser is generating hundreds of these event
// messages all the time in response to every mouse movement, page
// or image load, keystroke, and many other events. These messages
// all go into the event queue.
// Most of the messages in the queue just exit it without causing
// anything to happen. But in some cases, the JavaScript engine
// determines a message to be important and takes some action based
// on it.

// The Event Loop
// This is a CONSTANTLY running process in a JavaScript engine that
// PROCESSES MESSAGES from the message queue. When it finds a message
// it's interested in, it adds function calls to the stack to handle
// the event.
// One reason that a message in the queue might be important is that
// the current program has created an event listener for that event.

// Because JavaScript is single-threaded, it must deal with messages
// one at a time and process each one until it's done. This can lead
// to situations in which a message that takes a long time to process
// can hold up everything else. This is called blocking.
// To avoid blocking, most event handler functions are short. Another
// strategy to avoid blocking is to use asynchronous functions, which
// hand off execution of code to a process outside of the JavaScript
// engine (such as a networking or data access API) along with a
// callback function that will be returned to the stack when the
// outside process finishes its work (such as getting data, waiting
// for a timer, or making an HTTP request).

// For a JavaScript program to know what's happening in a web browser,
// the program needs to listen for events that are produced in the
// browser. This can be done in three different ways:
//  HTML event attributes
//  Event handler properties
//  THe addEventListener() method

// Listening with HTML event attributes
// run JavaScript in response to events on HTML element by adding
// attributes to those elements.

// <button onclick = "alert('You clicked the button')">Click Here</button>

// in addition to onclick, there are event attributes for many other
// browser events, such as onload, onsubmit, onkeydown, and onmouseover.

// event attributes are considered obsolete and shouldn't be used.

// Listening with Event handler properties
// Event handler properties are properties that are available on
// built-in browser objects that can be used to listen for events.
// For example, elements have an onclick property that can be used
// like this:
const helpButton = document.getElementById("help-button");

function displayHelpWindow() {
  window.open("help.html");
}

helpButton.onclick = displayHelpWindow;

// Notice that, unlike the HTML event attributes, event handler properties
// properly separate JavaScript code from HTML. Also unlike event
// attributes, they take a function, rather than a function call, as
// their value.

// Using addEventListener()
// The addEventListener() method is the newest and best way to create
// event listeners. It can be called on any instance of an object, and
// it takes two parameters:
//  the event to listen for and
//  a callback function that should run when the event happens on the
//  object.
// Basic syntax for addEventListener()
// EventTarget.addEventListener('event', callback, options)

// The event target is the object the event listener should be attached
// to.Example: if you want to detect an event that happens in the browser
// window (such as the load event), you can set the event target to
// "window"

// The first parameter is the name of the event to listen for. Unlike
// when you use event attributes or event handler properties, this is
// just the event name, without the "on" prefix.

// see mouse-tracking.html for an example of using addEventListener()
// to detect mouse movements in the browser.
// In the html example, the key to how the onMouseMove() function works
// is the Event object.

function onMouseMove(e) {
  setPosition({ x: e.offsetX, y: e.offsetY });
}

// The Event object
// Notice that the onMouseMove() function (see snippet above), receives
// a parameter called 'e' - this is an event object. An event object is
// passed automatically to event handler callback functions.
// You can give the event object any name you like inside an event
// handler function, but it's most commonly called e, evt, or event.
// The event object contains a wealth of information about the event
// that happened.

// Event Bubbling
// Event bubbling is the default method that browsers use to detect
// events on nested elements. Event bubbling refers to the fact that
// when an event happens on a nested node, such as a button inside a
// form, the button receives the event first and then bubbles up to
// the elements that contain the node where the event happened.

// Preventing default actions
// Some elements have default actions that happen when certain events
// are fired. For example, the <form> element submits a form using HTTP
// when the submit event fires. If you don't want the default events to
// happen (as is often the case with the <form> element's default action),
// you can use the preventDefault() method inside your event handler:

e.preventDefault();
