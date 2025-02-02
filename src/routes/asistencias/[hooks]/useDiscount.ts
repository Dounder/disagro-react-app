import { useAttendanceStore } from '../[stores]';
import { DiscountCalculation } from '../[util]';

export const useDiscount = () => {
  const items = useAttendanceStore((state) => state.items);

  const getProductsDiscount = () => {
    const products = items.filter((item) => item.type === 'product');
    return DiscountCalculation.calculateProducts(products);
  };

  const getServicesDiscount = () => {
    const services = items.filter((item) => item.type === 'service');
    return DiscountCalculation.calculateServices(services);
  };

  return {
    getProductsDiscount,
    getServicesDiscount,
  };
};
