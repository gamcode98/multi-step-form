function App() {
  return (
    <div className='bg-magnolia max-h-full'>
      <div className='bg-sidebar-mobile w-full h-40'>
        <div className='flex justify-center gap-4 pt-8'>
          <button className='border border-light-gray rounded-full w-8 h-8'>
            <span className='text-white'>1</span>
            <span className='hidden'>step 1</span>
            <span className='hidden'>Your info</span>
          </button>
          <button className='border border-light-gray rounded-full w-8 h-8'>
            <span className='text-white'>2</span>
            <span className='hidden'>step 2</span>
            <span className='hidden'>Your info</span>
          </button>
          <button className='border border-light-gray rounded-full w-8 h-8'>
            <span className='text-white'>3</span>
            <span className='hidden'>step 3</span>
            <span className='hidden'>Your info</span>
          </button>
          <button className='border border-light-gray rounded-full w-8 h-8'>
            <span className='text-white'>4</span>
            <span className='hidden'>step 4</span>
            <span className='hidden'>Your info</span>
          </button>
        </div>
      </div>

      <form className='bg-white rounded-lg w-[95%] mx-auto p-6 -translate-y-16'>
        <h1 className='font-ubuntu font-bold text-2xl mb-2'>Personal info</h1>
        <p className='text-cool-gray mb-4'>
          Please provide your name, email address, and phone number.
        </p>
        <label htmlFor='name' className='block text-sm'>
          Name
        </label>
        <input
          type='text'
          placeholder='e.g Stephen King'
          id='name'
          className='border rounded border-light-gray block w-full px-4 py-2 mb-4 placeholder:font-bold'
        />
        <label htmlFor='email' className='block text-sm'>
          Email Address
        </label>
        <input
          type='email'
          name='email'
          id='email'
          placeholder='e.g stephenking@lorem.com'
          className='border rounded border-light-gray block w-full px-4 py-2 mb-4 placeholder:font-bold'
        />
        <label htmlFor='phone-number' className='block text-sm'>
          Phone Number
        </label>
        <input
          type='tel'
          placeholder='e.g +1 234 567 890'
          id='phone-number'
          className='border rounded border-light-gray block w-full px-4 py-2 mb-4 placeholder:font-bold'
        />
      </form>
      <div className='bg-white w-full'>
        <div className='flex justify-between w-[95%] mx-auto py-2'>
          <button className=''>Go Back</button>
          <button className='bg-marine-blue rounded text-white font-bold p-2'>
            Next Step
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
