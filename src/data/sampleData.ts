interface AnswerShape{
  question:string;
  options:string[];
  correctOptionIndex:number;
  questionNumber:number
}
export const questionAnswerCollection:AnswerShape[] = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "Berlin", "Madrid", "Rome"],
    correctOptionIndex: 0,
    questionNumber: 1,
  },
  {
    question: "Who is the founder of SpaceX?",
    options: ["Bill Gates", "Elon Musk", "Mark Zuckerberg", "Jeff Bezos"],
    correctOptionIndex: 1,
    questionNumber: 2,
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    correctOptionIndex: 1,
    questionNumber: 3,
  },
  {
    question: "Who directed the movie Inception?",
    options: [
      "Martin Scorsese",
      "Christopher Nolan",
      "Steven Spielberg",
      "Quentin Tarantino",
    ],
    correctOptionIndex: 1,
    questionNumber: 4,
  },
  {
    question: "Who is the current Prime Minister of Canada?",
    options: [
      "Justin Trudeau",
      "Andrew Scheer",
      "Jagmeet Singh",
      "Erin O'Toole",
    ],
    correctOptionIndex: 0,
    questionNumber: 5,
  },
  {
    question: "Who wrote the book 'Beyond Good and Evil'?",
    options: [
      "Friedrich Nietzsche",
      "Jean-Paul Sartre",
      "Immanuel Kant",
      "Rene Descartes",
    ],
    correctOptionIndex: 0,
    questionNumber: 6,
  },
  {
    question:
      "What is the name of the famous experiment where participants were asked to administer electric shocks to others?",
    options: [
      "Stanford Prison Experiment",
      "Milgram Experiment",
      "Asch Conformity Experiment",
      "Pavlovian Conditioning Experiment",
    ],
    correctOptionIndex: 1,
    questionNumber: 7,
  },
  {
    question: "Who developed the theory of psychoanalysis?",
    options: ["Sigmund Freud", "Carl Jung", "Alfred Adler", "Erik Erikson"],
    correctOptionIndex: 0,
    questionNumber: 8,
  },
  {
    question:
      "What is the philosophical concept that describes the subjective and emotional aspect of human experience?",
    options: ["Epistemology", "Metaphysics", "Phenomenology", "Existentialism"],
    correctOptionIndex: 2,
    questionNumber: 9,
  },
  {
    question:
      "What is the name of the philosophical doctrine that states that knowledge is only derived from experience?",
    options: ["Rationalism", "Empiricism", "Idealism", "Existentialism"],
    correctOptionIndex: 1,
    questionNumber: 10,
  },
];
