import { DISCOUNT_RULES } from '../[helpers]';
import { ItemsDiscounts, ItemSelection } from '../[interfaces]';

export class DiscountCalculation {
  static calculateTotal = (products: ItemSelection[], services: ItemSelection[]): ItemsDiscounts => {
    const productsDiscountRate = this.calculateProducts(products);
    const servicesDiscountRate = this.calculateServices(services);

    return { productsDiscountRate, servicesDiscountRate };
  };

  static calculateDiscount = (quantity: number, total?: number): number => {
    const applicableDiscount = DISCOUNT_RULES.find(({ condition }) => condition(quantity, total));
    return applicableDiscount?.discount || 0;
  };

  static calculateProducts = (products: ItemSelection[]): number => {
    const discount = this.calculateDiscount(products.length);

    return discount * 100;
  };

  static calculateServices = (services: ItemSelection[]): number => {
    const totalServices = services.reduce((acc, { price }) => acc + Number(price), 0);
    const discount = this.calculateDiscount(services.length, totalServices);

    return discount * 100;
  };
}
