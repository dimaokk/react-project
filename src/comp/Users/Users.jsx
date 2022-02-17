import React from "react";
import styles from "./Users.module.css";
import photo from "../../assets/photo.jpeg";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={styles.usersContainer}>
      <div className={styles.nav}>
        {pages.map((p) => {
          return (
            <span
              className={
                props.currentPage === p ? styles.selected : styles.nav_item
              }
              onClick={(e) => {
               props.onPageChange(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map((u) => (
        <div className={styles.userBlock} key={u.id}>
          <div className={styles.left}>
            <div className={styles.namephoto}>
              <img
                src={u.photos.small != null ? u.photos.small : photo}
                alt="userphoto"
                className={styles.photo}
              />

              <div className={styles.name}>{u.name}</div>
            </div>
            {u.follow ? (
              <button
                className={styles.btnUn}
                onClick={() => {
                  props.unfollow(u.id);
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                className={styles.btnFo}
                onClick={() => {
                  props.follow(u.id);
                }}
              >
                Follow
              </button>
            )}
          </div>
          <div className={styles.right}>
            <div className={styles.status}>{u.status}</div>
            <div className={styles.geo}>
              <span>втк</span>
              <span>щкб</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
