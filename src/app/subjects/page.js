import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata = {
  title : "Explore Available Subjects - Amabo Learn",
  "description" : "Explore All of our available Subjects"
}

export default function Home() {

  return (
    <>
    <Header />
    <div className="mt-20 h-2 w-full py-10">
      <h1>
        EXPLORE 
      </h1>
    </div>
    <Footer />
    </>
  )
}
