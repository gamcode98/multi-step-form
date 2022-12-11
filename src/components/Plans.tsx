import { plans } from '../utils/plans'
import Plan from './Plan'

function Plans() {
  return (
    <>
      {plans.map((plan) => (
        <Plan key={plan.id} plan={plan} />
      ))}
    </>
  )
}

export default Plans
