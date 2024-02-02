function App() {
  const bg = {
    backgroundImage: 'url(bg.png)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }
  return (
    <div className="h-screen w-full flex items-center justify-center" style={bg}>
      <img className="w-[250px] sm:max-w-[80vw]" src='./qornex.png' />
      <span className="absolute left-1/2 -translate-x-1/2 bottom-5 text-[#6C6B6B]">Coming soon</span>
    </div>
  );
}

export default App;
