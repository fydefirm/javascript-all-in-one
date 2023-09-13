// "Divide each difficulty into as many parts as is feasible and necessary
// to resolve it. - Rene Descartes"

// A JavaScript module is a function, variable, constant, or class that
// is stored in a separate file that can be imported into your main
// program. In the same way that using functions helps keep your
// JavaScript files organized, using modules helps keep your JavaScript
// programs organized.

// JavaScript modules are enabled by two keywords: export and import.

// Exporting Modules
// You create a module by exporting it using the export keyword.
// See constants.js to see an example of using modules to store constants
// that are used frequently in your program.

// Never store any sensitive data in a static file e.g passwords and
// API keys and any other information you wouldn't want to become public.

// Modules can be created in one of two ways: named exports or default
// exports.

// Named exports: this creates a module with the same name as the variable,
// constant, function, or class that's being exported. One way to create
// a named export is to preface the declaration of the variable, constant
// function, or class with the word "export". constants.js contains named
// exports

export function addOne(input) {
  return input + 1;
}

// Also rather than specify an export statement for each of the modules
// in constants.js, you can remove the export statements that preface
// each constant and just write the following export statement:

export { API, colorThemeDrk, colorThemeLght, labels };

// This way you create named exports by using export statement that's
// separate from the feature you want to export.
// Export statements containing all the modules you want to export from
// a file are typically placed at the end of the file.

// Default exports: This specify a single function or class from a file.
// Unlike named exports, default exports have no particular name associated
// with them. Instead a defualt export is associated with the file it's
// a part of.

// You can create a default export by prefacing the name of a function
// or class with export default.

export default function addOne(input) {
  return input + 1;
}

// A file can have only one default export. But a module with a default
// export can also have multiple named exports. See oregonInfo.js for
// an example.
// you can also write an export for a default export as a separate
// statement

// export default getStateInfo

// Importing Modules
// After you've created modules by using the export statement, you can
// import them into other files by using the import keyword.
// Import statements typically appear at the beginning of a file.
// Imported modules can be used as though they were created in the same
// file. However, unlike functions and variables that you create in a
// JavaScript file, imported modules are read-only.

// Importing named modules
// Basic syntax:
// import {moduleName} from 'file path';

// The module name can be a single exported module or a comma-separated
// list of module names. The file path is the relative path from the file
// doing the importing to the file containing the module.

import { stateName, capitalCity } from "./oregonInfo";

// Importing default modules
// To import a module that was exported as a default export, use the
// import statement without curly braces. because you're allowed to
// have only one default export per file, you don't need to specify the
// same name as the one function or class has inside the file e.g:

import oregonStateInfo from "./oregonInfo.js";

// Renaming Exports and Imports
// You can rename any exported member of a module by using the "as"
// keyword inside curly braces. Renaming using "as" can be done inside
// either an export or an import statement e.g:

export { sum as addNumbers }; // sum function module is being exported with the name addNumbers

// Alternatively, you can rename modules when you import them

import { sum as addNumbers } from "./module.js";

// Importing a Module Object
// If you have a file that contains many different named exports, it's
// often easier to import them all at the same time rather than to
// specify the names of the modules individually in the import statement.
// To import all exported modules from a file, use the asterisk(*) symbol
// along with the "as" keyword to create a module object.

import * as myModules from "./constants.js";

// After this import operation is done, the named exports from
// constants.js will be available as properties and methods of the
// myModules object.

// Loading Dynamic Modules
// Because import statements appear at the beginning of a file, all the
// imported files in a program are loaded before any other code run.
// This can have a negative impact on your program's performance.
// By using dynamic module loading, you can tell JavaScript to load
// modules only when they're needed.
// To use dynamic module loading, use the import keyword as a function.
// This function returns a promise object containing a module object.
// The import() function can be called in response to an event.

const stateButton = document.getElementById("oregonButton");
stateButton.addEventListener("click", () =>
  import("./oregonInfo.js").then((OregonInfo) => {
    alert(`${OregonInfo.stateName}'s state bird is ${OregonInfo.stateBird}.`);
  })
);

// Importing Modules into HTML
// Although modules are most commonly imported into other JavaScript
// files, you can also import them into HTML files by setting the type
// attribute of a script tag to module. see oregon.html.
