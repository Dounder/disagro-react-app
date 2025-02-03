import { StateCreator } from 'zustand';
import { SelectionState } from '../[interfaces]';

export const createSelectionSlice: StateCreator<SelectionState> = (set) => ({
  items: [],

  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  removeItem: (itemId) => set((state) => ({ items: state.items.filter((item) => item.id !== itemId) })),

  resetSelectionState: () => set({ items: [] }),
});
