import spinnerImage from "../../assets/spinner.png";
import { StyledLoading } from "./style";

export const Loading = () => {
  return (
    <StyledLoading>
      <img src={spinnerImage} alt="Loading" className="carregando" />
    </StyledLoading>
  );
};
