import { createContext, useState } from 'react'

export const PlanContext = createContext({
  selectedPlan: { name: 'Arcade', priceByMonth: 9, priceByYear: 90 },
  handlePlan: (plan: any) => {},
})

export const PlanProvider = ({ children }: { children: JSX.Element }) => {
  const [selectedPlan, setSelectedPlan] = useState({
    name: 'Arcade',
    priceByMonth: 9,
    priceByYear: 90,
  })

  const handlePlan = (plan: any) => setSelectedPlan(plan)

  const value = { selectedPlan, handlePlan }

  return <PlanContext.Provider value={value}>{children}</PlanContext.Provider>
}
