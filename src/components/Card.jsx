function Card({desc,img,name,foodInfo,costVal,rating,foodType}){
    return <>
        <div className="w-[300px] rounded-xl p-3 border border-gray-300 mt-3 m-auto" onClick={()=>
            alert(`${name} is ordered!`)
        }>
            
            <div className="relative">
            <img className="rounded-xl" src={img} alt="" />
            {
                rating >4 ? <div className="absolute px-3 py-[1px] rounded-xl bg-white text-black text-[12px] font-bold bottom-2 left-2">Popular</div> : ""
            }
            {
                costVal > 200 ? <div className="absolute px-3 py-[1px] bg-white text-black text-[12px] rounded-xl w-fit top-0 right-0 m-2 font-bold">
                Free Delivery
            </div> : ""
            }
            </div>
            
            <div className="flex justify-between items-center">
                    <h1 className="text-lg font-bold">{name}</h1>
                    {/* <span className="w-3 h-3 bg-green-700 rounded-[100%]"></span> */}
                    <span className={foodType == "Veg" ? 'w-3 h-3 bg-green-600 rounded-[100%]' : 'w-3 h-3 bg-red-600 rounded-[100%]'}></span>
            </div>
            
            <p className="text-sm" >{foodInfo}</p>
            <p className="text-md">{rating} ⭐</p>
            
            
        </div>
    </>
}

export default Card;