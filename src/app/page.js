import Header from "@/components/Header"

export default function Home() {

  return (
    <>
    <Header />
    <div className="flex justify-center md:items-center h-full w-full bg-bg bg-no-repeat bg-white-1 bg-cover bg-center bg-local pt-10" >
      <div className="bg-white-1/85 max-w-[850px] h-max min-w-[310px] min-h-[350px] p-4 md:p-10">
        <p className="text-black font-extrabold text-xl md:text-3xl">
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
    <div className="h-full w-full bg-white-1 p-10 py-14" >
      <h2 className="text-black text-xl md:text-3xl font-medium">
        RECENT LESSONS
      </h2>
      <div className="w-11/12 h-5/6 mt-10 mx-auto flex items-center justify-around flex-wrap md:flex-nowrap">
        <a href="#article" title="read new lesson" className="w-1/3 min-w-[310px] h-full hover:-scale-75 border m-2 border-grey/10 rounded-md border-solid">
          <div></div>
          <div></div>
        </a>
        <a href="#article" title="read new lesson" className="w-1/3 min-w-[310px] h-full hover:-scale-75 border m-2 border-grey/10 rounded-md border-solid">
          <div></div>
          <div></div>
        </a>
        <a href="#article" title="read new lesson" className="w-1/3 min-w-[310px] h-full hover:-scale-75 border m-2 border-grey/10 rounded-md border-solid">
          <div></div>
          <div></div>
        </a>
      </div>
    </div>
    </>
  )
}
