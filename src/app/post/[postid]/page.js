import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Link from 'next/link'

export const metadata = {
  title : "Biology - Amabo Learn",
  "description" : "Explore All of our available Topics on biology"
}

export default function Home({params}) {

  return (
    <>
    <Header />
    <div className="my-20 w-full p-6 md:p-16 mb-20">
      <div className="flex items-center flex-col p-4 h-60 md:h-96 w-full bg-pattern-brand bg-no-repeat bg-white-1 bg-cover bg-center">
        <h1 className="text-black-1 font-bold text-xl md:text-2xl mt-10" ># SUBJECT NAME</h1>
        <h2 className="text-purple font-bold text-2xl md:text-4xl mt-14 md:mt-20" >SUBJECT FULL TOPIC</h2>
      </div>
    </div>
    <Footer />
    </>
  )
}
