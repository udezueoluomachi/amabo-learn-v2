import Link from 'next/link'

const Footer = () => {
    return (
        <>
            <footer className="bg-black-1 pb-4">
                <div className="flex items-center justify-between w-full px-3 md:px-10 h-[15vh] max-h-[60px] md:max-h-[90px] md:min-h-[85px]">
                    <Link href="." className="flex items-center select-none" title="Amabo learn homepage." >
                        <img  className="h-6 w-6 mr-2 grayscale" src="/logo.png" />
                        <span className="text-white-1 text-lg md:text-2xl font-bold" >AMABO LEARN</span>
                    </Link>
                    <a href="mailto:amabolearnintake@gmail.com" className="outline-offset-2 hover:outline-2 hover:outline-dashed hover:outline-orange-1 text-white-1 hidden md:block font-normal text-sm md:text-base bg-grey py-1 px-4 rounded-full" title="Send us an email" >
                        MAIL US
                    </a>
                </div>
                <div className="px-3 md:px-14 mt-10 mb-16">
                    <h3 className="text-white-1 text-lg md:text-xl font-Normal" >
                        CONNECT WITH US
                    </h3>
                    <div className="mt-4">
                        <ul>
                            <li>
                                <a href="https://web.facebook.com/profile.php?id=100077235709724" className="text-white-3 hover:underline" title="Our social link" >
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/udezueoluomachi/amabo-learn-v2" className="text-white-3 hover:underline" title="Our social link" >
                                    Github
                                </a>
                            </li>
                            <li>
                                <a href="https://amabolearnsspace.quora.com/" className="text-white-3 hover:underline" title="Our social link" >
                                    Quora
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <p className="text-xs text-white-2 font-light text-center">COPYRIGHT 2024 AMABO LEARN, ALL RIGHTS RESERVED.</p>
            </footer>
        </>
    )
}

export default Footer