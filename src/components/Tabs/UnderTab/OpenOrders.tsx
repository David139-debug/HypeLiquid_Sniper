const OpenOrders = () => {
    return (
        <>
            <article className="text-xs inter rounded-[8px] text-[#A0A9B4] mr-[23px]">
                <div className="text-center flex overflow-x-auto no-scrollbar border-b items-center border-[#2A3441] p-[12px_24px_13px_24px] gap-4 bg-[#151C26] justify-between font-medium">
                    <div className="flex items-center">Time</div>
                    <div className="flex items-center">Type</div>
                    <div className="flex items-center">Coin</div>
                    <div className="flex items-center">Direction</div>
                    
                    <div className="flex items-center">Size</div>
                    <div className="flex items-center">Orignial Size</div>
                    <div className="flex items-center gap-1">
                        <p>Order<br /> Value</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                            <path d="M12.5303 12.4004H0.530273V0.400391H12.5303V12.4004Z" />
                            <path d="M6.00039 9.92988C6.29336 10.2229 6.76914 10.2229 7.06211 9.92988L11.5621 5.42988C11.8551 5.13691 11.8551 4.66113 11.5621 4.36816C11.2691 4.0752 10.7934 4.0752 10.5004 4.36816L6.53008 8.33848L2.55977 4.37051C2.2668 4.07754 1.79102 4.07754 1.49805 4.37051C1.20508 4.66348 1.20508 5.13926 1.49805 5.43223L5.99805 9.93223L6.00039 9.92988Z" fill="#A0A9B4" />
                        </svg>
                    </div>
                    <div className="flex items-center mr-7">Price</div>
                </div>
                <article className="flex flex-col justify-center items-center h-[588px]">
                </article>
            </article>
        </>
    )
}

export default OpenOrders