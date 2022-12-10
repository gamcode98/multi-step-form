import { useFormik } from 'formik'
import * as Yup from 'yup'

function App() {
  const initialValues = () => {
    return {
      name: '',
      email: '',
      phoneNumber: '',
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

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })

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

      <form onSubmit={formik.handleSubmit} className='w-full'>
        <div className='bg-white rounded-lg w-[95%] mx-auto p-6 h-96 -translate-y-16'>
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

            {formik.touched.name && formik.errors.name ? (
              <span className='text-strawberry-red text-sm font-bold'>
                {formik.errors.name}
              </span>
            ) : null}
          </div>
          <input
            type='text'
            placeholder='e.g Stephen King'
            id='name'
            className={`border rounded border-light-gray block w-full px-4 py-2 mb-4 placeholder:font-bold focus:border-cool-gray focus:outline-none
            ${
              formik.touched.name && formik.errors.name
                ? 'border-strawberry-red'
                : 'border-light-gray'
            } 
            ${
              formik.touched.name && !formik.errors.name
                ? 'border-marine-blue'
                : 'border-light-gray'
            }
            `}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.name}
          />

          <div className='flex justify-between'>
            <label htmlFor='email' className='block text-sm text-marine-blue'>
              Email Address
            </label>
            {formik.touched.email && formik.errors.email ? (
              <span className='text-strawberry-red text-sm font-bold'>
                {formik.errors.email}
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
              formik.touched.email && formik.errors.email
                ? 'border-strawberry-red'
                : 'border-light-gray'
            } 
            ${
              formik.touched.email && !formik.errors.email
                ? 'border-marine-blue'
                : 'border-light-gray'
            }`}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <div className='flex justify-between'>
            <label
              htmlFor='phoneNumber'
              className='block text-sm text-marine-blue'
            >
              Phone Number
            </label>
            {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
              <div className='text-strawberry-red text-sm font-bold'>
                {formik.errors.phoneNumber}
              </div>
            ) : null}
          </div>
          <input
            type='tel'
            placeholder='e.g +1 234 567 890'
            id='phoneNumber'
            className={`border rounded border-light-gray block w-full px-4 py-2 mb-4 placeholder:font-bold focus:border-cool-gray focus:outline-none
            ${
              formik.touched.phoneNumber && formik.errors.phoneNumber
                ? 'border-strawberry-red'
                : 'border-light-gray'
            } 
            ${
              formik.touched.phoneNumber && !formik.errors.phoneNumber
                ? 'border-marine-blue'
                : 'border-light-gray'
            }
            `}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.phoneNumber}
          />
        </div>
        <div className='bg-white'>
          <div className='flex justify-between w-[95%] mx-auto py-2'>
            <button className=''>Go Back</button>
            <button
              type='submit'
              className='bg-marine-blue rounded text-white font-bold p-2'
            >
              Next Step
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default App
