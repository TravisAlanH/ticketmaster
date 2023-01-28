import React from "react";
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare, FaWikipediaW, FaSpotify, FaHome } from "react-icons/fa";
import { SiMusicbrainz } from "react-icons/si";

export default function ExternalLinks({ LinksObj }) {
  let links = [];
  let index = 0;
  for (const [key, value] of Object.entries(LinksObj)) {
    switch (key) {
      case "instagram":
        links.push(
          <a href={value[0].url} target={"_blank"} rel="noreferrer" key={index} className="block w-fit h-fit">
            <FaInstagramSquare className="w-9 h-9" />
          </a>
        );
        break;
      case "youtube":
        links.push(
          <a href={value[0].url} target={"_blank"} rel="noreferrer" key={index} className="block w-fit h-fit">
            <FaYoutubeSquare className="w-9 h-9" />
          </a>
        );
        break;
      case "wiki":
        links.push(
          <a href={value[0].url} target={"_blank"} rel="noreferrer" key={index} className="block w-fit h-fit">
            <FaWikipediaW className="w-9 h-9" />
          </a>
        );
        break;
      case "spotify":
        links.push(
          <a href={value[0].url} target={"_blank"} rel="noreferrer" key={index} className="block w-fit h-fit">
            <FaSpotify className="w-9 h-9" />
          </a>
        );
        break;
      case "homepage":
        links.push(
          <a href={value[0].url} target={"_blank"} rel="noreferrer" key={index} className="block w-fit h-fit">
            <FaHome className="w-9 h-9" />
          </a>
        );
        break;
      case "musicbrainz":
        links.push(
          <a href={value[0].url} target={"_blank"} rel="noreferrer" key={index} className="block w-fit h-fit">
            <SiMusicbrainz className="w-9 h-9" />
          </a>
        );
        break;
      case "facebook":
        links.push(
          <a href={value[0].url} target={"_blank"} rel="noreferrer" key={index} className="block w-fit h-fit">
            <FaFacebookSquare className="w-9 h-9" />
          </a>
        );
        break;
      default:
        links.push(<div className="hidden"></div>);
        break;
    }
    index = index + 1;
  }

  let SocialCount = 0;
  return (
    <div className="text-white flex flex-row lg:flex-col gap-1">
      {links.map((item) => {
        SocialCount = SocialCount + 1;
        if (SocialCount > 5) return null;
        return item;
      })}
    </div>
  );
}
