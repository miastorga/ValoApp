import { useLocation, useParams } from 'react-router-dom'

export const AgentsDetail = () => {
  const { uuid } = useParams()
  console.log(uuid)
  return (
    <div>AgentsDetail</div>
  )
}
