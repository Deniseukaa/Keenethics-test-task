function App() {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-50 bg-gray-300 p-4">header</header>
        <div className="flex flex-grow flex-col md:flex-row md:justify-between">
          <div className="no-scrollbar order-2 bg-teal-400 md:order-1 md:max-h-[calc(100vh-112px)] md:basis-2/4 md:overflow-y-auto">
            <div className="h-[400px] bg-gray-300">Block</div>
            <div className="h-[400px] bg-gray-300">Block</div>
            <div className="h-[400px] bg-gray-300">Block</div>
          </div>
          <div className="flex flex-col md:order-2 md:basis-2/4">
            <div className="bg-red-300 md:basis-2/4">2</div>
            <div className="bg-blue-300 md:basis-2/4">3</div>
          </div>
        </div>
        <footer className="sticky bottom-0 z-50 bg-gray-300 p-4">footer</footer>
      </div>
    </>
  );
}

export default App;
