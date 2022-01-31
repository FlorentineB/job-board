const Job = (props) => {
  return (
    <div className="item" style={{ "border-color": props.borderColor }}>
      <h2>{props.title}</h2>
      <p>
        {props.contractType} {props.country} {props.city}
      </p>
    </div>
  );
};

export default Job;
