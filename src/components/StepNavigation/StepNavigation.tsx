import { useFormikContext } from 'formik'
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import { IFormikValues } from '../../interfaces/IFormikValues'

function StepNavigation() {
  const { currentStep, handleCurrentStep } = useContext(AppContext)
  const { errors, values, submitForm } = useFormikContext<IFormikValues>()

  const handlePreviousStep = () => handleCurrentStep(currentStep - 1)

  const handleNextStep = () => {
    const found = Object.values(values).find((value) => value === '')

    JSON.stringify(errors) === '{}' && found === undefined
      ? handleCurrentStep(currentStep + 1)
      : submitForm()

    // console.log({ values })

    // let temp = { ...values, plan: JSON.parse(values.plan) }
    // console.log(temp)
  }

  return (
    <div className='bg-white'>
      <div className='flex justify-between w-[95%] mx-auto py-2 md:w-8/12'>
        {currentStep !== 1 && (
          <button
            type='button'
            className='text-cool-gray font-medium'
            onClick={handlePreviousStep}
          >
            Go Back
          </button>
        )}
        <button
          type='button'
          className='bg-marine-blue rounded text-white font-medium p-2 ml-auto'
          onClick={handleNextStep}
        >
          Next Step
        </button>
      </div>
    </div>
  )
}

export default StepNavigation
