import girlsImg from "../../assets/group.png";

export default function JoinCommunity() {
  return (
    <section className="overflow-hidden bg-[#FFE6DC] py-1 md:py-1">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 px-6 md:flex-row md:px-12">
        
        {/* Left Image */}
        <div className="flex justify-center md:w-1/2">
          <img
            src={girlsImg}
            alt="Creators"
            className="w-full max-w-[650px] object-contain max-h-[800px]"
          />
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2
            className="
              font-[Michroma]
              text-[#111827]
              text-4xl
              leading-tight
              sm:text-4xl
              md:text-5xl
            "
          >
            Join Our <br />
            Community
          </h2>

          <p
            className="
              mt-4
              max-w-lg
              font-[Montserrat]
              text-base
              leading-8
              text-[#374151]
              sm:text-lg
            "
          >
            Creators grow faster with the right team by their side. At
            Blubox, we manage your deals, payments, editing, and more.
            You focus on content — we focus on your growth.
          </p>

          <button
            className="
              mt-6
              rounded-full
              bg-black
              px-10
              py-4
              font-[Montserrat]
              text-lg
              font-semibold
              text-white
              transition-all
              duration-300
              hover:scale-105
            "
          >
            Let’s Talk
          </button>
        </div>
      </div>
    </section>
  );
}