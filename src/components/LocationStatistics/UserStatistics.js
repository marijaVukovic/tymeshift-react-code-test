import Users from '../../assets/img/Users.svg';

const UserStatistics = (props) => {
  return (
    <div className='stat-wrapper'>
      <img src={Users} className='stat-icon' alt='user-icon' />
      <span>{props.userNumber} Users</span>
    </div>
  );
};

export default UserStatistics;
