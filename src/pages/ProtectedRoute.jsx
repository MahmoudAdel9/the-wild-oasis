import { useEffect } from "react";
import useUser from "../features/authentication/useUser";
import Spinner from "../ui/Spinner";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const FullPage = styled.div`
  height: 100dvh;
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  align-items: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1. load the auth user
  const { isLoading, isAuth } = useUser();

  // 2. if there is No Auth, redirect to '/login'
  useEffect(
    function () {
      if (!isAuth && !isLoading) {
        navigate("/login");
      }
    },
    [isAuth, isLoading, navigate]
  );
  // 3. spinner when isLoading
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );
  // 4. return the entire app
  if (isAuth) return children;
}

export default ProtectedRoute;
