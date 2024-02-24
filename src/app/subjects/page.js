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
    <div className="my-20 w-full p-6 md:p-16 mb-20">
      <h1 className="text-center font-medium text-xl md:text-3xl text-black-1 my-6">
        EXPLORE AVAILABLE SUBJECTS
      </h1>
      <div className="px-4 py-8 h-max min-h-40 w-full bg-white-2">
        <ul>
            <li>
                <a href="./physics" className="text-black-1 hover:underline" title="View topics on this subject" >
                    Physics
                </a>
            </li>
            <li>
                <a href="./mathematics" className="text-black-1 hover:underline" title="View topics on this subject" >
                    Mathematics
                </a>
            </li>
            <li>
                <a href="./biology" className="text-black-1 hover:underline" title="View topics on this subject" >
                    Biology
                </a>
            </li>
        </ul>
      </div>
    </div>
    <Footer />
    </>
  )
}
