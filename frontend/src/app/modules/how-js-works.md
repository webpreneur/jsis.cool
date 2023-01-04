# How JavaScript Works

- ECMAScript engines (eg.: Google V8) translates .js code into machine code.

1. Parser: Lexical Analysis
2. AST (Abstract Syntax Tree)
3. Interpreter
   - translate and read the file line by line on the fly
   - quicker, there is no need to compile
     - when there is more code, or iterations, it gets slower
4. Profiler
5. Compiler
   - ahead of time (AoT), usually from a "language" to (a lower level) another
     language
   - able to optimize the code
6. Optimized Code

- Bytecode -> Machine code

## ECMAScript

Provides standards...

## JIT (Just in Time) Compiler

Interpreter (-> Bytecode) + Profiler + Compiler

## WebAssembly

Standard Binary Executable format. No need to interpret and compile in order to
run the JS code in the browser.

## Call Stack and Memory Heap

- js engine: reading and executing code
- memory heap: a place to store read and write information
  - unordered "box"
  - objects (arrays) are stored in the memory heap
  - garbage collection (garbage collector frees up unused memory) - not
    bulletproof!
  - memory leak: memory heap fulled
    - unremoved event listeners
    - global variables!
    - setInterval
- call stack: keep track of where we are in the code (in the execution)
  - operates in first in last out (FILO) mode
  - primitive variables are stored in the "function call"
  - stack overflow (eg.: recursion...)
  - stack trace (a "snippet" of the call stack)
  - single threaded (synchronous): there is only one call stack

## JavaScript Runtime

- single threaded: 1 thread, 1 heap
- The JS runtime (actually the browser) provides the Web API (fetch,
  setInterval, indexedDB, DOM)
  - it is asynchronous
- event loop: if the call stack is empty...

### Global Execution Context
