import { useState } from 'react'
import Navbar from './componants/Navbar'
import HomeScreen from './componants/HomeScreen'
import CounterSection from './componants/CounterSection'
import PopularCourses from './componants/PopularCourses'
import FeatureSection from './componants/FeatureSection'
import Accordion from './componants/AccordionItem'
import Footer from './componants/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <HomeScreen />
    <CounterSection />
    <PopularCourses />
    <FeatureSection />
    <Accordion />
    <Footer />
    
    </>
  )
}

export default App
