
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import HomePage from '../Home/HomePage'
import CreatorPage from '../Creator/CreatorPage'
import BluBoxTalentPage from '../BluBox-talent/BluBoxTalentPage'
import CreatorsPage from '../Creators/CreatorsPage'
import BrandPage from '../Brand/BrandPage'
import GalleryPage from '../Gallery/GalleryPage'
import ContactUsPage from '../ContactUs/ContactUsPage'


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/creator' element={<CreatorPage/>}/>
        <Route path='/talent' element={<BluBoxTalentPage/>}/>
        <Route path='/creators' element={<CreatorsPage/>}/>
        <Route path='/brand' element={<BrandPage/>}/>
        <Route path='/gallery' element={<GalleryPage/>}/>
        <Route path='/contactus' element={<ContactUsPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes