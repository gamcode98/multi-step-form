import { createContext, useState } from 'react'

export const PlanContext = createContext({
  selectedPlan: 'Arcade',
  handlePlan: (plan: string) => {},
})

export const PlanProvider = ({ children }: { children: JSX.Element }) => {
  const [selectedPlan, setSelectedPlan] = useState('Arcade')

  const handlePlan = (plan: string) => setSelectedPlan(plan)

  const value = { selectedPlan, handlePlan }

  return <PlanContext.Provider value={value}>{children}</PlanContext.Provider>
}
