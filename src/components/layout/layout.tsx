import { FC } from "react"
import Footer from "../footer/footer"
import Header from "../header/header"

export const Layout: FC = ({ children }) => {

  return(
    <>
      <Header />
        {children}
      <Footer />
    </>
  )
}

export default Layout;
