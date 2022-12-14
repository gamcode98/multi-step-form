import { useFormikContext } from 'formik'
import { IFormikValues } from '../../interfaces/IFormikValues'

function KindOfPlan() {
  const { values, handleChange } = useFormikContext<IFormikValues>()

  return (
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
          defaultChecked={values.kindOfPlan}
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
  )
}

export default KindOfPlan
