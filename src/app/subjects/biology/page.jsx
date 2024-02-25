import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Link from 'next/link'

export const metadata = {
  title : "Biology - Amabo Learn",
  "description" : "Explore All of our available Topics on biology"
}

export default function Home() {

  return (
    <>
    <Header />
    <div className="my-20 w-full p-6 md:p-16 mb-20">
      <h1 className="text-center font-medium text-xl md:text-3xl text-black-1 my-6">
        EXPLORE AVAILABLE BIOLOGY TOPICS
      </h1>
      <div className="px-4 py-8 h-max min-h-40 w-full bg-white-2">
        <ul>
            <li>
                <Link href="./biology#" className="text-black-1 hover:underline" title="Read article" >
                    Conservation of Natural Resources
                </Link>
            </li>
        </ul>
        <p className="text-xs text-BLACK-1 mt-20 font-light text-center">
          MAIL US  OR CHECK BACK LATER IF YOU DO  NOT FIND WHAT YOU SEEK
        </p>
      </div>
    </div>
    <Footer />
    </>
  )
}
