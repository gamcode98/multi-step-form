import { useFormikContext } from 'formik'
import { IFormikValues } from '../../interfaces/IFormikValues'

function Summary() {
  const { values } = useFormikContext<IFormikValues>()

  console.log({ values })

  return (
    <>
      <div className='bg-magnolia rounded-md p-4'>
        <div className='flex justify-between items-center pb-4 mb-4 border-b border-light-gray'>
          <div>
            <p className='text-marine-blue font-bold'>
              {values.plan} ({!values.kindOfPlan ? 'Monthly' : 'Yearly'})
            </p>
            <span className='text-cool-gray relative after:absolute w-full after:left-0 after:right-0 after:bottom-0 after:border after:block'>
              Change
            </span>
          </div>
          <span className='text-marine-blue font-bold'>{values.plan}</span>
        </div>

        {values.complements.map((value, index) => (
          <div
            key={index}
            className='flex justify-between items-center mb-4 last:mb-0'
          >
            <span className='text-cool-gray'>{value.name}</span>
            <span className='text-marine-blue'>+{value.priceByMonth}</span>
          </div>
        ))}
      </div>
      <div className='flex justify-between items-center mb-4 p-4'>
        <span className='text-cool-gray font-medium'>Total (per month)</span>
        <span className='text-purplish-blue font-bold'>+12/mo</span>
      </div>
    </>
  )
}

export default Summary
