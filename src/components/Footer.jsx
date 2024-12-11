import React from "react";

function Footer() {
  return (
    <>
      <div className="footer section h-screen flex flex-col justify-center">
        <div className="border-b-2 border-[#EAD6C9] h-2/4 w-3/4 self-center">
          <h1>Info & links</h1>
        </div>
        <div className="w-3/4 self-center flex justify-between pt-14 text-xl text-[#EAD6C9]">
          <p>&copy; 2023 Rama. All rights reserved</p>
          <div className="space-x-4">
            <a href="#">G</a>
            <a href="#">L</a>
            <a href="#">M</a>
            <a href="#">I</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
