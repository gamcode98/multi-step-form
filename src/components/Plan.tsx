import { IPlan } from '../interfaces/IPlan'

function Plan({ plan }: { plan: IPlan }) {
  return (
    <label htmlFor={plan.name}>
      <input
        type='radio'
        name='plan'
        value={plan.name}
        id={plan.name}
        className='peer/plan hidden'
      />
      <div
        className={`flex items-center gap-4 border border-light-gray p-4 rounded-md peer-checked/plan:border-purplish-blue peer-checked/plan:bg-magnolia mb-4`}
      >
        <img src={plan.image} alt={plan.image} />
        <div>
          <p className='font-bold'>{plan.name}</p>
          <p className='text-light-gray font-bold'>{plan.priceByMonth}</p>
        </div>
      </div>
    </label>
  )
}

export default Plan
