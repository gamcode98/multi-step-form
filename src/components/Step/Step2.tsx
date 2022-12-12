import { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import Plans from '../Plan/Plans'
import { Field, Form, Formik, useField, useFormik } from 'formik'
import { PlanContext, PlanProvider } from '../../context/PlanContext'

function Step2() {
  const { currentStep } = useContext(AppContext)

  const { selectedPlan } = useContext(PlanContext)

  const [kindOfPlan, setKindOfPlan] = useState(true)

  const initialValues = () => {
    return {
      kindOfPlan: false,
      plan: selectedPlan,
    }
  }

  return (
    <PlanProvider>
      <Formik
        initialValues={initialValues()}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2))
        }}
      >
        {(formik) => (
          <form className='w-full' onSubmit={formik.handleSubmit}>
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
                    !formik.values.kindOfPlan
                      ? 'text-marine-blue'
                      : 'text-cool-gray'
                  } font-medium`}
                >
                  Monthly
                </span>
                <label className='inline-flex relative items-center cursor-pointer'>
                  <input
                    type='checkbox'
                    name='kindOfPlan'
                    defaultChecked={false}
                    value={formik.values.kindOfPlan.toString()}
                    onChange={formik.handleChange}
                    className='sr-only peer'
                    id='plan'
                  />
                  <div className="w-12 h-6 bg-marine-blue peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[4px] after:bg-white after:border-marine-blue after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
                <span
                  className={`${
                    formik.values.kindOfPlan
                      ? 'text-marine-blue'
                      : 'text-cool-gray'
                  } font-medium`}
                >
                  Yearly
                </span>
              </div>
            </div>

            <div className='bg-white'>
              <div className='flex justify-between w-[95%] mx-auto py-2 md:w-8/12'>
                {currentStep !== 1 && <button className=''>Go Back</button>}
                <button
                  type='submit'
                  className='bg-marine-blue rounded text-white font-bold p-2 ml-auto'
                >
                  Next Step
                </button>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </PlanProvider>
  )
}

export default Step2
