# Deno

- Deno is a JavaScript / TypeScript runtime.
- Built on Google's V8 engine (written in C++).
    - V8 engine compiles down JS to machine code.
    - Deno / Node is a shell around V8.
        - Deno takes TS, compiles it down into JS then passes it to V8
- Written in Rust (heavily invested by Mozilla)

## Deno Runtime

### Deno Process

A Process is like a sandbox, it gets memory allocated, etc.

rusty_v8 (Rust is safer and more performant than C++)

tokyo

## Resources

### NodeJS - The Complete Guide

Master Node JS & Deno.js, build REST APIs with Node.js, GraphQL APIs, add Authentication, use MongoDB, SQL & much more!

[Section 34 - An introduction to Deno (1hr 34min)](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/20342199#overview)

[Section 35 - Deno, CRUD & Databases (MongoDB) (38min)](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/20345165#overview)

#### Key differences from Node

- URL imports
    - no npm install needed!
    - no local dependency files

- Out of the box modern JS features. Eg.: ES Modules?, Promises, fetch API.
- Secure by default (requires permissions)
- Standard libraries
    - tested and authored by the deno developers
- Built-in tooling
    - test
    - code formatting
    - file  watcher
- Browser compatible API
- Single executable
    - 
- Async always returns Promises
    - rust futures...
- Opinionated Modules
    - Deno Style Guide! - it makes sure to have a standard (Deno Style Guide)[https://deno.land/manual@v1.29.1/references/contributing/style_guide]

## Security
- Sandboxes
- Virtual Machines
- Containers

## Modules

- importing by referencing urls
- `deno info 'file-path.js'`
- it is mandatory to give expicitly the file extension
- external vs. internal modules
- standard library
    - maintained by the deno team
- 3rd party modules
- caching
    - `$DENO_DIR`
    - we can commit the cached dependencies
- `mod.ts` - go language convention mod for module
- lock `--lock=lock.json`



#### Deno Runtime (Namespace) API

Available by default. Low level core functionalities.

#### Standard libraries

It has to be imported, but maintained by Deno team. Reviewed and audited!

##### Oak

- CRUD
- CORS

#### 3rd party modules

Developed by the community.

#### Style Guide

- Folder and file names must be seperated by an underscore, not a dash.

### ZTM - Deno Course [LEGACY] - deno 1.0.0

Master Deno and learn to build professional scale Deno apps! The must learn technology of 2022 for JavaScript developers

[ZTM - Deno Course [LEGACY]](https://www.udemy.com/course/deno-the-complete-guide-zero-to-mastery/)

