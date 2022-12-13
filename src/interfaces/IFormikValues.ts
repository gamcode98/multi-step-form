import { IComplement } from './IComplement'

export interface IFormikValues {
  name: string
  email: string
  phoneNumber: string
  kindOfPlan: boolean
  plan: string
  complements: IComplement[] | []
}
