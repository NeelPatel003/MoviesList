const Search = (props) => {
  let sendValue = (e) => {
    if (e.target.value === "") {
      props.getInputValue("war");
    } else {
      props.getInputValue(e.target.value);
    }
  };

  const handleSubmit = () => {
    props.getSubmit();
  };

  // const years = [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2023];
  return (
    <div >
      <div className="search">
        <div className="search-box">
          <input
            type="text"
            onChange={sendValue}
            // onKeyDown={handleKeyDown}
            placeholder="Find movie..."
          />
          <button onClick={handleSubmit}>
            <i class="fas fa-search"></i>
          </button>
        </div>
      
      </div>
      {/* <div className="search">
        <div className="search-box" style={{}}>
          <select
            name="years"
            onClick={(e) => props.getSelectValue(e.target.value)}
          >
            {years?.map((ele) => (
              <option value={ele}>{ele}</option>
            ))}
          </select>
        </div>
      </div> */}
    </div>
  );
};

export default Search;
