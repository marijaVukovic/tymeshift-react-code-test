import UserStatistics from './UserStatistics';
import TimezoneStatistics from './TimezoneStatistics';
import ViewStatistics from './ViewStatistics';

const LocationStatistics = ({
  userNumber,
  locationTimezone,
  locationViews,
}) => {
  return (
    <div>
      <UserStatistics userNumber={userNumber} />
      <TimezoneStatistics locationTimezone={locationTimezone} />
      <ViewStatistics locationViews={locationViews} />
    </div>
  );
};

export default LocationStatistics;
