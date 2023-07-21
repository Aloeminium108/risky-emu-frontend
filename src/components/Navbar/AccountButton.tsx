import React, { FunctionComponent } from "react"
import { useNavigate } from "react-router"
import { User } from "../../context/CurrentUserContext";

const AccountButton: FunctionComponent<{ currentUser: User }> = (props) => {

  const navigate = useNavigate();

  return (
    <div className="nav-button" onClick={() => navigate('/account')}>
      <h1>{ props.currentUser.username }</h1>
    </div>
  );
}

export default AccountButton;