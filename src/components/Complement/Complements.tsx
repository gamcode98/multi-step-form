import { complements } from '../../utils/complements'
import Complement from './Complement'

function Complements() {
  return (
    <>
      {complements.map((complement) => (
        <Complement key={complement.id} complement={complement} />
      ))}
    </>
  )
}

export default Complements
