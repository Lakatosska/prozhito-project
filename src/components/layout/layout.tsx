import { FC } from "react"
import Footer from "../footer/footer"
import Header from "../header/header"



export const Layout: FC<any> = ({ children } : any) => {

  return(
    <>
      <Header />
        {children}
      <Footer />
    </>
  )
}

export default Layout;
