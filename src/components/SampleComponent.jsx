function SampleComponent({title, description}) {
  return (
    <div className="w-25">
      <div className="card" data-bs-theme="light">
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default SampleComponent;
