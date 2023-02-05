import { Entity } from '@project/core';
import { Guitar, GuitarString, GuitarType } from '@project/shared-types';

export class ProductEntity implements Entity<ProductEntity, Guitar>, Guitar {
  public id?: string;
  public title: string;
  public description: string;
  public createdAt?: Date;
  public image: string;
  public type: string;
  public article: string;
  public stringCount: string;
  public rating?: number;
  public price: number;
  public reviewCount?: number;

  constructor(product: Guitar) {
    this.fillEntity(product);
  }

  toObject(): ProductEntity {
    return {...this};
  }

  fillEntity(entity: Guitar): void {
    this.id = entity.id;
    this.title = entity.title;
    this.description = entity.description;
    this.createdAt = entity.createdAt;
    this.image = entity.image;
    this.type = entity.type;
    this.article = entity.article;
    this.stringCount = entity.stringCount;
    this.rating = entity.rating;
    this.price = entity.price;
    this.reviewCount = entity.reviewCount;  
  }  
}
