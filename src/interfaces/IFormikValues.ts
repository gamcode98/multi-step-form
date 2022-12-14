import { IComplement } from './IComplement'

export interface IFormikValues {
  name: string
  email: string
  phoneNumber: string
  kindOfPlan: boolean
  plan: {
    name: string
    priceByMonth: number
    priceByYear: number
  }
  complements: IComplement[] | []
}
