import AboutUs from '@/components/organisms/AboutUs/AboutUs'
import HeroPage from '../HeroPage/HeroPage'
import Process from '@/components/organisms/Process/Process'
import Services from '@/components/organisms/Services/Services'
import Features from '@/components/organisms/Features/Features'
import Benifits from '@/components/organisms/Benifits/Benifits'
import Footer from '@/components/organisms/Footer/Footer'
import CTASection from '@/components/organisms/CTAsection/CTASection'

const LandingPage = () => {
  return (
    <>
        <HeroPage/>
        <AboutUs/>
        <Process/>
        <Services/>
        <Features/>
        <Benifits/>
        <CTASection/>
        <Footer/>
    </>
  )
}

export default LandingPage