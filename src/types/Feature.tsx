export interface Feature {
  featured_id: number,
  program_id: number,
  author: Author
  program: Program
}

export interface Program {
  program_id: number,
  title: string,
  description: string,
  source_code: string,
  binary: any
  author: Author
}

interface Author {
  user_id: number,
  username: string
}

export interface User {
  user_id: number,
  username: string,
  role: string
}