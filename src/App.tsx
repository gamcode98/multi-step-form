import { useContext } from 'react'
import Step1 from './components/Step1'
import Step2 from './components/Step2'
import StepsButtons from './components/StepsButtons'
import { AppContext } from './context/AppContext'

function App() {
  const { currentStep } = useContext(AppContext)

  return (
    <div className='bg-magnolia lg:h-screen lg:flex lg:items-center lg:justify-center'>
      <div className='max-h-full lg:flex lg:bg-white lg:w-3/4 lg:h-5/6 lg:rounded-lg lg:p-4 lg:pr-0'>
        <div className='bg-sidebar-mobile bg-cover w-full h-40 md:bg-center lg:bg-sidebar-desktop lg:bg-cover lg:bg-no-repeat lg:h-full lg:w-1/3 lg:rounded-lg'>
          <StepsButtons />
        </div>

        {currentStep === 1 && <Step1 />}
        {currentStep === 2 && <Step2 />}
      </div>
    </div>
  )
}

export default App
