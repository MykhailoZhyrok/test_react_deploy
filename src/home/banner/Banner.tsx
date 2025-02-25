
import styles from './banner.module.css'
import bannerCube from '../../assets/bannerCube.png'
import { MarqueeCarousel } from '../../utils/Maruee'



export const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.bannerCont}>
                <div className={styles.bannerMain}>
                    <div className={styles.bannerTextCont}>
                        <div className={styles.bannerTextContHeader}>
                            <p className={styles.bannerHeaderTextPink}>
                                NEW
                            </p>


                            <p className={styles.bannerHeaderTitle}>
                                Latest integration just arrived
                            </p>
                        </div>

                        <h1 className={styles.bannerTitle}>
                            Elevate your SEO efforts.
                        </h1>


                        <p className={styles.bannerDesc}>
                            Elevate your site’s visibility effortlessly with AI, where smart technology meets user-friendly SEO tools.
                        </p>


                        <div className={styles.bannerInputWrapper}>
                            <input type="email" className={styles.bannerInput} placeholder='Your email' />
                            <button className={styles.bannerInputButtons}>Join waitlist</button>
                        </div>
                    </div>

                    <img src={bannerCube} alt="bannerImg" className={styles.bannerImg} />

                </div>




                <div className={styles.marqueeWrap}>
                    <p className={styles.marqueeTitle}>
                        Trusted by top innovative teams:
                    </p>



   
                    <MarqueeCarousel/>
         
                {/* <div className={styles.marqueeCarouselWrap}>
                    <div className={styles.marqueCont}>
                        <img src={celestial} alt="marqueeLogo" className={styles.marqueeLogo} />
                        <img src={apex} alt="marqueeLogo" className={styles.marqueeLogo} />
                        <img src={quantum} alt="marqueeLogo" className={styles.marqueeLogo} />
                        <img src={acme} alt="marqueeLogo" className={styles.marqueeLogo} />
                        <img src={pulse} alt="marqueeLogo" className={styles.marqueeLogo} />
                        <img src={celestial} alt="marqueeLogo" className={styles.marqueeLogo} />
                        <img src={apex} alt="marqueeLogo" className={styles.marqueeLogo} />
                        <img src={quantum} alt="marqueeLogo" className={styles.marqueeLogo} />
                        <img src={acme} alt="marqueeLogo" className={styles.marqueeLogo} />
                        <img src={pulse} alt="marqueeLogo" className={styles.marqueeLogo} />
                    </div>
                </div> */}

                </div>
            </div>



        </div>
    )
}
