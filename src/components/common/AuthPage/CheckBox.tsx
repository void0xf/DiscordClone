import { useState } from "react";

const checkbox = () => {
    
    const [isClicked,setIsClicked] = useState(false);

  return (
    <div className="flex py-3 relative cursor-pointer" onClick={()=>setIsClicked(!isClicked)}>
                    
    {isClicked ?(
      <>
      <input type="checkbox"  className="relative w-6 h-6 shrink-0 my-auto mr-2 appearance-none bg-lightBlue border-lightBlue border-TextGray border-[1px] rounded-md"/>
      <div className="scale-90 absolute top-[27px] left-1">
          <img src="../src/assets/photos/tick.png"/>
        </div>
      </>
    ):(
    <input type="checkbox"  className="relative w-6 h-6 shrink-0 my-auto mr-2 appearance-none border-TextGray border-[1px] rounded-md"/>
    )}
                      <span className="text-[12px] text-TextGray leading-4	">(Opcjonalne) Discord może wysyłać mi wiadomości e-mail z 
                    aktualizacjami, wskazówkami i specjalnymi ofertami. 
                    Możesz zrezygnować w dowolnej chwili.</span>
  </div>
  )
}

export default checkbox
