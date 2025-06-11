const { ipcRenderer } = window.require('electron');

interface Props {
    accNum: number;
}

const Navbar = ({ accNum }: Props) => {

  return (
      <nav className="bg-[#252930] w-full">
          <div className="boxShadow flex items-center justify-between px-5 py-[21px] roboto">
              <div className="flex gap-2.5 items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="34" height="35" viewBox="0 0 34 35" fill="none">
                      <path d="M15.5833 22.45C15.5833 22.0634 15.2699 21.75 14.8833 21.75H9.63262C9.11226 21.75 8.77381 21.2024 9.00652 20.737L17.0906 4.56889C17.4209 3.90821 18.4167 4.14328 18.4167 4.88193V12.55C18.4167 12.9366 18.7301 13.25 19.1167 13.25H24.3674C24.8877 13.25 25.2262 13.7976 24.9935 14.2631L16.9094 30.4312C16.5791 31.0918 15.5833 30.8568 15.5833 30.1181V22.45Z" fill="url(#paint0_linear_55_1862)" />
                      <defs>
                          <linearGradient id="paint0_linear_55_1862" x1="12.0417" y1="3.33335" x2="21.25" y2="34.5" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#F0B90B" />
                              <stop offset="1" stopColor="#F25D52" />
                          </linearGradient>
                      </defs>
                  </svg>
                  <h1 className="text-[#F0B90B] text-[29.6px] font-extrabold">HyperLiquid Sniper</h1>
              </div>

              <div className="flex gap-8 mr-3">
                  <div className="flex gap-1.5 items-center">
                      <div className="bg-[#00FF4D] rounded-full w-[9px] h-[9px]"></div>
                      <p className="text-base text-[#FBF9F9]">Connected</p>
                  </div>

                  <div>
                      <p className="text-[#FBF9F9] text-base">Active Orders: <span className="text-white font-bold">23</span></p>
                  </div>

                  <div>
                      <p className="text-base text-[#FBF9F9]">Total PnL: <span className="font-bold text-[rgba(0,255,76,0.80)]">+$1,247.83</span></p>
                  </div>

                  <div>
                      <p className="text-base text-[#FBF9F9]">Accounts: <span className="font-bold text-white">{accNum}/10</span></p>
                  </div>

                  <div className="flex gap-4 absolute top-0 right-0 mt-1.5 mr-2">
                      <svg onClick={() => ipcRenderer.send('minimize-window')} xmlns="http://www.w3.org/2000/svg" className="cursor-pointer" width="14" height="15" viewBox="0 0 14 15" fill="none">
                          <path d="M13.125 14.75H0.875V0.75H13.125V14.75Z" />
                          <path d="M12.6875 7.75C12.6875 8.23398 12.2965 8.625 11.8125 8.625H2.1875C1.70352 8.625 1.3125 8.23398 1.3125 7.75C1.3125 7.26602 1.70352 6.875 2.1875 6.875H11.8125C12.2965 6.875 12.6875 7.26602 12.6875 7.75Z" fill="#A0A0A0" />
                      </svg>
                      <svg onClick={() => ipcRenderer.send('maximize-window')} xmlns="http://www.w3.org/2000/svg" className="cursor-pointer" width="14" height="15" viewBox="0 0 14 15" fill="none">
                          <g clipPath="url(#clip0_392_12866)">
                              <path d="M11.375 2.9375C11.6156 2.9375 11.8125 3.13437 11.8125 3.375V12.125C11.8125 12.3656 11.6156 12.5625 11.375 12.5625H2.625C2.38437 12.5625 2.1875 12.3656 2.1875 12.125V3.375C2.1875 3.13437 2.38437 2.9375 2.625 2.9375H11.375ZM2.625 1.625C1.65977 1.625 0.875 2.40977 0.875 3.375V12.125C0.875 13.0902 1.65977 13.875 2.625 13.875H11.375C12.3402 13.875 13.125 13.0902 13.125 12.125V3.375C13.125 2.40977 12.3402 1.625 11.375 1.625H2.625Z" fill="#A0A0A0" />
                          </g>
                          <defs>
                              <clipPath id="clip0_392_12866">
                                  <path d="M0.875 0.75H13.125V14.75H0.875V0.75Z" fill="white" />
                              </clipPath>
                          </defs>
                      </svg>
                      <svg onClick={() => ipcRenderer.send('close-window')} xmlns="http://www.w3.org/2000/svg" className="cursor-pointer" width="12" height="15" viewBox="0 0 12 15" fill="none">
                          <path d="M11.25 14.75H0.75V0.75H11.25V14.75Z" />
                          <path d="M10.1181 4.86807C10.4599 4.52627 10.4599 3.97119 10.1181 3.62939C9.77627 3.2876 9.22119 3.2876 8.8794 3.62939L6.0001 6.51143L3.11807 3.63213C2.77627 3.29033 2.22119 3.29033 1.87939 3.63213C1.5376 3.97393 1.5376 4.529 1.87939 4.8708L4.76143 7.7501L1.88213 10.6321C1.54033 10.9739 1.54033 11.529 1.88213 11.8708C2.22393 12.2126 2.779 12.2126 3.1208 11.8708L6.0001 8.98877L8.88213 11.8681C9.22393 12.2099 9.77901 12.2099 10.1208 11.8681C10.4626 11.5263 10.4626 10.9712 10.1208 10.6294L7.23877 7.7501L10.1181 4.86807Z" fill="#A0A0A0" />
                      </svg>
                  </div>
              </div>
        </div>
    </nav>
  )
}

export default Navbar