export const CommentValidation = {
  PositiveLength: {
    min: 50,
    max: 100,
  },
  NegativeLength: {
    min: 50,
    max: 100,
  },
  TextLength: {
    min: 5,
    max: 1024,
  },
  Rating: {
    min: 1,
    max: 5,
  }

} as const;
