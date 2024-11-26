const Header = () => {
  return (
    <header className="bg-black text-white p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Spotify Clone</h1>
        <div className="flex space-x-4">
          <button className="text-white hover:text-gray-400">Login</button>
          <button className="text-white hover:text-gray-400">Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
