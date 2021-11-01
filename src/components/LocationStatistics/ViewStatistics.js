import Views from '../../assets/img/Views.svg';

const ViewStatistics = (props) => {
  return (
    <div className='stat-wrapper'>
      <img src={Views} className='stat-icon' alt='view-icon' />
      <span>{props.locationViews} Views</span>
    </div>
  );
};

export default ViewStatistics;
