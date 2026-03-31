import Navbar from './component/Navbar'
import NewSection from './component/NewSection'
import NotFound from './component/NotFound'
import Part1 from './component/Part1'
import Part2 from './component/Part2'
import Section from './component/Section'
import Sectioncopy from './component/Sectioncopy'
import {Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div  className='w-full min-h-screen'>
      <Navbar/>
      <Routes>
        <Route path='/Section' element={<Section/>}/>        
        <Route path='/Sectioncopy' element={<Sectioncopy/>}/>

        <Route path='/' element={<NewSection/>}>
        <Route path='Part1' element={<Part1/>}/>
        <Route path='Part2' element={<Part2/>}/>
        </Route>
         <Route path='/:id' element={<Part1/>}/>
         <Route path='/section/*' element={<NotFound/>}/>
         <Route path='/sectioncopy/*' element={<NotFound/>}/>
         <Route path='/Part1/*' element={<NotFound/>}/>
         <Route path='/Part2/*' element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App
