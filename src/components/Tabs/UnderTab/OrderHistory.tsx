const OrderHistory = () => {
    return (
        <>
            <article className="text-xs inter rounded-[8px] text-[#A0A9B4] mr-[23px]">
                <div className="text-center flex overflow-x-auto no-scrollbar border-b border-[#2A3441] gap-4 p-4 bg-[#151C26] justify-between items-center font-medium">
                    <div className="flex gap-1 items-center">
                        <p>Time</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
                            <path d="M5.47012 5.92988C5.76309 6.22285 6.23887 6.22285 6.53184 5.92988L11.0318 1.42988C11.3248 1.13691 11.3248 0.661133 11.0318 0.368164C10.7389 0.0751953 10.2631 0.0751953 9.97012 0.368164L5.9998 4.33848L2.02949 0.370508C1.73652 0.0775388 1.26074 0.0775388 0.967773 0.370508C0.674805 0.663476 0.674805 1.13926 0.967773 1.43223L5.46777 5.93223L5.47012 5.92988Z" fill="#A0A9B4" />
                        </svg>
                    </div>
                    <div className="flex items-center">Type</div>
                    <div className="flex items-center">Coin</div>
                    <div className="flex items-center">Direction</div>
                    <div className="flex items-center">Size</div>
                    <div className="flex items-center">Filled Size</div>
                    <div className="flex items-center">Order<br /> Value</div>
                    <div className="flex items-center">Price</div>
                    <div className="flex items-center">Reduce<br /> Only</div>
                </div>
                <article className="flex flex-col justify-center items-center h-[588px]">
                </article>
            </article>
        </>
    )
}

export default OrderHistory