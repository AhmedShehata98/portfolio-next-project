import axios from "axios";
import { nanoid } from "nanoid";
import Head from "next/head";

import React, { useEffect, useRef } from "react";
import CopyRights from "../../components/Footer";
import FeedBox from "../../components/FeedBox";
import { getNewsfeedDocs } from "../../services/firestore";
import { INewsfeed, newsFeedPorps } from "../../types/types";

const NewsFeed = ({ news }: newsFeedPorps) => {
  const newsSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let timeout: number;
    if (newsSectionRef.current?.classList.contains("hide-section")) {
      timeout = +setTimeout(() => {
        newsSectionRef.current?.classList.remove("hide-section");
      }, 100);
    }
    return () => {
      clearTimeout(timeout);
      newsSectionRef.current?.classList.add("hide-section");
    };
  }, [newsSectionRef.current?.classList]);

  return (
    <>
      <Head>
        <title>News Feeds</title>
      </Head>
      <div ref={newsSectionRef} className="page hide-section" id="/news">
        <h3 className="text-white text-xl uppercase mt-4 mb-6 self-start">
          My latest achievement
        </h3>
        <div className="w-full max-h-[82vh] h-[82vh] overflow-x-hidden overflow-y-auto px-8 mb-5">
          <ul className="feeds-list">
            {news &&
              Array.isArray(news) &&
              news.map((newsfeed) => (
                <FeedBox
                  key={nanoid(6)}
                  date={newsfeed.date}
                  discription={newsfeed.description}
                  image={newsfeed.media}
                />
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default NewsFeed;

export const getStaticProps = async () => {
  const news = await getNewsfeedDocs();
  return {
    props: {
      news,
    },
    revalidate: 30,
  };
};
