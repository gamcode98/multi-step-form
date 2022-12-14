import { steps } from '../../utils/steps'
import Step from './Step'

function Steps() {
  return (
    <div className='flex justify-center gap-4 pt-8 lg:h-full lg:flex-col lg:justify-start'>
      {steps.map((step) => (
        <Step key={step.id} step={step} />
      ))}
    </div>
  )
}

export default Steps
