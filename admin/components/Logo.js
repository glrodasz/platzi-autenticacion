import React from "react";
import Link from "next/link";

const Logo = () => (
  <Link href="/">
    <a className="logo">
      <figure className="logo__figure">
        <img
          className="logo__image"
          src="/static/logo/felida-music-white@2x.png"
          alt="Felida Music | Admin"
        />
        <style jsx>{`
          .logo__figure {
            width: 100px;
            margin: 0.5em 10px 0.2em;
          }
          .logo__image {
            width: 100%;
            filter: brightness(0) invert(1);
          }
        `}</style>
      </figure>
    </a>
  </Link>
);

export default Logo;
