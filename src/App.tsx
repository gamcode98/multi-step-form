import Step1 from './components/Step1'
import StepsButtons from './components/StepsButtons'

function App() {
  return (
    <div className='bg-magnolia max-h-full lg:flex'>
      <div className='bg-sidebar-mobile w-full h-40 md:bg-cover md:bg-center lg:bg-sidebar-desktop lg:bg-contain lg:bg-no-repeat lg:h-screen'>
        <StepsButtons />
      </div>
      <Step1 />
    </div>
  )
}

export default App
