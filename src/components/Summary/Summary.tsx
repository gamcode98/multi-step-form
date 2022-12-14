import { useFormikContext } from 'formik'
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import { IFormikValues } from '../../interfaces/IFormikValues'

function Summary() {
  const { values } = useFormikContext<IFormikValues>()
  const { handleCurrentStep } = useContext(AppContext)

  const getTotal = () => {
    const kindOfPrice = !values.kindOfPlan ? 'priceByMonth' : 'priceByYear'

    const priceOfPlan = !values.kindOfPlan
      ? values.plan.priceByMonth
      : values.plan.priceByYear

    const result = values.complements
      .map((complement) => complement[kindOfPrice])
      .reduce((previous, current) => previous + current, priceOfPlan)

    return !values.kindOfPlan ? `+$${result}/mo` : `+$${result}/yr`
  }

  return (
    <>
      <div className='bg-magnolia rounded-md p-4'>
        <div className='flex justify-between items-center pb-4 mb-4 border-b border-light-gray'>
          <div>
            <p className='text-marine-blue font-bold'>
              {values.plan.name} ({!values.kindOfPlan ? 'Monthly' : 'Yearly'})
            </p>
            <button
              type='button'
              onClick={() => handleCurrentStep(2)}
              className='text-cool-gray relative after:absolute after:left-0 after:right-0 after:bottom-1 after:border after:block'
            >
              Change
            </button>
          </div>
          <span className='text-marine-blue font-bold'>
            $
            {!values.kindOfPlan
              ? `${values.plan.priceByMonth}/mo`
              : `${values.plan.priceByYear}/yr`}
          </span>
        </div>

        {values.complements.map((value) => (
          <div
            key={value.id}
            className='flex justify-between items-center mb-4 last:mb-0'
          >
            <span className='text-cool-gray'>{value.name}</span>
            <span className='text-marine-blue'>
              +$
              {!values.kindOfPlan
                ? `${value.priceByMonth}/mo`
                : `${value.priceByYear}/yr`}
            </span>
          </div>
        ))}
      </div>
      <div className='flex justify-between items-center mb-4 p-4'>
        <span className='text-cool-gray font-medium'>
          Total (per {!values.kindOfPlan ? 'month' : 'year'})
        </span>
        <span className='text-purplish-blue font-bold'>{getTotal()}</span>
      </div>
    </>
  )
}

export default Summary
