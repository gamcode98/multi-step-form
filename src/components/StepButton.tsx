import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { IStep } from '../interfaces/IStep'

function StepButton({ step }: { step: IStep }) {
  const { currentStep } = useContext(AppContext)

  return (
    <button
      className={`border rounded-full w-8 h-8 lg:flex lg:items-center lg:relative lg:ml-4 lg:mb-4 ${
        step.numberStep === currentStep
          ? 'border-light-blue bg-light-blue text-marine-blue font-bold'
          : 'border-light-gray text-white'
      }`}
    >
      <span className='lg:w-full'>{step.numberStep}</span>
      <div className='hidden lg:flex lg:flex-col lg:text-white lg:absolute lg:w-32 lg:translate-x-12 lg:tracking-widest'>
        <span className='uppercase text-light-gray text-sm text-start'>
          step {step.numberStep}
        </span>
        <span className='uppercase font-bold text-start'>{step.text}</span>
      </div>
    </button>
  )
}

export default StepButton
