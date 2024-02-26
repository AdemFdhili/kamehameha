import './index.css';
import ProfileImg from '../../Assets/Profile-image.jpg'; 



export default function ProfileArea() {
  return (
      <div className='background'>
          <div className='profile-area'>
              <ProfileImg/>
              <p className='introducing'>Report for</p>
              <h1>Jeremy Robson</h1>
          </div>
          <span>Daily</span>
          <span>Weekly</span>
          <span>Monthly</span>
      </div>
  );
}