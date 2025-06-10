const TradeHistory = () => {
    return (
        <>
            <article className="text-xs inter rounded-[8px] text-[#A0A9B4] mr-[23px]">
                <div className="flex overflow-x-auto no-scrollbar border-b border-[#2A3441] gap-4 p-4 bg-[#151C26] justify-between items-center font-medium">
                    <div className="flex items-center gap-0.5">
                        <p>Time</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
                            <path d="M5.47012 6.02949C5.76309 6.32246 6.23887 6.32246 6.53184 6.02949L11.0318 1.52949C11.3248 1.23652 11.3248 0.760742 11.0318 0.467773C10.7389 0.174805 10.2631 0.174805 9.97012 0.467773L5.9998 4.43809L2.02949 0.470117C1.73652 0.177148 1.26074 0.177148 0.967773 0.470117C0.674805 0.763086 0.674805 1.23887 0.967773 1.53184L5.46777 6.03184L5.47012 6.02949Z" fill="#A0A9B4" />
                        </svg>
                    </div>
                    <div className="flex items-center">Coin</div>
                    <div className="flex items-center">Direction</div>
                    <div className="flex items-center">Price</div>
                    <div className="flex items-center">Size</div>
                    <div className="flex gap-4 items-center">
                        <p>Trade<br /> Value</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
                            <path d="M5.47012 6.02949C5.76309 6.32246 6.23887 6.32246 6.53184 6.02949L11.0318 1.52949C11.3248 1.23652 11.3248 0.760742 11.0318 0.467773C10.7389 0.174805 10.2631 0.174805 9.97012 0.467773L5.9998 4.43809L2.02949 0.470117C1.73652 0.177148 1.26074 0.177148 0.967773 0.470117C0.674805 0.763086 0.674805 1.23887 0.967773 1.53184L5.46777 6.03184L5.47012 6.02949Z" fill="#A0A9B4" />
                        </svg>
                    </div>
                    <div className="flex items-center">Fee</div>
                    <div className="py-0 px-[24.625px]"><p className="border-dashed border-b border-[#A0A9B4]">Closed PNL</p></div>
                </div>
                <article className="flex flex-col justify-center items-center h-[588px]">
                </article>
            </article>
        </>
    )
}

export default TradeHistory