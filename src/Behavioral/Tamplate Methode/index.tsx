import { ReactNode } from "react";


export default function PageLayout({children}:{children:ReactNode}){


    return <>
    
        <Navbar/>
        <SideBar/>
        {children}
        <Footer/>
    </>
}

export const Navbar = ()=>{

    return <nav>
        Your Nav Bar 
    </nav>
}
export const Footer = ()=>{

    return <footer>
        Your Footer
    </footer>
}
export const SideBar = ()=>{

    return <section>
        Your Side Bar 
    </section>
}