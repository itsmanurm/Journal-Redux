
import { Navigate, Route, Routes } from 'react-router-dom'
import { JounalPage } from '../pages/JournalPage'

export const JournalRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={ <JounalPage/> }/>

        <Route path='/*' element={ <Navigate to="/" />}/>
    </Routes>
  )
}
