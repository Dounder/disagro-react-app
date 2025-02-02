import { StateCreator } from 'zustand';
import { SelectionState } from '../[interfaces]';

export const createSelectionSlice: StateCreator<SelectionState> = (set) => ({
  products: [],
  services: [],

  addProduct: (product) => set((state) => ({ products: [...state.products, product] })),
  removeProduct: (productId) =>
    set((state) => ({ products: state.products.filter((product) => product.id !== productId) })),

  addService: (service) => set((state) => ({ services: [...state.services, service] })),
  removeService: (serviceId) =>
    set((state) => ({ services: state.services.filter((service) => service.id !== serviceId) })),
});
