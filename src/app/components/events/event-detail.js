import React from "react";
import AddressIcon from "../icons/address-icon";
import DateIcon from "../icons/date-icon";
import styles from "./event-detail.module.css";

const EventDetail = (props) => {
  const { detail } = props;

  const readableDate = new Date(detail?.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formatAddress = detail?.location.replace(", ", "\n");

  return (
    <>
      <div className={styles.summary}>
        <h1>{detail?.title}</h1>
      </div>
      <div className={styles.logistics}>
        <div className={styles.image}>
          {/* <img src={detail?.image} alt="{detail?.title}" /> */}
          <img src={"/" + detail?.image} alt={detail?.title} />
        </div>
        <div className={styles.list}>
          <div className={styles.item}>
            <span className={styles.icon}>
              <DateIcon />
            </span>

            <time>{readableDate}</time>
          </div>
          <div className={styles.item}>
            <span className={styles.icon}>
              <AddressIcon />
            </span>
            <address>{formatAddress}</address>
          </div>
        </div>
      </div>

      <div className={styles.content}>{detail?.description}</div>
    </>
  );
};

export default EventDetail;
