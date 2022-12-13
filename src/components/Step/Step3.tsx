import Complements from '../Complement/Complements'

function Step3() {
  return (
    <div className='bg-white rounded-lg w-[95%] mx-auto p-6 -translate-y-16 md:w-8/12 lg:translate-y-0 lg:px-0'>
      <h1 className='font-bold text-marine-blue text-2xl mb-2'>Pick add-ons</h1>
      <p className='text-cool-gray mb-4'>
        Add-ons help enhance your gaming experience.
      </p>
      <Complements />
    </div>
  )
}

export default Step3
