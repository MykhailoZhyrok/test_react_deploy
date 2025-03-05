import './PriceTable.css'

export const Pricetable = () => {
    return (



        <div className='priceTableWrap'>

            <div className="blockHeader">
                <p className="blockMainTitle">
                    Syndicate Pricing
                </p>

                <h2 className="headerSecTitle">
                    Unlock the power of group purchasing. Choose the right plan to maximize your savings.
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
                                    Enterprise
                                </p>
                                <p className="thHeaderDesc">
                                    Full Access
                                </p>
                            </th>
                        </tr>
                        <tr>
                            <td className='hidden'>Price</td>
                            <td>$19/mo</td>
                            <td className='activeCol'>$49/mo</td>
                            <td>$99/mo</td>
                        </tr>
                        <tr>
                            <td className='hidden'>Maximum Order Value</td>
                            <td>Up to $5,000</td>
                            <td className='activeCol'>Up to $20,000</td>
                            <td>Unlimited</td>
                        </tr>
                        <tr>
                            <td className='hidden'>Access to Syndicate Orders</td>
                            <td>Limited (5 per month)</td>
                            <td className='activeCol'>Standard (20 per month)</td>
                            <td>Unlimited</td>
                        </tr>
                        <tr>
                            <td className='hidden'>Exclusive Supplier Deals</td>
                            <td>Basic Access</td>
                            <td className='activeCol'>Priority Access</td>
                            <td>Top-Tier Access</td>
                        </tr>
                        <tr>
                            <td className='hidden'>Syndicate Matching</td>
                            <td>Manual Search</td>
                            <td className='activeCol'>AI-Powered Matching</td>
                            <td>Dedicated Support</td>
                        </tr>
                        <tr>
                            <td className='hidden'>Order Consolidation</td>
                            <td>Standard</td>
                            <td className='activeCol'>Optimized Shipping</td>
                            <td>Priority Logistics</td>
                        </tr>
                        <tr>
                            <td className='hidden'>Multi-Business Collaboration</td>
                            <td>Up to 2 Partners</td>
                            <td className='activeCol'>Up to 5 Partners</td>
                            <td>Unlimited Partners</td>
                        </tr>
                        <tr>
                            <td className='hidden'>Priority Customer Support</td>
                            <td>Email Support</td>
                            <td className='activeCol'>Priority Email & Chat</td>
                            <td>Dedicated Account Manager</td>
                        </tr>
                        <tr>
                            <td className='hidden'>API Integration</td>
                            <td>Not Included</td>
                            <td className='activeCol'>Available</td>
                            <td>Premium Access</td>
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
