# Risky EMU

Make and share toy programs for the RISC-V instruction set!

## Installation

1. Fork the current repository and clone it to your local machine.
2. Once cloned, open in a code editor of your choice (this application was created in VSCode).
3. Open a terminal within your code editor and used the command 'npm i' to install the required packages and dependencies.
4. Create a .env file and fill in the enviroment variables for the program. The environment variables for the backend are:
  - **REACT_APP_SERVER_URL:** URL of the server
5. Once all steps have been completed you can run the start script to begin running locally on your machine.

## Technologies Used

#### **React** - 
> The front end framework used to create the web application
#### **TypeScript** - 
> Strongly typed, object-oriented, complied programming language used in tandem with JavaScript and JSX to create this project
#### **Sass** -
> CSS preprocessor for more concise, modular styling
#### **dotenv** - 
> For environment variable declaration and security
#### **Monaco** - 
> The code editor that powers VSCode, accessible in React through the @monaco-editor/react package
#### **risc-v-emulator** -
> Package created for this project containing the logic for the RISC-V emulator and assembler. [Click here for package homepage](https://github.com/Aloeminium108/risc-v-emulator)

## Project Roadmap

### Goals

**Unprivileged RISC-V base instruction set emulation**
- [x] ~~RV32I~~
- [ ] RV64I

**RISC-V extensions**
- [ ] M (Standard Extension for Integer Multiplication and Division)
- [ ] F (Standard Extension for Single-Precision Floating-Point)
- [ ] A (Standard Extension for Atomic Instructions)
  - [ ] Parallelized core emulation

**RISC-V Assembler**
- [ ] Assembler for RV32I base ISA
  - [x] ~~Assembly of native instructions~~
  - [ ] Pseudo-instruction interpreter
  - [ ] Parse and calculate offsets for labels
  - [ ] Linking of symbols
  - [ ] Section directives
- [ ] Assembler for RV64I base ISA
- [ ] Assembly of instructions from select extensions
  - [ ] M
  - [ ] F
  - [ ] A

**Program Editor**
- [x] Basic text editor
- [ ] Syntax highlighting
- [ ] Basic linting

**Program execution view**
- [x] Basic view of registers
- [ ] Include RAM in view
- [ ] Graphical view with memory-mapped I/O

**UI/UX**
- [ ] Cohesive styling
- [ ] Responsive sizing and positioning
 
## Authors and Acknowledgment

#### Primary Lead and Scrum Master - [Aloeminium108](https://github.com/Aloeminium108)
---
#### Secondary Lead - [BLDubroff](https://github.com/BLDubroff)
---

## Contributing

For major changes, please open an issue first to discuss what you would like to change.

## License

N/A, this work is copyrighted by the authors.
The risc-v-emulator package created for this project, however, is under the permissive free software license, ISC.

## Project Status

Actively in development

