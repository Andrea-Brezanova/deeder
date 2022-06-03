import { useNavigate, NavLink } from "react-router-dom";

function FunctionClick() {
  const navigate = useNavigate();

  return (
    <>
      <div className="action-container">
      <div className="main-body action-container">
       
          <NavLink to="/posts" className="blue-buttons offer-help">Yes I want to offer</NavLink>
        
       
          <NavLink to="/protected/get-help" className="blue-buttons offer-help">
            I'd love to request help
          </NavLink>

          <NavLink to="/protected/get-company" className="blue-buttons offer-help">
            I'd love to request company
          </NavLink>
  
        </div>
      </div>
    </>
  );
}

export default FunctionClick;
