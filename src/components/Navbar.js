
const Navbar = ({ filterItem, courseList, handleSearch, searchQuery}) => {

  return (
    <>
    <div className="nav-container">
      <nav className="navbar">
        <div className="search">
        <input
        type="text"
        placeholder="Search by name..."
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
      />
        </div>
        <div className="btn-group">
          {courseList.map((curElem) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filterItem(curElem)} key={curElem}>
                {curElem}
              </button>
            );
          })}
        </div>
      </nav>
      </div>
    </>
  );
};

export default Navbar;