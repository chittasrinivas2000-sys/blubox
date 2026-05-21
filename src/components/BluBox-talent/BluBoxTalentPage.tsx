import Talents from "./Talents"
import TalentServices from "./talentServices"
import JoinCommunity from "./TalentJoinCommunity"
import Footer from "../Creator/Footer1"
import BrandsCreators from "./BrandsCreators"
import CelebrityCreators from "./CelebrityCreators"
import img1 from "../../assets/lady1.jpg"
import img2 from "../../assets/lady2.jpg"
import img3 from "../../assets/lady3.jpg"
import img4 from "../../assets/lady4.jpg"
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


const creators = [
  {
    id: 1,
    name: "Farnaz Shetty",
    image: img1,
  },
  {
    id: 2,
    name: "Sonalika Joshi",
    image: img2,
  },
  {
    id: 3,
    name: "Riya Kishan Chandani",
    image: img3,
  },
  {
    id: 4,
    name: "Suman Pattnaik",
    image: img4,
  },
];

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

const BluBoxTalentPage =()=>{
    return(
        <>
            <Talents/>
             <JoinCommunity/>
            
           
            <CelebrityCreators 
            title="Celebrity Creators"
            items={creators}
            direction="left"
            />
             <CelebrityCreators 
            title="Mega Creators"
            items={creators}
            direction="right"
            />
            <CelebrityCreators 
            title="Aspiring Creators"
            items={creators}
            direction="left"
            />
            <BrandsCreators
                title="Brands X Our Creators"
                creators={creators1}
                />
            <Footer/>
            
        </>
    )
}
export default BluBoxTalentPage