import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function Home() {

  return (
    <>
    <Header />
    <div className="flex justify-center md:items-center h-full w-full bg-bg bg-no-repeat bg-white-1 bg-cover bg-center bg-local pt-10" >
      <div className="bg-white-1/85 max-w-[850px] h-max min-w-[310px] min-h-[350px] p-4 md:p-10">
        <p className="text-black-1 font-extrabold text-2xl md:text-3xl">
          <span className="text-orange-1">CREATED</span> AND <span className="text-orange-1">RUN</span> BY YOUNG AND INNOVATIVE MINDS WHO ARE WORKING TO HELP <span className="text-purple">HIGHSCHOOL</span> STUDENTS GET ACCESS TO
        </p>
        <p className="text-black-1 mt-4">
          free <b>online</b> & <b>offline</b> <span className="text-purple">learning materials</span> and help improve learning via <strong>socializing</strong>
        </p>
        <a href="./subjects" title="Explore available subjects." className="outline-offset-2 hover:outline-offset-4 outline-2 outline-dashed outline-orange-1 block w-max text-base font-medium text-white-1 bg-orange-1 rounded-full mt-10 px-6 py-1" >
          EXPLORE
        </a>
      </div>
    </div>
    <div className="w-full bg-white-1 p-4 md:py-10 py-14" >
      <h2 className="text-black-1 text-xl md:text-3xl font-medium">
        RECENT LESSONS
      </h2>
      <div className="w-11/12 h-5/6 mt-10 mx-auto flex items-center justify-around flex-wrap md:flex-nowrap">
        <a href="#article" title="read new lesson" className="w-11/12 md:w-1/3 h-[400px] md:h-[465px] hover:scale-95 transition border m-2 border-grey/10 rounded-md border-solid">
          <div className="flex justify-center items-center w-full bg-orange-2/40 h-2/3">
            <div className="flex justify-center items-center w-44 h-10 bg-orange-2">
              <p className="text-white-1 font-bold text-lg md:text-xl">
                Physics
              </p>
            </div>
          </div>
          <div className="p-4">
            <p className="text-black-1/90 font-bold text-base md:text-lg text-center" >Title of the lesson</p>
          </div>
        </a>
        <a href="#article" title="read new lesson" className="w-11/12 md:w-1/3 h-[400px] md:h-[465px] hover:scale-95 transition border m-2 border-grey/10 rounded-md border-solid">
          <div className="flex justify-center items-center w-full bg-purple/40 h-2/3">
            <div className="flex justify-center items-center w-44 h-10 bg-purple">
              <p className="text-white-1 font-bold text-lg md:text-xl">
                Biology
              </p>
            </div>
          </div>
          <div className="p-4">
            <p className="text-black-1/90 font-bold text-base md:text-lg text-center" >Title of the lesson</p>
          </div>
        </a>
        <a href="#article" title="read new lesson" className="w-11/12 md:w-1/3 h-[400px] md:h-[465px] hover:scale-95 transition border m-2 border-grey/10 rounded-md border-solid">
          <div className="flex justify-center items-center w-full bg-grey/40 h-2/3">
            <div className="flex justify-center items-center w-44 h-10 bg-grey">
              <p className="text-white-1 font-bold text-lg md:text-xl">
                Mathematics
              </p>
            </div>
          </div>
          <div className="p-4">
            <p className="text-black-1/90 font-bold text-base md:text-lg text-center" >Title of the lesson</p>
          </div>
        </a>
      </div>
    </div>

    <div className="flex justify-between items-center flex-wrap md:flex-nowrap bg-grey/10 w-full divide-y-4 md:divide-y-0 md:divide-x-4 divide-orange-1 bg-white-1 py-14" >
      <div className="w-11/12 md:w-1/2 min-w-[310px] h-[420px] md:h-[480px] p-4 md:p-10">
        <p className="text-black-1 text-xl md:text-3xl font-bold">
          WANT TO HELP POST CONTENT ?
        </p>
        <p className="text-black-1 text-base font-normal mt-12">
          Amabo Learn is an E-learning platform under development and we are in need of other great minds to join us work things out.
        </p>
        <div className="w-6/11 mt-20">
          <a className="mr-10 py-1 md:py-2 px-6 md:px-8 text-base hover:opacity-70 font-normal text-white-1 bg-black-1 border-2 border-black-1 rounded-full" href="./signup" title="Signup to help post educative content.">
            Join us
          </a>
          <a className="py-1 md:py-2 px-6 md:px-8 text-base hover:opacity-70 font-normal text-black-1 border-2 border-black-1 rounded-full" href="./login" title="Login to help post educative content.">
            Login
          </a>
        </div>
      </div>
      <div className="w-11/12 md:w-1/2 min-w-[310px] h-[420px] md:h-[480px] p-4 md:p-10">
        <p className="text-black-1 text-base fontnormal">
          To become an admin on this platform, you would be interviewed online by the owners of this platform and if you pass the interview, an acess pin would be sent to you which you would use to signup to become an admin
        </p>
        <p className="text-black-1 text-base fontnormal mt-10">
          Kindly end an email to <a href="mailto:user@example.com" className="text-purple hover:opacity-60" title="Send us an email" >our email address</a> describing how you can help this platform if you are an admin. After acquiring the access pin, fill the <a href="./signup" className="text-purple hover:opacity-60" title="Signup to help post educative content." >signup form</a>
        </p>
        <p className="text-black-1 text-base fontnormal mt-10">
          Joining us is voluntary and you would not be paid for the services you provide.
        </p>
      </div>
    </div>
    <Footer />
    </>
  )
}
