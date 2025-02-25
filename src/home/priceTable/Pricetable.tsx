import React from 'react'
import './PriceTable.css'

export const Pricetable = () => {
    return (

  


        <div className='priceTableWrap'>

            <div className="blockHeader">
                <p className="blockMainTitle">
                    Pricing
                </p>

                <h2 className="headerSecTitle">
                    Choose the right plan to meet your SEO needs and start optimizing today.
                </h2>

            </div>
            <div className="priceTableMainWrap">
            <div className="tableWrap">
                <table>
                    <tr className='thWrapper'>
                        <th className='hidden'></th>
                        <th className='thBlock'>
                            <p className="thHeaderTitle">
                            Basic 
                            </p>
                            <p className="thHeaderDesc">
                            Get Started
                            </p>

                        </th>
                        <th className='thBlock activeCol' >
                            <p className="thHeaderTitle">

                            Pro 
                            </p>
                            <p className="thHeaderDesc active">
                            Get Started
                            </p>

                        </th>
                        <th className='thBlock'>
                            <p className="thHeaderTitle">
                            Business 
                            </p>
                            <p className="thHeaderDesc">
                            Get Started
                            </p>

                        </th>
                    </tr>
                    <tr>
                        <td className='hidden'>Price</td>
                        <td>$29</td>
                        <td className='activeCol'>$79</td>
                        <td>$149</td>
                    </tr>
                    <tr>
                        <td className='hidden'>Keyword optimization</td>
                        <td>Дані 5</td>
                        <td className='activeCol'>Дані 6</td>
                        <td>Дані 6</td>
                    </tr>

                    <tr>
                        <td className='hidden'>Automated meta tags</td>
                        <td>Дані 5</td>
                        <td className='activeCol'>Дані 6</td>
                        <td>Дані 6</td>
                    </tr>

                    <tr>
                        <td className='hidden'>SEO Monitoring</td>
                        <td>Дані 5</td>
                        <td className='activeCol'>Дані 6</td>
                        <td>Дані 6</td>
                    </tr>


                    <tr>
                        <td className='hidden'> Monthly reports</td>
                        <td>Дані 5</td>
                        <td className='activeCol'>Дані 6</td>
                        <td>Дані 6</td>
                    </tr>

                    <tr>
                        <td className='hidden'>Content suggestions</td>
                        <td>Дані 5</td>
                        <td className='activeCol'>Дані 6</td>
                        <td>Дані 6</td>
                    </tr>
                    <tr>
                        <td className='hidden'>Link optimization</td>
                        <td>Дані 5</td>
                        <td className='activeCol'>Дані 6</td>
                        <td>Дані 6</td>
                    </tr>

                    <tr>
                        <td className='hidden'>Multi-user access</td>
                        <td>Дані 5</td>
                        <td className='activeCol'>Дані 6</td>
                        <td>Дані 6</td>
                    </tr>

                    <tr>
                        <td className='hidden'>API Integration</td>
                        <td>Дані 5</td>
                        <td className='activeCol'>Дані 6</td>
                        <td>Дані 6</td>
                    </tr>

                    <tr>
                        <td className='hidden'></td>
                        <td></td>
                        <td className='activeCol bottom'></td>
                        <td></td>
                    </tr>
                    
                </table>
            </div>
        </div>
        </div>
    )
}
