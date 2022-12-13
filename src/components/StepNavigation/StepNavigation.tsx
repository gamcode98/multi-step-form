import { useFormikContext } from 'formik'
import { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import { IFormikValues } from '../../interfaces/IFormikValues'

function StepNavigation() {
  const { currentStep, handleCurrentStep } = useContext(AppContext)
  const { errors, values, submitForm } = useFormikContext<IFormikValues>()

  const handleNextStep = () => {
    const found = Object.values(values).find((value) => value === '')

    JSON.stringify(errors) === '{}' && found === undefined
      ? handleCurrentStep(currentStep + 1)
      : submitForm()
  }

  return (
    <div className='bg-white'>
      <div className='flex justify-between w-[95%] mx-auto py-2 md:w-8/12'>
        {currentStep !== 1 && (
          <button className='text-cool-gray font-medium'>Go Back</button>
        )}
        <button
          type='button'
          onClick={handleNextStep}
          className='bg-marine-blue rounded text-white font-medium p-2 ml-auto'
        >
          Next Step
        </button>
      </div>
    </div>
  )
}

export default StepNavigation
