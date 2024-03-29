import Link from 'next/link'

const Header = () => {
    return (
        <>
            <header className="md:absolute top-0 flex items-center justify-between w-full px-3 md:px-10 h-[15vh] max-h-[60px] md:max-h-[90px] md:min-h-[85px]">
                <Link href="." className="flex items-center select-none" title="Amabo learn homepage." >
                    <img  className="h-6 w-6 mr-2" src="/logo.png" />
                    <span className="text-orange-2 text-lg md:text-2xl font-bold" >AMABO LEARN</span>
                </Link>
                <a href="mailto:amabolearnintake@gmail.com" className="outline-offset-2 hover:outline-2 hover:outline-dashed hover:outline-orange-1 text-white-1 hidden md:block font-normal text-sm md:text-base bg-orange-1 py-1 px-4 rounded-full" title="Send us an email" >
                    MAIL US
                </a>
            </header>
        </>
    )
}

export default Header