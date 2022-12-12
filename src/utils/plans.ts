import { IPlan } from '../interfaces/IPlan'

export const plans: IPlan[] = [
  {
    id: crypto.randomUUID(),
    name: 'Arcade',
    priceByMonth: '$9/mo',
    priceByYear: '$90/yr',
    image: '/src/assets/images/icon-arcade.svg',
  },
  {
    id: crypto.randomUUID(),
    name: 'Advanced',
    priceByMonth: '$12/mo',
    priceByYear: '$120/yr',
    image: '/src/assets/images/icon-advanced.svg',
  },
  {
    id: crypto.randomUUID(),
    name: 'Pro',
    priceByMonth: '$15/mo',
    priceByYear: '$150/yr',
    image: '/src/assets/images/icon-pro.svg',
  },
]
