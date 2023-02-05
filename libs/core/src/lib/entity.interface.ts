export interface Entity<T,U> {
  toObject(): T;
  fillEntity(entity: U): void;
}
