import './UserFeatures.css'
import ava from '../../assets/userAva.png'


export const UsersFeatures = () => {
  return (
    <div className='userReviewsWrap'>
        <div className="reaviewsItem">
            <img src={ava} alt="userAva" className="userAva" />
            <div className="userReviewsText">
                <h2 className="userQuote">
                ”This product has completely transformed how I manage my projects and deadlines”
                </h2>

                <div className="userNameBlock">
                    <p className="userName">
                    Talia Taylor
                    </p>

                    <p className="userNamePosition">
                    Digital Marketing Director @ Quantum
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
