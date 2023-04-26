import { WaveLoading } from "react-loading-typescript";
import { useContext, ReactNode } from "react";
import { UserContext } from "../../contexts/UserContext";
import { IGlobalLoadingProps } from "../../interface/globalLoading/globalLoading.interface";

const GlobalLoading = ({ children }: IGlobalLoadingProps) => {
  const { globalLoading } = useContext(UserContext);
  return (
    <>
      {globalLoading ? (
        <WaveLoading
          color="#ff577f"
          speed={1}
          size={"default"}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            right: "50%",
            bottom: "50%",
          }}
        />
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default GlobalLoading;
