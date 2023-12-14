const CardSingleProject = () => {
  return (
    <div className="card--container">
      <img src="" alt="project logo image " className="project--logo--image" />
      <div className="info--container">
        <h2 className="project--title"></h2>
        <p className="project--info"></p>
      </div>

      <div className="link--container">
        <a href="" className="github--link"></a>
        <a href="" className="youtube--link"></a>
        <a href="" className="website--link"></a>
      </div>

      <div className="stack--icons--container">
        <i className="react--icon"></i>
        <i className="html--icon"></i>
        <i className="css--icon"></i>
        <i className="express--icon"></i>
        <i className="mongoDb--icon"></i>
        <i className="js--icon"></i>
        <i className="postGre--icon"></i>
      </div>
    </div>
  );
};


export default CardSingleProject;
