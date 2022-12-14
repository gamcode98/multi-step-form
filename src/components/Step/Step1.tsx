import { useFormikContext } from 'formik'
import { IFormikValues } from '../../interfaces/IFormikValues'

function Step1() {
  const { values, handleChange, handleBlur, touched, errors } =
    useFormikContext<IFormikValues>()

  return (
    <div className='bg-white rounded-lg w-[95%] mx-auto p-6 -translate-y-16 md:w-8/12 lg:translate-y-0 lg:px-0'>
      <h1 className='font-bold text-marine-blue text-2xl mb-2'>
        Personal info
      </h1>
      <p className='text-cool-gray mb-4'>
        Please provide your name, email address, and phone number.
      </p>

      <div className='flex justify-between'>
        <label htmlFor='name' className='block text-sm text-marine-blue'>
          Name
        </label>

        {touched.name && errors.name ? (
          <span className='text-strawberry-red text-sm font-bold'>
            {errors.name}
          </span>
        ) : null}
      </div>
      <input
        type='text'
        placeholder='e.g Stephen King'
        id='name'
        className={`border rounded border-light-gray block w-full px-4 py-2 mb-4 placeholder:font-bold focus:border-cool-gray focus:outline-none
            ${
              touched.name && errors.name
                ? 'border-strawberry-red'
                : 'border-light-gray'
            } 
            ${
              touched.name && !errors.name
                ? 'border-purplish-blue'
                : 'border-light-gray'
            }
            `}
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.name}
      />

      <div className='flex justify-between'>
        <label htmlFor='email' className='block text-sm text-marine-blue'>
          Email Address
        </label>
        {touched.email && errors.email ? (
          <span className='text-strawberry-red text-sm font-bold'>
            {errors.email}
          </span>
        ) : null}
      </div>
      <input
        type='email'
        name='email'
        id='email'
        placeholder='e.g stephenking@lorem.com'
        className={`border rounded border-light-gray block w-full px-4 py-2 mb-4 placeholder:font-bold focus:border-cool-gray focus:outline-none 
            ${
              touched.email && errors.email
                ? 'border-strawberry-red'
                : 'border-light-gray'
            } 
            ${
              touched.email && !errors.email
                ? 'border-purplish-blue'
                : 'border-light-gray'
            }`}
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.email}
      />
      <div className='flex justify-between'>
        <label htmlFor='phoneNumber' className='block text-sm text-marine-blue'>
          Phone Number
        </label>
        {touched.phoneNumber && errors.phoneNumber ? (
          <div className='text-strawberry-red text-sm font-bold'>
            {errors.phoneNumber}
          </div>
        ) : null}
      </div>
      <input
        type='tel'
        placeholder='e.g +1 234 567 890'
        id='phoneNumber'
        className={`border rounded border-light-gray block w-full px-4 py-2 mb-4 placeholder:font-bold focus:border-cool-gray focus:outline-none
            ${
              touched.phoneNumber && errors.phoneNumber
                ? 'border-strawberry-red'
                : 'border-light-gray'
            } 
            ${
              touched.phoneNumber && !errors.phoneNumber
                ? 'border-purplish-blue'
                : 'border-light-gray'
            }
            `}
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.phoneNumber}
      />
    </div>
  )
}

export default Step1
