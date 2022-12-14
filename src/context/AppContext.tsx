import { createContext, useState } from 'react'

export const AppContext = createContext({
  currentStep: 1,
  handleCurrentStep: (step: number) => {},
  selectedPlan: { name: 'Arcade', priceByMonth: 9, priceByYear: 90 },
  handlePlan: (plan: any) => {},
})

export const AppProvider = ({ children }: { children: JSX.Element }) => {
  const [currentStep, setCurrentStep] = useState(1)

  const handleCurrentStep = (step: number) => setCurrentStep(step)

  const [selectedPlan, setSelectedPlan] = useState({
    name: 'Arcade',
    priceByMonth: 9,
    priceByYear: 90,
  })

  const handlePlan = (plan: any) => setSelectedPlan(plan)

  const value = { currentStep, handleCurrentStep, selectedPlan, handlePlan }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
