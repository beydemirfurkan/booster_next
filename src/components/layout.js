import Navbars from './navbar'
import Footer from './footer'

export default function Layout({ children }) {
    return(
      <>
        <Navbars />
           <main>{children}</main>
        <Footer />
      </>
    ) 
  }