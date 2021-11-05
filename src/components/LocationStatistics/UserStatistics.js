import Users from '../../assets/img/Users.svg';

const UserStatistics = ({ userNumber }) => {
  return (
    <div className='stat-wrapper'>
      <img src={Users} className='stat-icon' alt='user-icon' />
      <span>{userNumber} Users</span>
    </div>
  );
};

export default UserStatistics;
