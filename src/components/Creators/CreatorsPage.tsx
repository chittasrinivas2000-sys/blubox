
import CommonFormSection from './CommonForm'
import Footer from '../Creator/Footer1'
import CreatorGallery from './CreatorGallery'

function CreatorsPage() {
  return (
    <div>
      <CommonFormSection  title="Join Our Community"
  description="The ones who grow usually have a strong team behind them. At Blubox, we help you with brand deals, payments, editing, and even getting more work from our creator network. You get to focus on making great content — we handle the rest."
  extraText="Create more, worry less. Let’s grow together."
  buttonText="Submit"
  subtitle="Ever wonder why some creators grow fast while others don’t?"
  fields={[
    {
      label: "Creator Name",
      placeholder: "Your Brand Name",
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
      label: "YouTube Link",
      placeholder: "Paste Your Link here",
    },
    {
      label: "Instagram Link",
      placeholder: "Paste Your Link here",
    },
  ]}/>
  <CreatorGallery/>
  <Footer/>
    </div>
  )
}

export default CreatorsPage
