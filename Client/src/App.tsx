import { Outlet } from 'react-router-dom';

function App(): JSX.Element {
  return (
    <div className='flex flex-col h-screen'>
      <header>
      
      </header>
      <main className='flex-grow'>
        <div className='container mx-auto px-4'>
          <Outlet />
        </div>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;


