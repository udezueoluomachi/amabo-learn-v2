import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Link from 'next/link'

export const metadata = {
  title : "Page not found - Amabo Learn",
  "description" : "404 - Resource not found"
}

export default function Home() {

  return (
    <>
    <Header />
    <div className="my-20 w-full p-6 md:p-16 mb-24">
      <h1 className="text-center font-medium text-xl md:text-3xl text-black-1 my-6">
        404 RESOURCE NOT FOUND
      </h1>
    </div>
    <Footer />
    </>
  )
}
