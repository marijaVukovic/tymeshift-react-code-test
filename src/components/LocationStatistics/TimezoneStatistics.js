import Timezone from '../../assets/img/Timezone.svg';

const TimezoneStatistics = (props) => {
  const time = new Date(props.locationTimezone);
  const timeStamp = time.toLocaleTimeString('en-US', {
    timeZone: 'CET',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'long',
  });

  return (
    <div className='stat-wrapper'>
      <img src={Timezone} className='stat-icon' alt='timezone-icon' />
      <span>{timeStamp}</span>
    </div>
  );
};

export default TimezoneStatistics;
