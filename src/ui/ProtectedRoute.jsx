import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  //1. load the auth user
  const { user, isLoading } = useUser();

  // 2. while loadign, show a spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // 3. if there is NO authenticated user, redirect to the /Login

  // 4. it there is user, render the app
  return children;
}

export default ProtectedRoute;
