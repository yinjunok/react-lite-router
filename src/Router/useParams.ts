import { useContext } from 'react'
import { ParamsCtx } from './Route'

const useParams = () => {
  const params = useContext(ParamsCtx)
  return params
}

export default useParams