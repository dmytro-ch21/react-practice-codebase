function SampleComponent({ title, description, display }) {
  return (
    display && (
      <div className="w-25">
        <div className="card my-3 p-2" data-bs-theme="light">
          <div className="card-body">
            <h3 className="card-title">{title}</h3>
            <p className="card-text">{description}</p>
          </div>
        </div>
      </div>
    )
  );
}

export default SampleComponent;
