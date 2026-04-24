

export const SearchBar = () => {
  return (
    <form action="">
      <div className="flex gap-5">
        <input className="p-1 border" type="search" placeholder="Select a Digimon..." />

        <button className="px-3 border">Search</button>
      </div>
    </form>
  );
};
