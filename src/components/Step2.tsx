import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Plans from './Plans'

function Step2() {
  const { currentStep } = useContext(AppContext)

  return (
    <form className='w-full'>
      <div className='bg-white rounded-lg w-[95%] mx-auto p-6 -translate-y-16 md:w-8/12 lg:translate-y-0 lg:px-0'>
        <h1 className='font-bold text-marine-blue text-2xl mb-2'>
          Select your plan
        </h1>
        <p className='text-cool-gray mb-4'>
          You have the option of monthly or yearly billing.
        </p>

        <Plans />
        <div className='flex justify-center gap-4 p-4 rounded-md bg-magnolia mb-4'>
          <label htmlFor='plan'>Monthly</label>
          <div className='inline-flex relative items-center cursor-pointer'>
            <input
              id='plan'
              type='checkbox'
              value=''
              className='sr-only peer'
            />
            <div className="w-10 h-6 bg-marine-blue peer-focus:outline-none rounded-full  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[3px] after:left-[4px] after:bg-white after:border-marine-blue after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-marine-blue"></div>
          </div>
          <label htmlFor='plan'>Yearly</label>
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
  )
}

export default Step2
