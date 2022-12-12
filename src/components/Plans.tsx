import { plans } from '../utils/plans'
import Plan from './Plan'

function Plans() {
  return (
    <div className='lg:flex lg:gap-4'>
      {plans.map((plan) => (
        <Plan key={plan.id} plan={plan} />
      ))}
    </div>
  )
}

export default Plans
