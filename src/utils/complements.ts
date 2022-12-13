import { IComplement } from '../interfaces/IComplement'

export const complements: IComplement[] = [
  {
    id: crypto.randomUUID(),
    name: 'Online service',
    description: 'Access to multiplayer games',
    priceByMonth: 1,
    priceByYear: 10,
  },
  {
    id: crypto.randomUUID(),
    name: 'Larger storage',
    description: 'Extra 1TB of cloud save',
    priceByMonth: 2,
    priceByYear: 10,
  },
  {
    id: crypto.randomUUID(),
    name: 'Customizable profile',
    description: 'Custom theme on your profile',
    priceByMonth: 2,
    priceByYear: 20,
  },
]
