const Postions = () => {
    return (
        <>
            <article className="text-xs inter rounded-[8px] text-[#A0A9B4] mr-[23px]">
                <div className="flex overflow-x-auto no-scrollbar border-b border-[#2A3441] gap-4 bg-[#151C26] p-[12px_24px_13px_24px] justify-between items-center font-medium">
                    <div className="flex items-center">Coin</div>
                    <div className="pr-8 flex items-center">Size</div>
                    <div className="pr-8 flex items-center">Position Value</div>
                    <div className="flex gap-3 items-center flex-row-reverse">
                        <p>Entry Price</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M12 12H0V0H12V12Z"/>
                            <path d="M5.47012 9.52949C5.76309 9.82246 6.23887 9.82246 6.53184 9.52949L11.0318 5.02949C11.3248 4.73652 11.3248 4.26074 11.0318 3.96777C10.7389 3.6748 10.2631 3.6748 9.97012 3.96777L5.9998 7.93809L2.02949 3.97012C1.73652 3.67715 1.26074 3.67715 0.967773 3.97012C0.674805 4.26309 0.674805 4.73887 0.967773 5.03184L5.46777 9.53184L5.47012 9.52949Z" fill="#A0A9B4" />
                        </svg>
                    </div>
                    
                    <div className="flex items-center">Mark Price</div>
                    <div className="p-[0px_24.625px]"><p className="border-dashed border-b border-[#A0A9B4]">PNL (ROE%)</p></div>
                    <div className="flex items-center">Liq. Price</div>
                    <div className="flex items-center">Margin</div>
                </div>
                <article className="flex flex-col justify-center items-center h-[588px]">
                </article>
            </article>
        </>
    )
}

export default Postions