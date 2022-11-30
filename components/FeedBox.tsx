import React from "react";

type FeedBoxProps = {
  discription: string;
  date: string;
  image: string;
};
const FeedBox = ({ date, discription, image }: FeedBoxProps) => {
  return (
    <li className="feed-box ">
      <span className="indicator">{date}</span>
      <article className="feed-content">
        <span className="flex items-center justify-start gap-3 px-4 py-1.5">
          <figure className="w-9 aspect-square m-0">
            <img
              src="/profile-picture.webp"
              alt="user-img"
              className="max-w-full object-cover rounded-full"
            />
          </figure>
          <span className="flex flex-col items-start justify-start capitalize text-white">
            <p>ahmed shehata</p>
            <small>owner .</small>
          </span>
        </span>
        <span className="discripe px-4 py-1.5">{discription}</span>
      </article>
      <span className="feed-image">
        <img
          src={image}
          alt="feed-img"
          className="max-w-full object-cover aspect-square"
        />
      </span>
    </li>
  );
};

export default FeedBox;
