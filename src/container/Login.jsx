import { QRCodeSVG } from "qrcode.react";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import  Chart from '../assets/chart.png'

const apiCall = (endpoint, apiConfig = {}) => {
  return fetch(`https://c234-103-181-238-106.ngrok-free.app/api/${endpoint}`, {
    method: 'get',
    headers: new Headers({
      "ngrok-skip-browser-warning": "69420",
    }),
    ...apiConfig
  }).then((data) => {
    return data.json()
  })
}

const Login = () => {
  const [sessionId, setSessionId] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    apiCall('auth/web_qrcode').then((data) => {
      setSessionId(data.sessionId)
    });
  }, []);

  useEffect(() => {
    if (sessionId) {
      const id = setInterval(() => {
        apiCall('auth/web_login', {
          method: "post",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            sessionId
          })
        })
        .then(handleLogin);
      }, 1000)

      const handleLogin = (data) => {
        const { session } = data;
        const { status, user_id } = session;
        if (status === 'ACTIVE') {
          clearInterval(id);
          localStorage.setItem('userId', user_id);
          navigate('/dashboard')
        }
      };

      return () => clearInterval(id);
    }
  }, [sessionId])

  return (
  <div className="bg-[#1E56A0] w-[100vw] h-[100vh] flex justify-center items-center">
    <div className="w-[35%] h-[400px] bg-[#163172] rounded-lg text-white py-8 flex">
      <div className="w-1/2 text-white  px-6 ">
        <div className="font-bold text-2xl text-center">Welcome!</div>
        <div className="font-normal text-center text-xs text-[#A5A6D9]">Deep dive into your finances</div>
        <img src={Chart}/>
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center">
        <div className="flex items-center justify-center border-8">
            <QRCodeSVG
            value={sessionId}
            size={140}
            bgColor={"#ffffff"}
            fgColor={"#000000"}
          />
        </div>
        <div className="font-medium text-base leading-5 pt-4">Log in with QR code</div>
        <div className="font-normal text-xs leading-4 pt-3 text-center w-[180px] text-[#A5A6D9]">Scan this with nexa mobile app to login and see a detailed view of your finances</div>
      </div>
    </div>
  </div>)
}

export default Login;
