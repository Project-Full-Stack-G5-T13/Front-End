import { WaveLoading } from "react-loading-typescript";
import { useContext } from "react";
import { IGlobalLoadingProps } from "../../interface/globalLoading/globalLoading.interface";
import { AdsContext } from "../../contexts/AdsContext";

const GlobalLoading = ({ children }: IGlobalLoadingProps) => {
  const { globalLoading } = useContext(AdsContext);
  return (
    <>
      {globalLoading ? (
        <WaveLoading
          color="#4529E6"
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
