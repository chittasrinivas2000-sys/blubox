// JoinCommunity.tsx
import MainTop from "../../assets/MainTop.png"

const JoinCommunity = () => {
  return (
    <section className="relative overflow-hidden  px-4 py-16 md:px-8 lg:px-20">
      
      {/* Background Text */}
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

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start justify-between gap-12 lg:flex-row lg:items-center lg:mt-15">
        
        {/* Left Content */}
        <div className="w-full lg:max-w-2xl">
          <h2
            className="
              text-[#1E2230]
              text-5xl
              sm:text-xl
              md:text-5xl
              lg:text-5xl
              leading-none
              tracking-tight
             font-['Michroma']
            "
            
          >
            Join Our
            <br className="block md:hidden" />
            {' '}Community
          </h2>

          <h3 className="mt-6 text-lg md:text-xl font-bold text-[#2A2F3F] leading-snug font-['Montserrat']">
            Ever wonder why some creators grow fast while others don’t?
          </h3>

          <p className="mt-6 text-base md:text-[17px] leading-relaxed text-[#3B4152] font-['Montserrat']">
            The ones who grow usually have a strong team behind them.
            At Blubox, we help you with brand deals, payments, editing,
            and even getting more work from our creator network.
            You get to focus on making great content — we handle the rest.
          </p>

          <p className="mt-8 text-base md:text-[20px] text-[#3B4152] font-['Montserrat']">
            Create more, worry less. Let’s grow together.
          </p>
        </div>

        {/* Form Card */}
       <div
        className="
            w-full
            lg:max-w-md
            h-auto
            lg:h-[500px]
            md:ml-auto
            md:mr-auto
            md:w-xl
            rounded-[36px]
            bg-black
            sm:mt-1
            p-5
            md:p-6
            lg:p-5

            shadow-2xl
        "
        >
        <form className="space-y-3 lg:space-y-2">

            {/* Creator Name */}
            <div>
            <label className="mb-2 block text-sm lg:text-base font-medium text-white font-['Montserrat']">
                Creator Name
            </label>

            <input
                type="text"
                placeholder="Your Brand Name"
                className="
                w-full
                rounded-full
                border border-[#2F3545]
                bg-transparent

                px-4
                py-2 lg:py-2

                text-sm
                text-white
                outline-none
                placeholder:text-[#6C7385]
                "
            />
            </div>

            
            <div>
            <label className="mb-2 block text-sm lg:text-base font-medium text-white">
                Phone Number
            </label>

            <input
                type="tel"
                placeholder="Phone Number"
                className="
                w-full
                rounded-full
                border border-[#2F3545]
                bg-transparent

                px-4
                py-2

                text-sm
                text-white
                outline-none
                placeholder:text-[#6C7385]
                "
            />
            </div>

            {/* Email */}
            <div>
            <label className="mb-2 block text-sm lg:text-base font-medium text-white">
                Email
            </label>

            <input
                type="email"
                placeholder="Email"
                className="
                w-full
                rounded-full
                border border-[#2F3545]
                bg-transparent

                px-4
                py-2

                text-sm
                text-white
                outline-none
                placeholder:text-[#6C7385]
                "
            />
            </div>

            {/* YouTube */}
            <div>
            <label className="mb-2 block text-sm lg:text-base font-medium text-white">
                YouTube Link
            </label>

            <input
                type="url"
                placeholder="Paste Your Link here"
                className="
                w-full
                rounded-full
                border border-[#2F3545]
                bg-transparent

                px-4
                py-2

                text-sm
                text-white
                outline-none
                placeholder:text-[#6C7385]
                "
            />
            </div>

            {/* Instagram */}
            <div>
            <label className="mb-2 block text-sm lg:text-base font-medium text-white">
                Instagram Link
            </label>

            <input
                type="url"
                placeholder="Paste Your Link here"
                className="
                w-full
                rounded-full
                border border-[#2F3545]
                bg-transparent

                px-4
                py-2

                text-sm
                text-white
                outline-none
                placeholder:text-[#6C7385]
                "
            />
            </div>

            {/* Button */}
            <button
            type="submit"
            className="
                mt-2
                w-full
                rounded-full
                bg-white

                py-2 lg:py-3

                text-sm lg:text-base
                font-semibold
                text-black
            "
            >
            Submit
            </button>
        </form>
        </div>
      </div>
    </section>
  )
}

export default JoinCommunity