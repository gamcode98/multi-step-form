import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import { IStep } from '../../interfaces/IStep'

function Step({ step }: { step: IStep }) {
  const { currentStep } = useContext(AppContext)

  return (
    <div className='lg:flex lg:items-center lg:gap-4 lg:ml-6'>
      <span
        className={`border rounded-full w-8 h-8 block text-center leading-[1.8] ${
          step.numberStep === currentStep
            ? 'border-light-blue bg-light-blue text-marine-blue font-bold'
            : 'border-light-gray text-white'
        }`}
      >
        {step.numberStep}
      </span>
      <div className='hidden lg:flex lg:flex-col lg:text-white lg:w-32  lg:tracking-widest'>
        <span className='uppercase text-light-gray text-sm text-start'>
          step {step.numberStep}
        </span>
        <span className='uppercase font-bold text-start'>{step.text}</span>
      </div>
    </div>
  )
}

export default Step
