import MainTop from "../../assets/MainTop.png"
import campaignCircle from "../../assets/girl2.png"

const Talents =()=>{
    return(
       <section className="relative overflow-hidden  px-4 py-0 sm:px-6 md:px-10 lg:px-20  ">
        <img
            src={MainTop}
            alt="Background Design"
            className="
                absolute
                top-0
                left-0
            w-full md:w-3/4 
                pointer-events-none
                select-none
            "
            />
             <div className=" px-1 py-12 md:px-10 lg:px-20 md:mt-5 lg:mt-15">
      <div
        className="
          mx-auto
          flex
          max-w-7xl
          flex-col
          items-center
          justify-between
          gap-14

          md:flex-row
          md:items-center
        "
      >
        {/* LEFT CONTENT */}
        <div className="w-full md:max-w-2xl">
          <h2
            className="
              font-['Michroma']
              text-[#1D2233]

              text-[27px]
              leading-tight

              md:text-[45px]
              md:leading-[1.05]
            "
          >
            Blubox
            <br />
         Talents
          </h2>

          <p
            className="
              mt-5
              max-w-2xl
              text-[#3B4152]

              text-sm
              leading-6

              md:text-[18px]
              md:leading-[30px]
            "
          >
            Not just campaigns — complete influencer marketing under one
            roof. From smart strategy to creative execution and massive
            reach, we handle it all. Whether it's performance, awareness
            or brand love, we've got you covered — all in one place.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex w-full justify-center md:w-auto">
          <img
            src={campaignCircle}
            alt="Blubox Campaigns"
            className="
              w-[320px]
              object-contain
              md:w-[560px]
              lg:w-[550px]
            "
          />
        </div>
      </div>
    </div>
       </section>
    )
}
export default Talents