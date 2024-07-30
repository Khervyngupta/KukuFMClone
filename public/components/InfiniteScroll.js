import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import styles from './InfiniteScroll.module.css';

const InfiniteScrollComponent = () => {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchMoreData();
  }, []);

  const fetchMoreData = () => {
    fetch(`https://d31ntp24xvh0tq.cloudfront.net/api/v2.1/home/all/?preferred_langs=hindi&page=${page}&lang=english`)
      .then(response => response.json())
      .then(data => {
        setItems([...items, ...data.items]);
        setPage(page + 1);
        if (data.items.length === 0) {
          setHasMore(false);
        }
      });
  };

  return (
    <InfiniteScroll
      dataLength={items.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={<p style={{ textAlign: 'center' }}><b>Yay! You have seen it all</b></p>}
    >
      <div className={styles.items}>
        {items.map((item, index) => (
          <div key={index} className={styles.item}>
            <img src={item.image} alt={item.title} loading="lazy" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default InfiniteScrollComponent;
