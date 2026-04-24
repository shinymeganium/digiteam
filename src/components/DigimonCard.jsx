export const DigimonCard = ({ data, isOpen, setIsOpen }) => {
  const toggle = () => { setIsOpen(prev => !prev); };
  
  return (
    <>
    {isOpen && <div className="w-3xl absolute top-0 left-80 flex gap-4 z-30 p-5 bg-white border">
      <div className="">
        {data.images.map((i, index) =>
          <img key={index} src={i.href} alt={`${data}_${index}`} />)}
      </div>

      <div className="w-md flex flex-col gap-3">
        <div className="flex gap-2">
          <span className="">{data.id}</span>
          <span className="">{data.name}</span>
        </div>

        <div className="p-2 overflow-scroll border">
          {data.descriptions[1].description}
        </div>

        <button className="border" onClick={toggle}>Close</button>
      </div>
    </div>}
    </>
  );
};