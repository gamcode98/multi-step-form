import Plans from '../Plan/Plans'
import KindOfPlan from '../KindOfPlan/KindOfPlan'

function Step2() {
  return (
    <div className='bg-white rounded-lg w-[95%] mx-auto p-6 -translate-y-16 md:w-8/12 lg:translate-y-0 lg:px-0'>
      <h2 className='font-bold text-marine-blue text-2xl mb-2'>
        Select your plan
      </h2>
      <p className='text-cool-gray mb-4'>
        You have the option of monthly or yearly billing.
      </p>

      <Plans />
      <KindOfPlan />
    </div>
  )
}

export default Step2
