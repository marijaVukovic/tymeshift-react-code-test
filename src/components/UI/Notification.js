const Notification = ({ title, message }) => {
  return (
    <section className='notification-message'>
      <h2>{title}</h2>
      <p>{message}</p>
    </section>
  );
};

export default Notification;
