export const UserValidation = {
  NameLength: {
    min: 1,
    max: 15,
  },
  PasswordLength: {
    min: 6,
    max: 12,
  },
} as const;
