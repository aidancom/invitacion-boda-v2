const Head = () => {
  return (
    <div className="w-full pt-5 m-auto">
      <div className="flex justify-between border-b-1 border-double">
        <p className="block w-[95%] border-t-1 py-2 px-2">Viernes, 11 de Septiembre 2026</p>
        <p className="border-t-1 py-2 px-2">VLC</p>
      </div>
      <div className="py-10 border-b-1">
        <h1 className="font-[Lodeh] text-center text-7xl xl:text-9xl px-2">The Wedding Times</h1>
      </div>
      <div className="py-3 border-b-1">
        <h3 className="text-center uppercase font-serif px-2 text-4xl xl:text-6xl ">¡Última hora! El 'si quiero' más esperado</h3>
      </div>
      <div className="bg-[url(../img/background-head.png)] bg-no-repeat bg-cover bg-center 2xl:bg-position-[0px_-200px] h-[1000px] relative">
        <div className="absolute bottom-0 text-white p-5 lg:p-20">
          <p className="font-[EdwardianScriptitc] text-6xl sm:text-8xl lg:text-9xl 2xl:text-[200px] 2xl:[word-spacing:2.5rem]">Aidan <span className="pt-4">&</span> <span className="pt-4">Kathe</span></p>
          <p className="text-4xl sm:text-5xl font-serif">Are Getting<br/> Married</p>
        </div>

      </div>
    </div>
  )
}

export default Head
