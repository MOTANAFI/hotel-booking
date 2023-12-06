import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
    const navigate = useNavigate()
  //1. load the auth user
  const { isAuthenticated, isLoading } = useUser();

  
  // 2. if there is NO authenticated user, redirect to the /Login
  useEffect(function() {
      if(!isAuthenticated && !isLoading) navigate("/login")
      
    },[isAuthenticated, isLoading, navigate])

    // 3. while loadign, show a spinner
    if (isLoading)
      return (
        <FullPage>
          <Spinner />
        </FullPage>
      );
  // 4. it there is user, render the app
  if(isAuthenticated) return children;
}

export default ProtectedRoute;
