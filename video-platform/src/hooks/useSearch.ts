import { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

function useSearch() {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const navigate = useNavigate();

  const handleSearchSubmit = (event: FormEvent) => {
    event.preventDefault();
    navigate(`/results/${searchValue}`);
  };

  return {
    searchValue,
    handleSearchInputChange,
    handleSearchSubmit,
  };
}

export default useSearch;
