import homeLogo from "../assets/images/home_logo.png";

export default function Home() {
  return (
    <div>
      {/* Info */}
      <div className="flex flex-col items-center justify-center">
        <img src={homeLogo} alt="" className="w-[192px] h-[192px] mt-32" />
        <div className="text-[#000000] text-[60px] font-extrabold leading-[72.61px]">
          <p>Vivekanand Education Society's</p>
          <p>Institute of Technology</p>
        </div>

        <div className="text-[35px] font-semibold leading-[42.36px] mt-10">
          <p>
            An Automomous Institute Affiliated to University of Mumbai, Approved
            by
          </p>
          <p>AICTE & Recognized by Govt. of Maharashtra</p>
        </div>

        <div className="w-[150px] border-[5px] border-[#FFFFFF] rounded-lg mt-20"></div>

        <div className="text-[40px] font-semibold leading-[48.41px] italic mt-20">
          <p>Department of Artificial Intelligence & Data Science</p>
        </div>

        <div className="text-[60px] font-bold leading-[72.61px] mt-5">
          <p className="bg-gradient-to-r from-[#1D4EFE] to-[#1A8DF7] inline-block text-transparent bg-clip-text">
            Project Prakalpa
          </p>
        </div>

        <div className="text-[#000000] text-[25px] font-medium leading-[30.26px] mt-5">
          <p>BE Major Projects, Academic Year 2023-34</p>
        </div>

        <div className="mt-5">
          <img
            src="https://s3-alpha-sig.figma.com/img/14ae/d4b1/1871a86a906c508697a189a2cb9e21ff?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FuCHg-R52ftnw0nIsxvt1HKYvTMH8ngVx-fxBD45JXYarAZ-pUgwDUh~46LrSE-F28OUGhuE8Mf4s~TsQorDA9dzr79pL9IycNytexTKH8rHkDqJY-BtLx~c14rWtrOtl5-6a0QjaF6SVKaEOofg5b9X~YhIbMb4cRfYEFwgOvE53RYvWN0N82iIxGuLlto-alvGdOOfwH7zYZgd1qJdNP473bEoqOksjpS4fvccMyxgmyvf2PmpgVKggTLIYKmmrTyj0I09yDhgat~HA5~QVTLknMqgrI~fqIeVTJ26rFbqfKpEV9jLNuCAfYnFwcbywwFW9CeD8lMKBw~7Nv0Xdw__"
            alt=""
            className="h-[220.6px] w-[128.2px]"
          />
        </div>
      </div>

      {/* ProjectList */}
      <div></div>
    </div>
  );
}
