import { GuitarType, GuitarString } from '@project/shared-types';

export const GuitarValidation = {
  TitleLength: {
    min: 10,
    max: 100,
  },
  DescriptionLength: {
    min: 20,
    max: 1024,
  },
  Image: {
    fileType: /image\/(jpg|png)$/,
  },
  ArticleLength: {
    min: 5,
    max: 40,
  },
  Type: GuitarType,
  GuitarString: GuitarString,
  Rating: {
    min: 0,
    max: 5,
  },
  Price: {
    min: 100,
    max: 1000000,
  }
} as const;
