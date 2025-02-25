import featuresImg from '../../assets/featuresImg.png'
import reports from '../../assets/reports.svg'
import smart from '../../assets/auto.svg'
import seo from '../../assets/seo.svg'
import one_click from '../../assets/one-click.svg'
import compiter from '../../assets/competitor.svg'
import bell from '../../assets/bell.svg'

import './Features.css'


export const Features = () => {
    return (
        <div className='featuresWrap'>
            <div className="blockHeader">
                <p className="blockTitle">
                    Everything you need
                </p>

                <h2 className="headerSecTitle">
                    Harness the power of AI, making search engine optimization intuitive and effective for all skill levels.
                </h2>

            </div>

            <img src={featuresImg} alt="featuresImg" className="featuresImg" />


            <div className="featuresUitls">

                <div className="featuresUtilsRow">
                    <div className="featuresItem">
                        <div className="featuresItemHeader">
                            <img src={reports} alt="featuresIcon" className="featuresIcon" />

                            <p className="featuresUtilsTitle">
                                Visual reports
                            </p>
                        </div>

                        <p className="featuresItemUtils">
                            Visual insights into your site’s performance.
                        </p>
                    </div>

                    <div className="featuresItem">
                        <div className="featuresItemHeader">
                            <img src={seo} alt="featuresIcon" className="featuresIcon" />

                            <p className="featuresUtilsTitle">
                                SEO goal setting
                            </p>
                        </div>

                        <p className="featuresItemUtils">
                            Helps you set and achieve SEO goals with guided assistance.
                        </p>
                    </div>

                    <div className="featuresItem">
                        <div className="featuresItemHeader">
                            <img src={one_click} alt="featuresIcon" className="featuresIcon" />

                            <p className="featuresUtilsTitle">
                                One-click optimization
                            </p>
                        </div>

                        <p className="featuresItemUtils">
                            Perform complex SEO audits and optimizations with a single click.
                        </p>
                    </div>
          
                </div>

                <div className="featuresUtilsRow">
                <div className="featuresItem">
                        <div className="featuresItemHeader">
                            <img src={smart} alt="featuresIcon" className="featuresIcon" />

                            <p className="featuresUtilsTitle">
                                Smart Keyword Generator
                            </p>
                        </div>




                        <p className="featuresItemUtils">
                            Automatic suggestions and the best keywords to target.
                        </p>
                    </div>


                    <div className="featuresItem">
                        <div className="featuresItemHeader">
                            <img src={bell} alt="featuresIcon" className="featuresIcon" />

                            <p className="featuresUtilsTitle">
                                Automated alerts
                            </p>
                        </div>




                        <p className="featuresItemUtils">
                            Automatic notifications about your SEO health, including quick fixes.
                        </p>
                    </div>
                    <div className="featuresItem">
                        <div className="featuresItemHeader">
                            <img src={compiter} alt="featuresIcon" className="featuresIcon" />

                            <p className="featuresUtilsTitle">
                                Competitor reports
                            </p>
                        </div>




                        <p className="featuresItemUtils">
                            Provides insights into competitors’ keyword strategies and ranking.

                        </p>
                    </div>
                </div>


        
            </div>
        </div>
    )
}
