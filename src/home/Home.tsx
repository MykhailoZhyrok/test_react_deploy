
import { Banner } from './banner/Banner'
import { Features } from './features/Features'
import { Header } from './header/Header'
import { Payments } from './payment/Payments'
import { Pricetable } from './priceTable/Pricetable'
import { UsersFeatures } from './usersFeatures/UsersFeatures'

import './Home.css'

export const Home = () => {
  return (
    <>
    <div className="topBack">


    <Header />

    <Banner/>
    </div>
    <Features/>
    <UsersFeatures/>

    <Pricetable />

    <Payments/>
    <Header />
    </>
  )
}
