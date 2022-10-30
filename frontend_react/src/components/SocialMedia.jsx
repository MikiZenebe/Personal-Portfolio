import React from "react";
import { BsTelegram, BsInstagram, BsGithub } from "react-icons/bs";

function SocialMedia() {
  return (
    <div className="app__social">
      <div>
        <a href="https://github.com/MikiZenebe">
          <BsGithub />
        </a>
      </div>

      <div>
        <a href="https://www.instagram.com/micky_zenebe/">
          <BsInstagram />
        </a>
      </div>

      <div>
        <a href="https://t.me/Miki_Zenebe">
          <BsTelegram />
        </a>
      </div>
    </div>
  );
}

export default SocialMedia;
