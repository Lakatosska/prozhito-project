import { FC, ReactNode } from "react"
import Footer from "../footer/footer"
import Header from "../header/header"

export interface LayoutProps  {
  children: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children } : LayoutProps) => {

  return(
    <>
      <Header />
        {children}
      <Footer />
    </>
  )
}

export default Layout;
