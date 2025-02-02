import { useAttendanceStore } from '../[stores]';
import { DiscountCalculation } from '../[util]';

export const useDiscount = () => {
  const items = useAttendanceStore((state) => state.items);

  const getProductsDiscount = () => {
    const products = items.filter((item) => item.type === 'producto');
    return DiscountCalculation.calculateProducts(products);
  };

  const getServicesDiscount = () => {
    const services = items.filter((item) => item.type === 'servicio');
    return DiscountCalculation.calculateServices(services);
  };

  return {
    getProductsDiscount,
    getServicesDiscount,
  };
};
