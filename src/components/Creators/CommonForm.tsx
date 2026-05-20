// components/CommonFormSection.tsx

import bgPattern from "../../assets/BWhiteReverse.png.png";
import MainTop from "../../assets/MainTop.png"

interface FormField {
  label: string;
  placeholder: string;
  type?: string;
  half?: boolean;
  textarea?: boolean;
}

interface CommonFormSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  extraText?: string;
  fields: FormField[];
  buttonText?: string;
}

export default function CommonFormSection({
  title,
  subtitle,
  description,
  extraText,
  fields,
  buttonText = "Submit",
}: CommonFormSectionProps) {
  return (
    <section className="relative overflow-hidden py-10 md:py-16 lg:pr-30 ">
          <img
        src={MainTop}
        alt="Background Design"
        className="
            absolute
            top-0
            left-100
          w-full md:w-3/4 
            pointer-events-none
            select-none
        "
        />
      
      {/* Background Pattern */}
      <img
        src={bgPattern}
        alt="background"
        className="absolute lg:left-60 lg:top-50 md:top-40 md:left-15 md:h-[300px] lg:w-[500px] pointer-events-none lg:h-[380px] hidden sm:block"
      />

<div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-5 px-5 md:flex-row md:items-center md:justify-between md:px-5 lg:mt-15">
        
        {/* Left Content */}
      <div className="w-full md:w-[35%] md:ml-50">
          <h2
            className="
              font-[Michroma]
              text-[42px]
              leading-[1.1]
              text-[#1D2230]
              sm:text-[56px]
              md:text-[40px]
            "
          >
            {title}
          </h2>

          {subtitle && (
            <h3
              className="
                mt-4
                font-[Montserrat]
                text-md
                font-bold
                text-[#1D2230]
                md:text-lg
                max-w-[400px]
              "
            >
              {subtitle}
            </h3>
          )}

          <p
            className="
              mt-5
              max-w-[400px]
              font-[Montserrat]
              text-sm
              leading-7
              text-[#374151]
            "
          >
            {description}
          </p>

          {extraText && (
            <p
              className="
                mt-6
                font-[Montserrat]
                text-sm
                text-[#374151]
              "
            >
              {extraText}
            </p>
          )}
        </div>

        {/* Right Form */}
            <div
        className="
            w-full
            rounded-[40px]
            bg-black
            p-4
            sm:p-8
            md:w-[50%]
          
            md:p-6
            lg:min-h-[500px]
           lg:min-w-[500px]
        "
        >
          <form className="space-y-2">
            
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {fields.map((field, index) => (
                <div
                  key={index}
                  className={field.half ? "md:col-span-1" : "md:col-span-2"}
                >
                  <label
                    className="
                      mb-1
                      block
                      font-[Montserrat]
                      text-md
                      font-medium
                      text-white
                    "
                  >
                    {field.label}
                  </label>

                  {field.textarea ? (
                    <textarea
                      placeholder={field.placeholder}
                      rows={1}
                      className="
                        w-full
                        rounded-lg
                        border
                        border-[#293040]
                        bg-transparent
                        px-3
                        py-2
                        font-[Montserrat]
                        text-white
                        outline-none
                        placeholder:text-[#5B6780]
                        rounded-[20px]
                      "
                    />
                  ) : (
                    <input
                      type={field.type || "text"}
                      placeholder={field.placeholder}
                      className="
                        h-[35px]
                        lg:h-[45px]
                        w-full
                        rounded-full
                        border
                        border-[#293040]
                        bg-transparent
                        px-4
                        font-[Montserrat]
                        text-white
                        outline-none
                        placeholder:text-[#5B6780]
                      "
                    />
                  )}
                </div>
              ))}
            </div>

            <button
              type="submit"
              className="
                mt-5
                h-[45px]
                w-full
                rounded-full
                bg-white
                font-[Montserrat]
                text-lg
                font-semibold
                text-black
                transition-all
                duration-300
                hover:scale-[1.02]
                lg:h-[40px]
              "
            >
              {buttonText}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}