const AdminNavbar = () => {
    return (
      <nav className="bg-amber-300 py-2 relative">
        <div className="lg:flex hidden flex-grow justify-center">
          <div className="flex space-x-16 mt-3 ml-4">
            <a
              href="#"
              className="text-white hover:text-black transition duration-500 ease-in-out"
            >
              DASHBOARD
            </a>
            <a
              href="#"
              className="text-white hover:text-black transition duration-500 ease-in-out"
            >
              ORDERS
            </a>
            <a
              href="#"
              className="text-white hover:text-black transition duration-500 ease-in-out"
            >
              USERS
            </a>
          </div>
        </div>
      </nav>
    );
  };
  
  export default AdminNavbar;
  