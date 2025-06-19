function NavBar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white text-lg font-bold">MyApp</a>
        <div>
          <a href="/about" className="text-gray-300 hover:text-white px-3 py-2">About</a>
          <a href="/contact" className="text-gray-300 hover:text-white px-3 py-2">Contact</a>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;