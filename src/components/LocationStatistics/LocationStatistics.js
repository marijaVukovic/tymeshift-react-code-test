import UserStatistics from './UserStatistics';
import TimezoneStatistics from './TimezoneStatistics';
import ViewStatistics from './ViewStatistics';

const LocationStatistics = (props) => {
  return (
    <div>
      <UserStatistics userNumber={props.userNumber} />
      <TimezoneStatistics locationTimezone={props.locationTimezone} />
      <ViewStatistics locationViews={props.locationViews} />
    </div>
  );
};

export default LocationStatistics;
