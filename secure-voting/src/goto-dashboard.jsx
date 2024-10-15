function App() {
return (
  <>
    <div className='flex flex-col bg-black justify-center items-center min-h-screen'>
      <div className='flex flex-col border-2 border-blue-500 p-10'>
        <h2 className='text-center text-7xl  mb-10 text-blue-400'>Go to</h2>
        <a href='' className='border-2  p-5 text-center text-5xl text-green-600 mb-10 hover:bg-blue-100 rounded-xl'>Admin Login</a>
        <a href='' className='hover:bg-blue-100 border-2 p-5 text-center text-5xl text-green-600 rounded-xl'>Voter Login</a>
        
      </div>
    </div>
  </>
);
}

export default App;
