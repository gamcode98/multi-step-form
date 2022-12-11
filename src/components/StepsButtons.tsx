import { steps } from '../utils/steps'
import StepButton from './StepButton'

function StepsButtons() {
  return (
    <div className='flex justify-center gap-4 pt-8'>
      {steps.map((step, index) => (
        <StepButton key={index} step={step} />
      ))}
    </div>
  )
}

export default StepsButtons
