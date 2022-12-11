import { Step } from '../interfaces/Step'

function StepButton({ step }: { step: Step }) {
  return (
    <button className='border border-light-gray rounded-full w-8 h-8'>
      <span className='text-white'>{step.numberStep}</span>
      <span className='hidden'>step {step.numberStep}</span>
      <span className='hidden'>{step.text}</span>
    </button>
  )
}

export default StepButton
