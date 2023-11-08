import { Link } from "react-router-dom";
import useSearch from "../hooks/useSearch";

const Header = ({ children }: { children: React.ReactNode }) => {
  const { searchValue, handleSearchInputChange, handleSearchSubmit } =
    useSearch();

  return (
    <>
      <header className="sticky top-0 z-50 h-[60px] ">
        <nav
          className="bg-[#0F0F0F] w-full h-full flex items-center justify-between px-4 lg:px-[60px]"
          aria-label="Top"
        >
          <Link to="/">
            <h1 className="text-2xl font-bold text-white">Logo</h1>
          </Link>

          <form onSubmit={(e) => handleSearchSubmit(e)}>
            <input
              type="text"
              placeholder="Search"
              className="bg-[#272727] text-white rounded-lg px-4 py-2 w-[150px] lg:w-[500px] xl:w-[600px]"
              value={searchValue}
              onChange={handleSearchInputChange}
            />
          </form>

          <h1>algo</h1>
        </nav>
      </header>

      {children}
    </>
  );
};

export default Header;
