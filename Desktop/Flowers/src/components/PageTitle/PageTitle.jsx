import "./PageTitle.css"

function PageTitle({title, subtitle}) {
  return (
    <div className="page-title">{title}
    {subtitle ? <p className="subtitle">{subtitle}</p> : null}
    </div>
  );
}

export default PageTitle