interface SearchBarProps {
  handleSearchTerm: (
    event: React.ChangeEvent<HTMLInputElement, Element>,
  ) => void;
}

export const SearchBar = ({ handleSearchTerm }: SearchBarProps) => {
  return (
    <form className="search-zone">
      <h2>Recherche ton spécialiste bienveillant</h2>
      <input
        type="text"
        placeholder="cardiologue... ville... code postale..."
        onChange={handleSearchTerm}
      />
      <button>rechercher</button>
    </form>
  );
};
