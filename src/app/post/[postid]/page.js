import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata = {
  title : "Post title - Subject | Amabo Learn",
  "description" : "Full description of the topic"
}

export default function Home({params}) {

  return (
    <>
    <Header />
    <div className="my-20 w-full p-6 md:p-16">
      <div className="flex items-center flex-col p-4 h-60 md:h-96 w-full bg-pattern-brand bg-no-repeat bg-white-1 bg-cover bg-center">
        <h1 className="text-black-1 font-bold text-xl md:text-2xl mt-10" ># SUBJECT NAME</h1>
        <h2 className="text-purple font-bold text-2xl md:text-4xl mt-14 md:mt-20" >SUBJECT FULL TOPIC</h2>
      </div>
    </div>
    <div className="flex justify-between flex-col md:flex-row w-full text-white-2 p-5 md:p-10 mt-12">
        <div className="bg-black-1 w-full md:w-2/4 max-w-[500px] h-max px-4 py-6 mt-6 md:mx-10" >
            <h3 className="text-xl md:text-2xl font-bold">
                LEARNING OBJECTIVES
            </h3>
            <ul className="list-disc list-inside text-base font-normal mt-6">
                <li>
                    Lorem
                </li>
                <li>
                    Lorem
                </li>
                <li>
                    Lorem
                </li>
                <li>
                    Lorem
                </li>
                <li>
                    Lorem
                </li>
                <li>
                    Lorem
                </li>
                <li>
                    Lorem
                </li>
                <li>
                    Lorem
                </li>
            </ul>
        </div>
        <div className="bg-black-1 w-full md:w-2/4 max-w-[500px] h-max px-4 py-6 mt-6 md:mx-10" >
            <h3 className="text-xl md:text-2xl font-bold">
                MINI GLOSSARY
            </h3>
            <ul className="list-disc list-inside text-base font-normal mt-6">
                <li>
                    Lorem
                </li>
                <li>
                    Lorem
                </li>
                <li>
                    Lorem
                </li>
                <li>
                    Lorem
                </li>
            </ul>
        </div>
    </div>
    <div className="w-full px-6 md:px-20">
        <div className="w-full h-max p-6 bg-white-2">
            <p>
            MAIN CONTENT
            </p>
        </div>
    </div>
    <div className="flex justify-between flex-col md:flex-row w-full text-white-2 p-5 md:p-10 mt-12">
        <div className="bg-orange-1 w-full md:w-2/4 max-w-[500px] h-max px-4 py-6 mt-6 md:mx-10" >
            <h3 className="text-xl md:text-2xl font-bold">
                SUMMARY
            </h3>
            <ul className="list-disc list-inside text-base font-normal mt-6">
                <li>
                    Lorem
                </li>
                <li>
                    Lorem
                </li>
                <li>
                    Lorem
                </li>
                <li>
                    Lorem
                </li>
                <li>
                    Lorem
                </li>
                <li>
                    Lorem
                </li>
                <li>
                    Lorem
                </li>
                <li>
                    Lorem
                </li>
            </ul>
        </div>
        <div className="bg-orange-1 w-full md:w-2/4 max-w-[500px] h-max px-4 py-6 mt-6 md:mx-10" >
            <h3 className="text-xl md:text-2xl font-bold">
                EXERCISE
            </h3>
            <ul className="list-disc list-inside text-base font-normal mt-6">
                <li>
                    Lorem
                </li>
                <li>
                    Lorem
                </li>
                <li>
                    Lorem
                </li>
                <li>
                    Lorem
                </li>
            </ul>
        </div>
    </div>
    <Footer />
    </>
  )
}
