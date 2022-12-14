import { useFormikContext } from 'formik'
import { IComplement } from '../../interfaces/IComplement'
import { IFormikValues } from '../../interfaces/IFormikValues'

function Complement({ complement }: { complement: IComplement }) {
  const { values, setFieldValue } = useFormikContext<IFormikValues>()

  const handleComplement = (id: string, item: IComplement) => {
    if (
      values.complements.find((complement) => complement.id === id) ===
      undefined
    ) {
      setFieldValue('complements', [...values.complements, item])
    } else {
      setFieldValue(
        'complements',
        values.complements.filter((complement) => complement.id !== id)
      )
    }
  }

  return (
    <label className='block text-xs md:text-sm mb-4 relative'>
      <input
        type='checkbox'
        name='complements'
        className='accent-purplish-blue peer/complement absolute top-2/4 -translate-y-1/2 left-4'
        id={complement.id}
        onChange={() => handleComplement(complement.id, complement)}
        checked={values.complements.some((item) => item.id === complement.id)}
      />
      <div className='flex items-center justify-between peer-checked/complement:bg-magnolia peer-checked/complement:border-purplish-blue p-4 border border-light-gray rounded-md'>
        <div className='ml-8'>
          <p className='text-marine-blue font-bold'>{complement.name}</p>
          <p className='text-cool-gray font-medium'>{complement.description}</p>
        </div>
        <span className='text-purplish-blue font-medium'>
          {!values.kindOfPlan
            ? `+$${complement.priceByMonth}/mo`
            : `+$${complement.priceByYear}/yr`}
        </span>
      </div>
    </label>
  )
}

export default Complement
