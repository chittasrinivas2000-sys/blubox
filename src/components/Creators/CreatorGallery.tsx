// components/CreatorGallery.tsx

import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

// ===== IMPORT IMAGES =====
import img1 from "../../assets/i1.jpg";
import img2 from "../../assets/i2.jpg";
import img3 from "../../assets/i3.jpg";
import img4 from "../../assets/i4.jpg";
import img5 from "../../assets/i5.jpg";
import img6 from "../../assets/i6.jpg";
import img7 from "../../assets/i7.jpg";
import img8 from "../../assets/i8.jpg";

// ===== TYPES =====
type Creator = {
  name: string;
  image: string;
};

type TabType = "All" | "Aspiring" | "Mega" | "Celebrity";

// ===== DATA =====
const creatorsData: Record<TabType, Creator[]> = {
  All: [
    { name: "Boss Lady Shruti", image: img1 },
    { name: "Dr Dipta Talukdar", image: img2 },
    { name: "Preity Prerna", image: img3 },
    { name: "Smitha Deepak", image: img4 },
    { name: "Hindavi Patil", image: img5 },
    { name: "Trupti Rane", image: img6 },
    { name: "Being Navi", image: img7 },
    { name: "Kanishka Sharma", image: img8 },
  ],

  Aspiring: [
    { name: "Boss Lady Shruti", image: img1 },
    { name: "Preity Prerna", image: img3 },
    { name: "Being Navi", image: img7 },
    { name: "Trupti Rane", image: img6 },
  ],

  Mega: [
    { name: "Smitha Deepak", image: img4 },
    { name: "Dr Dipta Talukdar", image: img2 },
    { name: "Kanishka Sharma", image: img8 },
    { name: "Hindavi Patil", image: img5 },
  ],

  Celebrity: [
    { name: "Smitha Deepak", image: img4 },
    { name: "Boss Lady Shruti", image: img1 },
    { name: "Dr Dipta Talukdar", image: img2 },
    { name: "Preity Prerna", image: img3 },
  ],
};

const tabs: TabType[] = ["All", "Aspiring", "Mega", "Celebrity"];

const ITEMS_PER_PAGE = 8;

export default function CreatorGallery() {
  const [activeTab, setActiveTab] = useState<TabType>("All");
  const [currentPage, setCurrentPage] = useState(1);

  const creators = useMemo(() => {
    return creatorsData[activeTab];
  }, [activeTab]);

  const totalPages = Math.ceil(creators.length / ITEMS_PER_PAGE);

  const paginatedCreators = creators.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  return (
    <section className=" py-10 md:py-12">
      <div className="mx-auto max-w-6xl px-5 md:w-xl lg:w-6xl">

        {/* ===== TABS ===== */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-4 md:gap-5 md:w-xl lg:w-6xl">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`
                min-w-[180px]
                rounded-full
                border
                px-5
                py-3
              
                font-[Montserrat]
                text-lg
                transition-all
                duration-300

                ${
                  activeTab === tab
                    ? "border-black bg-black text-white"
                    : "border-black bg-transparent text-black"
                }
              `}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ===== GRID ===== */}
        <div
          className="
            grid
            grid-cols-1
            gap-6
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {paginatedCreators.map((creator, index) => (
            <div
              key={index}
              className="
                group
                relative
                overflow-hidden
                rounded-[36px]
              "
            >
              <img
                src={creator.image}
                alt={creator.name}
                className="
                  h-[200px]
                  w-full
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-105
                  md:h-[250px]
                "
              />

              {/* Overlay */}
              <div
                className="
                  absolute
                  bottom-6
                  left-0
                  
                  flex
                  items-center
                  gap-1
                  rounded-tr-[30px]
                  rounded-br-[30px]
                  bg-[#8F8F8F99]
                  px-2
                  py-0
                  backdrop-blur-sm
                "
              >
                <span className="text-3xl text-white mb-2 opacity-60">→</span>

                <p
                  className="
                    font-[Montserrat]
                    text-md
                    font-semibold
                    text-white
                    opacity-60
                  "
                >
                  {creator.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ===== PAGINATION ===== */}
        <div className="mt-12 flex items-center justify-center gap-6">
          
          {/* Prev */}
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.max(prev - 1, 1))
            }
            disabled={currentPage === 1}
            className="
              flex
              h-[36px]
              w-[60px]
              items-center
              justify-center
              rounded-full
              border
              border-black
              transition-all
              duration-300
              disabled:opacity-40
            "
          >
            <ArrowLeft size={22} />
          </button>

          {/* Page */}
          <p
            className="
              font-[Montserrat]
              text-2xl
              font-semibold
              text-black
            "
          >
            {currentPage}/{totalPages}
          </p>

          {/* Next */}
          <button
            onClick={() =>
              setCurrentPage((prev) =>
                Math.min(prev + 1, totalPages)
              )
            }
            disabled={currentPage === totalPages}
            className="
              flex
              h-[36px]
              w-[60px]
              items-center
              justify-center
              rounded-full
              border
              border-black
              transition-all
              duration-300
              disabled:opacity-40
            "
          >
            <ArrowRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}