import Plans from '../Plan/Plans'
import { useFormikContext } from 'formik'
import { PlanProvider } from '../../context/PlanContext'
import { IFormikValues } from '../../interfaces/IFormikValues'

function Step2() {
  const { values, handleChange } = useFormikContext<IFormikValues>()

  return (
    <PlanProvider>
      <div className='bg-white rounded-lg w-[95%] mx-auto p-6 -translate-y-16 md:w-8/12 lg:translate-y-0 lg:px-0'>
        <h1 className='font-bold text-marine-blue text-2xl mb-2'>
          Select your plan
        </h1>
        <p className='text-cool-gray mb-4'>
          You have the option of monthly or yearly billing.
        </p>

        <Plans />
        <div className='flex justify-center gap-4 p-4 rounded-md bg-magnolia mb-4'>
          <span
            className={`${
              !values.kindOfPlan ? 'text-marine-blue' : 'text-cool-gray'
            } font-medium`}
          >
            Monthly
          </span>
          <label className='inline-flex relative items-center cursor-pointer'>
            <input
              type='checkbox'
              name='kindOfPlan'
              defaultChecked={false}
              value={values.kindOfPlan.toString()}
              onChange={handleChange}
              className='sr-only peer'
              id='plan'
            />
            <div className="w-12 h-6 bg-marine-blue peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[4px] after:bg-white after:border-marine-blue after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
          <span
            className={`${
              values.kindOfPlan ? 'text-marine-blue' : 'text-cool-gray'
            } font-medium`}
          >
            Yearly
          </span>
        </div>
      </div>
    </PlanProvider>
  )
}

export default Step2
