import nbaLogo from "../assets/img/nba-logo.png";
import "../App.css";

function Header({ searchPlayer, setSearchPlayer }) {
  const handleChange=(e)=>{
    setSearchPlayer(e.target.value)
  }
  return (
    <div className="headerPage">
      <img src={nbaLogo} alt="NBA Logosu " />
      <h1>
        <span>NBA</span> Legends
      </h1>
      <input
        type="search"
        name="search"
        id="search"
        autoFocus
        placeholder="Search Player..."
        value={searchPlayer}//ilk değer buraya atılıyor yoksa çıkarmıyor.
        onChange={handleChange}
      />
    </div>
  );
}

export default Header;
