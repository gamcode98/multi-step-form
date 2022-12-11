import { createContext, useState } from 'react'

export const AppContext = createContext({
  currentStep: 2,
  handleCurrentStep: (step: number) => {},
})

export const AppProvider = ({ children }: { children: JSX.Element }) => {
  const [currentStep, setCurrentStep] = useState(2)

  const handleCurrentStep = (step: number) => setCurrentStep(step)

  const value = { currentStep, handleCurrentStep }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
