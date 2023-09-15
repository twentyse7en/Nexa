import  Chart from '../assets/chart.png'

const Login = () => {
  return (
  <div className="bg-[#1E56A0] w-[100vw] h-[100vh] flex justify-center items-center">
    <div className="w-[35%] h-[400px] bg-[#163172] rounded-lg text-white py-8 flex">
      <div className="w-1/2 text-white  px-6 ">
        <div className="font-bold text-2xl text-center">Welcome!</div>
        <div className="font-normal text-center text-xs text-[#A5A6D9]">Deep dive into your finances</div>
        <img src={Chart}/>
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center">
        <div className="w-[160px] h-[160px] bg-white  px-6 "></div>
        <div className="font-medium text-base leading-5 pt-4">Log in with QR code</div>
        <div className="font-normal text-xs leading-4 pt-3 text-center w-[180px] text-[#A5A6D9]">Scan this with nexa mobile app to login and see a detailed view of your finances</div>
      </div>
    </div>
  </div>)
}

export default Login;
