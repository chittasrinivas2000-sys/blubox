
import FormSection from "./form"
import Footer from "../Creator/Footer1"
import BrandsCreators from "../BluBox-talent/BrandsCreators"
import creator1 from "../../assets/lady5.jpg"
import panteneLogo from "../../assets/pantene.png"
import creator2 from "../../assets/lady6.jpg"
import garnierLogo from "../../assets/garnier.jpg"
import creator3 from "../../assets/lady7.jpg"
import  headShouldersLogo from "../../assets/parachute.jpg"
import creator4 from "../../assets/lady8.jpg"
import lenskartLogo from "../../assets/lenskart.jpg"
import creator5 from "../../assets/lady9.jpg"
import plumLogo from "../../assets/simple.jpg"


const creators1 = [
  {
    id: 1,
    creatorImage: creator1,
    brandLogo: panteneLogo,
    reach: "60M",
    platform: "instagram"  as const,
  },
  {
    id: 2,
    creatorImage: creator2,
    brandLogo: garnierLogo,
    reach: "250k",
    platform: "youtube"  as const,
  },
  {
    id: 3,
    creatorImage: creator3,
    brandLogo: headShouldersLogo,
    reach: "2.5M",
    platform: "instagram"  as const,
  },
  {
    id: 4,
    creatorImage: creator4,
    brandLogo: lenskartLogo,
    reach: "1.7M",
    platform: "youtube"  as const,
  },
  {
    id: 5,
    creatorImage: creator5,
    brandLogo: plumLogo,
    reach: "1.2M",
    platform: "instagram"  as const,
  },
];

function BrandPage() {
  return (
    <div>
  
  <FormSection title="Kick start your"
  subtitle="Influencer Marketing"
  description="Our efficient and effective influencer marketing campaigns act as a catalyst in your digital marketing. We significantly reduce user acquisition costs and improve user retention through our compelling content."
  buttonText="Submit"
  fields={[
    {
      label: "Brand Name",
      placeholder: "Your Brand Name",
    },
    {
      label: "Full Name",
      placeholder: "Full Name",
    },
    {
      label: "Phone Number",
      placeholder: "Phone Number",
      half: true,
    },
    {
      label: "Email",
      placeholder: "Email",
      type: "email",
      half: true,
    },
    {
      label: "Brand Website Link",
      placeholder: "Paste Your Link here",
    },
    {
      label: "Message",
      placeholder: "Your Message",
      textarea: true,
    },
    {
      label: "Note",
      placeholder: "Your Note",
      textarea: true,
    },
  ]}/>

  <BrandsCreators title="Brands X Our Creators"
                creators={creators1}/>
    <Footer/>
    </div>
  )
}

export default BrandPage
