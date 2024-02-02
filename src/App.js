function App() {
  const bg = {
    backgroundImage: 'url(bg.png)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center" style={bg}>
      <img className="w-[250px] sm:max-w-[80vw]" src='./qornex.png' />
      <div className="absolute left-1/2 -translate-x-1/2 bottom-5 flex flex-col items-center justify-center space-y-2.5">
        <a className="cursor-pointer flex items-center space-x-2.5 text-white border border-[#6C6B6B] rounded-[16px] p-2.5 group hover:bg-[#6C6B6B]" src='https://t.me/qornexofficial'> 
          <img className="w-5 h-5" src='./tg.svg' />
          <span>Telegram channel</span>
        </a>
        <span className="text-[#6C6B6B]">Coming soon</span>
      </div>
      
    </div>
  );
}

export default App;
