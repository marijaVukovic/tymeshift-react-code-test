import Views from '../../assets/img/Views.svg';

const ViewStatistics = ({ locationViews }) => {
  return (
    <div className='stat-wrapper'>
      <img src={Views} className='stat-icon' alt='view-icon' />
      <span>{locationViews} Views</span>
    </div>
  );
};

export default ViewStatistics;
