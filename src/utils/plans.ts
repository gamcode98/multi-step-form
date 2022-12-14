import { IPlan } from '../interfaces/IPlan'
import ArcadeIcon from '/src/assets/images/icon-arcade.svg'
import AdvancedIcon from '/src/assets/images/icon-advanced.svg'
import ProIcon from '/src/assets/images/icon-pro.svg'

export const plans: IPlan[] = [
  {
    id: crypto.randomUUID(),
    name: 'Arcade',
    priceByMonth: 9,
    priceByYear: 90,
    image: ArcadeIcon,
  },
  {
    id: crypto.randomUUID(),
    name: 'Advanced',
    priceByMonth: 12,
    priceByYear: 120,
    image: AdvancedIcon,
  },
  {
    id: crypto.randomUUID(),
    name: 'Pro',
    priceByMonth: 15,
    priceByYear: 150,
    image: ProIcon,
  },
]
