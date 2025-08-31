let currentCard1 = 0;
let currentCard2 = 0;
let currentCard3 = 0;
let currentCard4 = 0;
let isFlipped1 = false;
let isFlipped2 = false;
let isFlipped3 = false;
let isFlipped4 = false;



const flashcards1 = [
    {
        term: "Variable",
        definition: "A named storage location that holds a value of a specific data type. Variables can be changed during program execution."
    },
    {
        term: "Data Type",
        definition: "Specifies the kind of data a variable can hold. Java has primitive types (int, double, boolean, char) and reference types (String, objects)."
    },
    {
        term: "Assignment Statement",
        definition: "Uses the = operator to store a value in a variable. The expression on the right is evaluated and stored in the variable on the left."
    },
    {
        term: "Arithmetic Expression",
        definition: "A combination of variables, numbers, and operators (+, -, *, /, %) that evaluates to a numeric value."
    },
    {
        term: "Compound Assignment",
        definition: "Operators like +=, -=, *=, /= that perform an operation and assign the result back to the variable (e.g., x += 5 is equivalent to x = x + 5)."
    },
    {
        term: "Casting",
        definition: "Converting one data type to another. Can be implicit (widening) or explicit (narrowing) using (datatype) syntax."
    },
    {
        term: "String Concatenation",
        definition: "Joining strings together using the + operator. When a string is involved, other data types are converted to strings."
    },
    {
        term: "Escape Sequence",
        definition: "Special character combinations starting with backslash (\\) like \\n (newline), \\t (tab), \\\" (quote) to represent special characters in strings."
    },
    {
        term: "Modulus Operator (%)",
        definition: "Returns the remainder after integer division. Useful for determining if numbers are even/odd or for cyclic operations."
    },
    {
        term: "Order of Operations",
        definition: "Java follows PEMDAS: Parentheses, Exponents (not in Java), Multiplication/Division/Modulus (left to right), Addition/Subtraction (left to right)."
    },
    {
        term: "Integer Division",
        definition: "When both operands are integers, division truncates the decimal part. For example, 7/3 equals 2, not 2.33."
    },
    {
        term: "Type Promotion",
        definition: "When operations involve different numeric types, smaller types are automatically promoted to larger types (int to double)."
    },
    {
        term: "Literal",
        definition: "A fixed value directly written in code. Examples: 42 (int literal), 3.14 (double literal), 'A' (char literal), \"Hello\" (String literal)."
    },
    {
        term: "Constants",
        definition: "Variables declared with 'final' keyword that cannot be changed after initialization. By convention, written in ALL_CAPS."
    },
    {
        term: "Primitive Types",
        definition: "Basic data types built into Java: byte, short, int, long, float, double, boolean, char. They store actual values, not references."
    },
    {
        term: "Reference Types",
        definition: "Data types that store references (addresses) to objects in memory. Examples: String, arrays, objects. Default value is null."
    },
    {
        term: "Boolean Operators",
        definition: "Logical operators that work with boolean values: && (AND), || (OR), ! (NOT). Used for combining conditions in if statements."
    },
    {
        term: "Comparison Operators",
        definition: "Operators that compare values and return boolean results: == (equal), != (not equal), < (less than), > (greater than), <= (less than or equal), >= (greater than or equal)."
    },
    {
        term: "Short-Circuit Evaluation",
        definition: "When using && or ||, Java stops evaluating as soon as the result is determined. For &&, stops if first is false; for ||, stops if first is true."
    },
    {
        term: "Increment/Decrement",
        definition: "Operators ++ and -- that increase or decrease a variable by 1. Pre-increment (++x) changes then uses; post-increment (x++) uses then changes."
    },
    {
        term: "String Methods",
        definition: "Built-in functions for String objects like length(), substring(), indexOf(), charAt(), equals(), compareTo(), and toUpperCase()."
    },
    {
        term: "Immutable Strings",
        definition: "Strings in Java cannot be modified after creation. String operations create new String objects rather than changing existing ones."
    },
    {
        term: "ASCII Values",
        definition: "Numeric codes for characters. 'A' = 65, 'a' = 97, '0' = 48. Can cast between char and int to work with ASCII values."
    },
    {
        term: "Variable Scope",
        definition: "The region of code where a variable can be accessed. Local variables exist only within the method/block where they're declared."
    },
    {
        term: "Method Signature",
        definition: "The method's name and parameter list (including types and order). Used by Java to distinguish between overloaded methods."
    },
    {
        term: "Static vs Instance",
        definition: "Static methods/variables belong to the class and can be called without creating an object. Instance methods/variables require an object."
    },
    {
        term: "Constructor",
        definition: "Special method with same name as class, used to initialize objects. Called automatically when creating new instances with 'new' keyword."
    },
    {
        term: "Object Instantiation",
        definition: "Creating a new object using the 'new' keyword followed by a constructor call. Allocates memory and initializes the object."
    },
    {
        term: "Null Pointer Exception",
        definition: "Runtime error that occurs when trying to use a reference variable that points to null. Common when forgetting to initialize objects."
    },
    {
        term: "Method Overloading",
        definition: "Having multiple methods with the same name but different parameter lists (different number or types of parameters) in the same class."
    },
    {
        term: "String & Primitive Concatenation",
        definition: "You can combine a string and a primitive data type (ex. an int) using “+” or “+=”, but this will lead to the primitive data type in the resulting concatenation to be a String object."
    },
    {
        term: "int length()",
        definition: "Returns the number of letters/digits/symbols/spaces in a String object."
    },
    {
        term: "(int) casting truncation",
        definition: "Converting from a double to an int will lead to the decimal point being truncated."
    },
    {
        term: "Sequencing",
        definition: "An order for different steps to be completed."
    },
    {
        term: "Syntax Error",
        definition: "When the rules of the coding language/program are not followed. This will be detected by the compiler."  
    },
    {
        term: "Truncation",
        definition: "This is when the decimal point for a value is cut off. This may happen when two ints are being divided, or when a double is casted to an int."  
    },
    {
        term: "static int abs(int x)",
        definition: "A Math class method that returns the absolute value of an int. There are many different types of Math class methods."  
    },
    {
        term: "String substring(int start, int end)",
        definition: "A method that returns the substring of a string beginning from the index  startand ending at the index end-1."  
    },
    {
        term: "int indexOf(String str)",
        definition: "A method that returns the index with the first instance of str in a String. If no such instance is found, then -1 is returned."  
    },
    {
        term: "int compareTo(String other)",
        definition: "A method that returns 0 if both values are equal, -1 if the String being compared to other is less than other, and 1 if the String being compared to other is greater than other. The values of the Strings are based on alphabetical order."  
    },
    {
        term: "String substring(int start)",
        definition: "A method that returns the substring of a string starting at index start and ending at the last index of the String."  
    },
    {
        term: "String substring(int start, int end)",
        definition: "A method that returns the substring of a string beginning from the index  startand ending at the index end-1."  
    },
    {
        term: "int indexOf(String str)",
        definition: "A method that returns the index with the first instance of str in a String. If no such instance is found, then -1 is returned."  
    },
    {
        term: "int compareTo(String other)",
        definition: "A method that returns 0 if both values are equal, -1 if the String being compared to other is less than other, and 1 if the String being compared to other is greater than other. The values of the Strings are based on alphabetical order."  
    }
];

function updateCard1() {
    const cardTerm1 = document.getElementById('cardTerm1');
    const cardDefinition1 = document.getElementById('cardDefinition1');
    const cardCounter1 = document.getElementById('cardCounter1');

    if (cardTerm1) {
        cardTerm1.textContent = flashcards1[currentCard1].term;
    }

    if (cardDefinition1) {
        cardDefinition1.textContent = flashcards1[currentCard1].definition;
    }

    if (cardCounter1) {
        cardCounter1.textContent = `${currentCard1 + 1} / ${flashcards1.length}`;
    }
}

function flipCard1() {
    const flashcard1 = document.getElementById('flashcard1');
    isFlipped1 = !isFlipped1;

    if (flashcard1) {
        flashcard1.classList.toggle('flipped', isFlipped1);
    }
}

function nextCard1() {
    isFlipped1 = false;
    const flashcard1 = document.getElementById('flashcard1');
    if (flashcard1) {
        flashcard1.classList.remove('flipped');
    }

    currentCard1 = (currentCard1 + 1) % flashcards1.length;
    updateCard1();
}

function prevCard1() {
    isFlipped1 = false;
    const flashcard1 = document.getElementById('flashcard1');
    if (flashcard1) {
        flashcard1.classList.remove('flipped');
    }

    currentCard1 = (currentCard1 - 1 + flashcards1.length) % flashcards1.length;
    updateCard1();
}

const flashcards2 = [
    {
        term: "== Operator",
        definition: "A boolean operator that checks whether two values are equal to each other. Mainly used to check primitive values."
    },
    {
        term: "!= Operator",
        definition: "A boolean operator that checks whether two values are not equal to each other. Mainly used to check primitive values."
    },
    {
        term: "if Statement",
        definition: "Executes the body of the if statement based if the statement’s condition is met."
    },
    {
        term: "if-else Statement",
        definition: "Executes the body of the if statement based on the statement’s condition if met. Otherwise, the body of the else statement is executed instead."
    },
    {
        term: "Multiway Selection",
        definition: "A series of segments in which different conditions lead to different blocks of code being executed."
    },
    {
        term: "Logical Operators",
        definition: " If the first part of a logical operation (a statement using logical operators) using || or && is determined to be false, the second part will not be checked."
    },
    {
        term: "Short-Circuit Evaluation",
        definition: "Joining strings together using the + operator. When a string is involved, other data types are converted to strings."
    },
    {
        term: "Nested if Statements",
        definition: "An if, if/else, or if/else if/else statement contained inside one or more if, if/else, or if/else if/else statements."
    },
    {
        term: "Iteration",
        definition: "When a segment of code is repeated over and over again as long as the boolean condition for running the segment stays true."
    },
    {
        term: "Loops",
        definition: "Loops use iteration, and they allow for a segment of code to be executed over and over as long as the loop’s boolean condition evaluates to true. There are different types of loops in Java."
    },
    {
        term: "Infinite Loops",
        definition: "Loops that return infinitely because the boolean condition that executes them is always evaluating to true.  Once the boolean evaluates to false, the loop stops. "
    },
    {
        term: "while Loop",
        definition: "An iteration statement that runs a segment of code while its condition’s boolean remains true.  Once the boolean evaluates to false, the loop stops. "
    },
    {
        term: "for Loop",
        definition: "An iteration statement that has three parts: an initialization, a boolean condition, and an updater. The initialization establishes an initial variablele, which allows for the statement(s) in the loop’s body to be executed over and over and for the updater to update the loop's control variable’s value as long as the boolean condition is evaluated to true. Once the boolean evaluates to false, the loop stops."
    },
    {
        term: "Loop Control Variable",
        definition: "A variable that is initialized in a for loop during the initialization part of a for loop."
    },
    {
        term: "Nested Iteration Statements",
        definition: "When an iteration statement is inside one or more iteration statements."
    },
    {
        term: "Statement Execution",
        definition: "Counting the number of times a statement will be executed by analyzing the iterative statements."
    },
    {
        term: "Off By One Error",
        definition: "An error in which an iteration statement runs one too little or one too many times."
    },
    {
        term: "One-Way Selection",
        definition: "When a segment of code executes under a certain condition. Another way to refer to an if statement."
    },
    {
        term: "Two-Way Selection",
        definition: "When a segment of code executed under a certain condition, or else a different segment runs. Another way to refer to an if-else statement."
    },
    {
        term: "Selection",
        definition: "The way a program will execute, depending on true/false statements."
    },
    {
        term: "Repetition",
        definition: "When a process is repeated over and over ntil it reaches the desired outcome."
    }
];

function updateCard2() {
    const cardTerm2 = document.getElementById('cardTerm2');
    const cardDefinition2 = document.getElementById('cardDefinition2');
    const cardCounter2 = document.getElementById('cardCounter2');

    if (cardTerm2) {
        cardTerm2.textContent = flashcards2[currentCard2].term;
    }

    if (cardDefinition2) {
        cardDefinition2.textContent = flashcards2[currentCard2].definition;
    }

    if (cardCounter2) {
        cardCounter2.textContent = `${currentCard2 + 1} / ${flashcards2.length}`;
    }
}

function flipCard2() {
    const flashcard2 = document.getElementById('flashcard2');
    isFlipped2 = !isFlipped2;

    if (flashcard2) {
        flashcard2.classList.toggle('flipped', isFlipped2);
    }
}

function nextCard2() {
    isFlipped2 = false;
    const flashcard2 = document.getElementById('flashcard2');
    if (flashcard2) {
        flashcard2.classList.remove('flipped');
    }

    currentCard2 = (currentCard2 + 1) % flashcards2.length;
    updateCard2();
}

function prevCard2() {
    isFlipped2 = false;
    const flashcard2 = document.getElementById('flashcard2');
    if (flashcard2) {
        flashcard2.classList.remove('flipped');
    }

    currentCard2 = (currentCard2 - 1 + flashcards2.length) % flashcards2.length;
    updateCard2();
}
const flashcards3 = [
    {
        term: "Abstraction",
        definition: " Focusing on the basics/essentials of a program and not on details in order to focus better on the overall idea."
    },
    {
        term: "Local Variables",
        definition: "Variables that are created in the header or body of a block of code. These variables can only be accessed within this block of code."
    },
    {
        term: "Return Keyword",
        definition: "This statement indicates to stop the execution of a block of code in a method or constructor and to go back to the point in the code code where the method/constructor was executed. Most of the time, there will be a value returned to this point in the code."
    },
    {
        term: "void Methods",
        definition: "These methods have the void keyword in their headers and do not return a value."
    },
    {
        term: "Non-void Methods",
        definition: "These methods do not have the void keyword in their header and return a value. They have the data type that will be returned in their header, though."
    },
    {
        term: "Accessor Methods",
        definition: "Gets a copy of but does not change the values of instance and class variables. There are non-void methods."
    },
    {
        term: "Mutator Methods",
        definition: "Change/modify values of instance and class variables. These are void methods."
    },
    {
        term: "Constructors",
        definition: "Used to set the initial values of instance variables."
    },
    {
        term: "Attribute",
        definition: "A data abstraction that is created inside a class but outside of any method or constructor."
    },
    {
        term: "System Reliability",
        definition: "The ability of a program to be able to do its job as expected without having any errors."
    },
    {
        term: "Default Attribute Values",
        definition: "The default values given to variables. If a value isn’t assigned to a variable, then its value will be its default attribute value."
    },
    {
        term: "Default Attribute Value For An Int",
        definition: "0"
    },
    {
        term: "Default Attribute Value For A Double",
        definition: "0.0"
    },
    {
        term: "Default Attribute Value For A String",
        definition: "null"
    },
    {
        term: "Default Attribute Value For A Boolean",
        definition: "false"
    },
    {
        term: "Instance Variable",
        definition: "A variable that has a unique value for each instance of the class."
    },
    {
    term: "Default Constructor",
        definition: "A constructor with no parameters that sets instance variables to default values."
    },
    {
    term: "Open Source Code",
        definition: "Programmers often reuse code that is free to use and open source. Programmers need to get permission from publishers to use code that is not open source."
    }
    
];

function updateCard3() {
    const cardTerm3 = document.getElementById('cardTerm3');
    const cardDefinition3 = document.getElementById('cardDefinition3');
    const cardCounter3 = document.getElementById('cardCounter3');

    if (cardTerm3) {
        cardTerm3.textContent = flashcards3[currentCard3].term;
    }

    if (cardDefinition3) {
        cardDefinition3.textContent = flashcards3[currentCard3].definition;
    }

    if (cardCounter3) {
        cardCounter3.textContent = `${currentCard3 + 1} / ${flashcards3.length}`;
    }
}

function flipCard3() {
    const flashcard3 = document.getElementById('flashcard3');
    isFlipped3 = !isFlipped3;

    if (flashcard3) {
        flashcard3.classList.toggle('flipped', isFlipped3);
    }
}

function nextCard3() {
    isFlipped3 = false;
    const flashcard3 = document.getElementById('flashcard3');
    if (flashcard3) {
        flashcard3.classList.remove('flipped');
    }

    currentCard3 = (currentCard3 + 1) % flashcards3.length;
    updateCard3();
}

function prevCard3() {
    isFlipped3 = false;
    const flashcard3 = document.getElementById('flashcard3');
    if (flashcard3) {
        flashcard3.classList.remove('flipped');
    }

    currentCard3 = (currentCard3 - 1 + flashcards3.length) % flashcards3.length;
    updateCard3();
}
const flashcards4 = [
    {
        term: "Algorithmic Bias",
        definition: "Errors in a program that lead to biased results."
    },
    {
        term: "Data Sets",
        definition: "A data set is a collection of data or specific information pieces. These should be unbiased, and they should be carefully checked before being used. Incomplete or biased data sets can lead to inaccurate, biased results."
    },
    {
        term: "Arrays",
        definition: "Arrays are used to store multiple values that are of the same data type."
    },
    {
        term: "Array Length",
        definition: "This is the amount of values that an array can hold. It is established during the initialization of the array and is immutable (cannot be changed)."
    },
    {
        term: ".length",
        definition: "Used to find the length of an array. Note that unlike .length(), which is used for Strings, .length doesn't have any parentheses."
    },
    {
        term: "2-D Arrays",
        definition: "This stores an array or arrays, and it has both a number of rows and a number of columns."
    },
    {
        term: "Array Declaration",
        definition: "When an array is declared using the new keyword, all of the initial values inside the array are set to default values. For example, if you use the new keyword to create an array of ints, initially the value of each int stored in the array will be 0."
    },
    {
        term: "Array Indexes",
        definition: "Array indexes are used to help locate a value inside of the array. Each index coordinates with a value’s position in the array, with indexes starting at 0."
    },
    {
        term: "Traversing An Array",
        definition: "When repetition is used to access every element inside of an array. For example, you could use a for loop to iterate through an array."
    },
    {
        term: "Scanners",
        definition: "These are used to read inputs from sources of input and files."
    },
    {
        term: "Scanner name (File f)",
        definition: "This is used to create a new scanner that will read File f."
    },
    {
        term: "next()",
        definition: "Returns the next String read by a scanner from a source of input or file. If there is no next String, that would result in an InputMismatchException."
    },
    {
        term: "nextInt()",
        definition: "Returns the next int read by a scanner from a source of input or a file. If there is no next String, that would result in an InputMismatchException."
    },
    {
        term: "nextDouble()",
        definition: "Returns the next Double read by a scanner from a source of input or a file. If there is no next String, that would result in an InputMismatchException."
    },
    {
        term: "nextLine()",
        definition: "Returns the next line of text as a String, or an empty line if it is immediately called after another Scanner reading from the same source of input or file."
    },
    {
        term: "hasNext()",
        definition: "Returns true if there is a next item that can be read from the source of input or the file, and returns false if there isn’t."
        
    },
    {
        term: "close()",
        definition: "Used to close a scanner"

    },
    {
        term: "String[ ] split(String del)",
        definition: "Used to create an array where each value of the array is a substring of the String that has been separated wherever del’s expression is matched"

    },
    {
        term: "Array Algorithms",
        definition: "There are many standard array algorithms that can be used to do multiple things, such as to find the minimum value in an array or find an average."

    },
    {
        term: "ArrayList",
        definition: "Contains object references and is mutable."

    },
    {
        term: "ArrayList()",
        definition: "A constructor that creates an ArrayList."

    },
    {
        term: "ArrayList Import",
        definition: "The package to create an ArrayList must be imported using java.util."

    },
    {
        term: "int(size) for ArrayList",
        definition: "A method that returns the size of an ArrayList."

    },
    {
        term: "boolean add(E object) for ArrayList",
        definition: "Returns true and adds the object to the end of the ArrayList."

    },
    {
        term: "E get(int index)",
        definition: "Returns the ArrayList’s element at the given index."

    },
    {
        term: "void add(int index, E object)",
        definition: "Adds an object to the ArrayList at the specified index."

    },
    {
        term: "E get(int index)",
        definition: "Returns the object at the given index of the ArrayList."

    },
    {
        term: "E set(int index, E object)",
        definition: "Replaces the object at the index given with the object given."

    },
    {
        term: "Starting Indice For An ArrayList",
        definition: "0"

    },
    {
        term: "Ending Indice For An ArrayList",
        definition: "-1 (or size-1)"

    }
];

function updateCard4() {
    const cardTerm4 = document.getElementById('cardTerm4');
    const cardDefinition4 = document.getElementById('cardDefinition4');
    const cardCounter4 = document.getElementById('cardCounter4');

    if (cardTerm4) {
        cardTerm4.textContent = flashcards4[currentCard4].term;
    }

    if (cardDefinition4) {
        cardDefinition4.textContent = flashcards4[currentCard4].definition;
    }

    if (cardCounter4) {
        cardCounter4.textContent = `${currentCard4 + 1} / ${flashcards4.length}`;
    }
}

function flipCard4() {
    const flashcard4 = document.getElementById('flashcard4');
    isFlipped4 = !isFlipped4;

    if (flashcard4) {
        flashcard4.classList.toggle('flipped', isFlipped4);
    }
}

function nextCard4() {
    isFlipped4 = false;
    const flashcard4 = document.getElementById('flashcard4');
    if (flashcard4) {
        flashcard4.classList.remove('flipped');
    }

    currentCard4 = (currentCard4 + 1) % flashcards4.length;
    updateCard4();
}

function prevCard4() {
    isFlipped4 = false;
    const flashcard4 = document.getElementById('flashcard4');
    if (flashcard4) {
        flashcard4.classList.remove('flipped');
    }

    currentCard4 = (currentCard4 - 1 + flashcards4.length) % flashcards4.length;
    updateCard4();
}

// Initialize the flashcards when the page loads
document.addEventListener('DOMContentLoaded', function() {
    updateCard1();
    updateCard2();
    updateCard3();
    updateCard4();
});
