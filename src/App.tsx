import { Formik } from 'formik'
import { useContext } from 'react'
import Step1 from './components/Step/Step1'
import Step2 from './components/Step/Step2'
import Step3 from './components/Step/Step3'
import Step4 from './components/Step/Step4'
import StepsButtons from './components/StepButton/StepsButtons'
import StepNavigation from './components/StepNavigation/StepNavigation'
import { PlanContext } from './context/PlanContext'
import { AppContext } from './context/AppContext'
import * as Yup from 'yup'

function App() {
  const { currentStep } = useContext(AppContext)
  const { selectedPlan } = useContext(PlanContext)

  const initialValues = () => {
    return {
      name: '',
      email: '',
      phoneNumber: '',
      kindOfPlan: false,
      plan: selectedPlan,
      complements: [],
    }
  }

  const validationSchema = () => {
    return {
      name: Yup.string()
        .required('This field is required')
        .min(1, 'Too Short!')
        .max(50, 'Too Long!')
        .matches(/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/, 'Just letters and whitespace'),
      email: Yup.string()
        .required('This field is required')
        .matches(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/, 'No matches found'),
      phoneNumber: Yup.string()
        .required('This field is required')
        .min(1, 'Too Short!')
        .max(12, 'Too Long!')
        .matches(
          /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
          'No matches found'
        ),
    }
  }

  const STEPS: any = {
    1: <Step1 />,
    2: <Step2 />,
    3: <Step3 />,
    4: <Step4 />,
  }

  return (
    <div className='bg-magnolia lg:h-screen lg:flex lg:items-center lg:justify-center'>
      <div className='max-h-full lg:flex lg:bg-white lg:w-3/4 lg:h-5/6 lg:rounded-lg lg:p-4 lg:pr-0'>
        <div className='bg-sidebar-mobile bg-cover w-full h-40 md:bg-center lg:bg-sidebar-desktop lg:bg-cover lg:bg-no-repeat lg:h-full lg:w-1/3 lg:rounded-lg'>
          <StepsButtons />
        </div>

        <Formik
          initialValues={initialValues()}
          validationSchema={Yup.object(validationSchema())}
          onSubmit={(values) => {
            alert(JSON.stringify(values, null, 2))
          }}
        >
          {(formik) => (
            <form onSubmit={formik.handleSubmit} className='w-full'>
              {STEPS[currentStep] || <Step1 />}
              {/* {STEPS[3] || <Step1 />} */}
              <StepNavigation />
            </form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default App
