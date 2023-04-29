import { FcSearch } from 'react-icons/fc';

export const Button = () => {
  return (
    <button type="submit" className="SearchForm-button">
      <FcSearch />
      <span className="SearchForm-button-label">Search</span>
    </button>
  );
};
