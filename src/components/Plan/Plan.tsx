import { useFormikContext } from 'formik'
import { IFormikValues } from '../../interfaces/IFormikValues'
import { IPlan } from '../../interfaces/IPlan'

function Plan({ plan }: { plan: IPlan }) {
  const { values, setFieldValue } = useFormikContext<IFormikValues>()

  return (
    <label htmlFor={plan.id} className='w-full lg:hover:cursor-pointer'>
      <input
        type='radio'
        name='plan'
        id={plan.id}
        className='peer/plan hidden'
        onChange={() => {
          setFieldValue('plan', {
            name: plan.name,
            priceByMonth: plan.priceByMonth,
            priceByYear: plan.priceByYear,
          })
        }}
        checked={values.plan.name === plan.name}
      />

      <div
        className={`flex items-center gap-4 border border-light-gray p-4 rounded-md peer-checked/plan:border-purplish-blue peer-checked/plan:bg-magnolia mb-4 lg:flex-col lg:items-start`}
      >
        <img src={plan.image} alt={plan.image} className='lg:mb-4' />
        <div>
          <p className='font-bold'>{plan.name}</p>
          {values.kindOfPlan ? (
            <>
              <p className='text-cool-gray font-medium'>
                ${plan.priceByYear}/yr
              </p>
              <p className='text-marine-blue font-medium'>2 months free</p>
            </>
          ) : (
            <p className='text-cool-gray font-medium'>
              ${plan.priceByMonth}/mo
            </p>
          )}
        </div>
      </div>
    </label>
  )
}

export default Plan
