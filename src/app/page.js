import Header from "@/components/Header"

export default function Home() {

  return (
    <>
    <Header />
    <div className="flex justify-center items-center h-full w-full bg-bg bg-no-repeat bg-white-1 bg-cover bg-center bg-local" >
      <div className="bg-white-1/85 max-w-[850px] h-max min-w-[310px] min-h-[350px] p-10">
        <p className="text-black font-extrabold text-3xl">
          <span className="text-orange-1">CREATED</span> AND <span className="text-orange-1">RUN</span> BY YOUNG AND INNOVATIVE MINDS WHO ARE WORKING TO HELP <span className="text-purple">HIGHSCHOOL</span> STUDENTS GET ACCESS TO
        </p>
        <p className="text-black mt-4">
          free <b>online</b> & <b>offline</b> <span className="text-purple">learning materials</span> and help improve learning via <strong>socializing</strong>
        </p>
        <a href="./subjects" title="Explore available subjects." className="block w-max text-base font-medium text-white-1 bg-orange-1 rounded-full mt-10 px-6 py-1" >
          EXPLORE
        </a>
      </div>
    </div>
    </>
  )
}
