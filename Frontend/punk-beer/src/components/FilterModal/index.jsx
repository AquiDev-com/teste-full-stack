import { useContext } from "react";
import filterSchema from "./filterSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { apiPunk } from "../../services/axiosPunkUser";
import { AuthContext } from "../../contexts/AuthContext";
import { StyledContainerFilterModal, StyledFilterModal } from "./style";
import { createPortal } from "react-dom";

export const FilterModal = () => {
  const { setFilteredBeer, setIsFilterOpen, handleFilterModal } =
    useContext(AuthContext);

  const [beer, setBeer] = useState([]);

  useEffect(() => {
    const getBeers = async () => {
      try {
        const response = await apiPunk.get("beers");
        setBeer(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getBeers();
  }, []);

  const { register, handleSubmit, reset } = useForm({
    mode: "onBlur",
    defaultValues: {
      minIbu: "",
      maxIbu: "",
      minAbv: "",
      maxAbv: "",
    },
    resolver: yupResolver(filterSchema),
  });

  const submit = async (data) => {
    const filteredData = beer.filter((beer) => {
      const beerIbu = parseFloat(beer.ibu);
      const beerAbv = parseFloat(beer.abv);

      return (
        (data.ibuMin === "" || beerIbu >= parseFloat(data.ibuMin)) &&
        (data.ibuMax === "" || beerIbu <= parseFloat(data.ibuMax)) &&
        (data.minAbv === "" || beerAbv >= parseFloat(data.minAbv)) &&
        (data.maxAbv === "" || beerAbv <= parseFloat(data.maxAbv))
      );
    });

    setFilteredBeer(filteredData);
    setIsFilterOpen(false);
    reset();
  };

  const filterModalContent = (
    <StyledContainerFilterModal>
      <div className="modalContentFilter">
        <div className="headerModal">
          <h2 className="titleModal">Filtro</h2>
          <button className="btCloseModal" onClick={() => handleFilterModal()}>
            X
          </button>
        </div>
        <StyledFilterModal>
          <form
            className="formFilter"
            onSubmit={handleSubmit(submit)}
            noValidate
          >
            <label htmlFor="ibu" className="labelIbu">
              IBU
            </label>

            <div className="areaMinMaxFilter">
              <input
                type="text"
                placeholder="Min: 8%"
                className="minMaxFilter"
                {...register("ibuMin")}
              />
              <input
                type="text"
                placeholder="Max"
                className="minMaxFilter"
                {...register("ibuMax")}
              />
            </div>

            <label htmlFor="abv" className="labelAbv">
              Alcohol by Volume
            </label>

            <div className="areaMinMaxFilter">
              <input
                type="text"
                placeholder="Min: 4.1%"
                className="minMaxFilter"
                {...register("minAbv")}
              />
              <input
                type="text"
                placeholder="Max"
                className="minMaxFilter"
                {...register("maxAbv")}
              />
            </div>

            <div className="areaBtFilter">
              <button type="submit" className="btFilter">
                Filter
              </button>
            </div>
          </form>
        </StyledFilterModal>
      </div>
    </StyledContainerFilterModal>
  );
  const modalRoot = document.getElementById("modalFilter-root");

  if (!modalRoot) {
    return null;
  }

  return createPortal(filterModalContent, modalRoot);
};
