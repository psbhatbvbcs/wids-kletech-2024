import CommitteCSS from "./Committee.module.css";
const Committee = () => {
  return (
    <div
      className="w-full flex items-center justify-center flex-col"
      id="committee"
    >
      <div className="w-full bg-[#4AB969] text-3xl p-10 flex justify-center font-normal md:text-4xl">
        WiDS Committee
      </div>
      <div className="w-full p-1 md:p-16 flex items-center justify-center gap-6 flex-col md:flex-row">
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="flex flex-col items-center justify-center max-w-[500px] text-center m-5 md:m-0">
            <p className="text-xl font-medium">Patron</p>
            <img
              src="/patron-vc.jpg"
              alt="Patron Dr. Ashok Shettar"
              className="w-[150px] h-[150px] rounded-full m-5"
            />
            <p className="text-xl font-medium">Dr. Ashok Shettar</p>
            <p className="font-normal mb-4">Vice Chancellor</p>
          </div>
        </div>
        <div className="flex w-full md:w-2/3 justify-center flex-col">
          <p className="text-xl font-medium flex justify-center">Advisors</p>
          <div className="flex justify-center gap-3 md:gap-8 flex-col md:flex-row">
            <div className="flex flex-col items-center justify-center max-w-[500px] text-center m-5 md:m-0">
              <img
                src="/advisor-bld.jpg"
                alt="Prof. B. L Desai"
                className="w-[150px] h-[150px] rounded-full m-5"
              />
              <p className="text-xl font-medium">Prof. B. L Desai</p>
              <p className="font-normal mb-0 md:mb-4">Executive Dean</p>
            </div>
            <div className="flex flex-col items-center justify-center max-w-[500px] text-center m-5 md:m-0">
              <img
                src="/advisor-registrar.jpg"
                alt="Prof. B. S Anami"
                className="w-[150px] h-[150px] rounded-full m-5"
              />
              <p className="text-xl font-medium">Prof. B. S Anami</p>
              <p className="font-normal mb-0 md:mb-4">Registrar</p>
            </div>
            <div className="flex flex-col items-center justify-center max-w-[500px] text-center m-5 md:m-0">
              <img
                src="/advisor-uma.jpg"
                alt="Dr. Uma Mudenagudi"
                className="w-[150px] h-[150px] rounded-full m-5"
              />
              <p className="text-xl font-medium">Dr. Uma Mudenagudi</p>
              <p className="font-normal mb-0 md:mb-4">Dean R&D</p>
            </div>
            <div className="flex flex-col items-center justify-center max-w-[500px] text-center m-5 md:m-0">
              <img
                src="/advisor-srujana.jpg"
                alt="Ms. Srujana K"
                className="w-[150px] h-[150px] rounded-full m-5"
              />
              <p className="text-xl font-medium">Ms. Srujana K</p>
              <p className="font-normal mb-0 md:mb-4">
                AI Leader at Walmart Global Tech, USA
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full p-1 md:p-16 flex items-center justify-center gap-6 flex-col md:flex-row">
        <div className="w-full md:w-1/3 flex justify-center gap-8 md:flex-row flex-col">
          <div className="flex flex-col items-center justify-center max-w-[500px] text-center m-5 md:m-0 member-container">
            <p className="text-xl font-medium">WiDS Ambassador</p>
            <img
              src="/ambassador-meena.jpg"
              alt="Dr. Meena S. M"
              className="w-[150px] h-[150px] rounded-full m-5"
            />
            <p className="text-xl font-medium">Dr. Meena S. M</p>
            <p className="font-normal mb-4">Dean Faculty, SoCSE</p>
          </div>
          <div className="flex flex-col items-center justify-center max-w-[500px] text-center m-5 md:m-0 member-container">
            <p className="text-xl font-medium">‎</p>
            <img
              src="/hod-vijayalakshmi-1.jpg"
              alt="Dr. Vijayalakshmi M"
              className="w-[150px] h-[150px] rounded-full m-5 bg-cover"
            />
            <p className="text-xl font-medium">Dr. Vijayalakshmi M</p>
            <p className="font-normal mb-0 md:mb-4">Head of School, SoCSE</p>
          </div>
        </div>
        <div className="flex w-full md:w-2/3 justify-center flex-col">
          <p className="text-xl font-medium flex justify-center">
            WiDS Co-Ambassadors
          </p>
          <div className="flex justify-center gap-3 md:gap-8 flex-col md:flex-row">
            <div className="flex flex-col items-center justify-center max-w-[500px] text-center m-5 md:m-0">
              <img
                src="/co-ambassador-sujatha.jpg"
                alt="Dr. Sujatha C"
                className="w-[150px] h-[150px] rounded-full m-5"
              />
              <p className="text-xl font-medium">Dr. Sujatha C</p>
              <p className="font-normal mb-0 md:mb-4">Professor, SoCSE</p>
            </div>
            <div className="flex flex-col items-center justify-center max-w-[500px] text-center m-5 md:m-0">
              <img
                src="/co-ambassador-padmashree.jpg"
                alt="Dr. Padmashree Desai"
                className="w-[150px] h-[150px] rounded-full m-5"
              />
              <p className="text-xl font-medium">Dr. Padmashree Desai</p>
              <p className="font-normal mb-0 md:mb-4">Professor, SoCSE</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center flex-col mb-10">
        <p className="text-xl font-medium flex justify-center mb-5">
          Organizers
        </p>
        <div className="flex justify-center gap-3 md:gap-8 flex-col md:flex-row text-center">
          <p className="text-xl font-medium">
            Prof. Dr. P.G Sunitha Hiremath, SoCSE
          </p>
          <p className="text-xl font-medium">Prof. Neha Tarannum, SoCSE</p>
          <p className="text-xl font-medium">Prof. Sneha V, SoCSE</p>
          <p className="text-xl font-medium">Prof. Tulasa B, SoCSE</p>
          <p className="text-xl font-medium">Prof. Shilpa Hotagi, SoCSE</p>
        </div>
      </div>
    </div>
  );
};

export default Committee;
