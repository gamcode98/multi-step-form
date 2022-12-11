import { steps } from '../utils/steps'
import StepButton from './StepButton'

function StepsButtons() {
  return (
    <div className='flex justify-center gap-4 pt-8 lg:h-full lg:flex-col lg:justify-start'>
      {steps.map((step) => (
        <StepButton key={step.id} step={step} />
      ))}
    </div>
  )
}

export default StepsButtons
