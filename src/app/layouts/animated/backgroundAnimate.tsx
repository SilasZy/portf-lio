'use client'
import { useState } from "react";
import Swal from "sweetalert2";

export const BackgroundAnimate = () => {
const [handleclickSwals, sethandleclickSwal] = useState(false);

  function handleClick() {
    sethandleclickSwal(!handleclickSwals);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Obrigado pela visita",
      showConfirmButton: false,
      timer: 1500,
    })
  }
    return (
        <>
   
        <div className="background-effect"></div>
        <div className="rain rain1 cursor-pointer" onClick={handleClick}></div>
      <div className="rain rain2"></div>
      <div className="rain rain3"></div>
        </>
    )
}