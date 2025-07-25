export interface Interfaces {
}


export interface Token{
   response_code: number,
   response_message: string,
   token: string,
}

export interface risposta{
  response_code: number,
  results: domanda[]
}

export interface domanda{
  type: string,
  difficulty: string,
  category: string,
  question: string,
  correct_answer: string,
  incorrect_answers: string[]
}

