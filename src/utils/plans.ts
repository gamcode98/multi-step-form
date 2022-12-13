import { IPlan } from '../interfaces/IPlan'

export const plans: IPlan[] = [
  {
    id: crypto.randomUUID(),
    name: 'Arcade',
    priceByMonth: 9,
    priceByYear: 90,
    image: '/src/assets/images/icon-arcade.svg',
  },
  {
    id: crypto.randomUUID(),
    name: 'Advanced',
    priceByMonth: 12,
    priceByYear: 120,
    image: '/src/assets/images/icon-advanced.svg',
  },
  {
    id: crypto.randomUUID(),
    name: 'Pro',
    priceByMonth: 15,
    priceByYear: 150,
    image: '/src/assets/images/icon-pro.svg',
  },
]
