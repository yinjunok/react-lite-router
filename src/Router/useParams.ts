import { useContext } from 'react'
import { ParamsCtx } from './Route'

/*
  返回匹配到的路由参数
*/
const useParams = () => {
  const params = useContext(ParamsCtx)
  return params
}

export default useParams