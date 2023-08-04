import Image from "next/image";
import classes from "src/component/About/Profile/Profile.module.scss";

export const Profile = () => {
  return (
    <div className={classes.container}>
      <div className={classes.body}>
        <h3 className={classes.name}>Hotaru</h3>
        <p className={classes.comment}>
          何かを作り、形にしたものをお客様へ届けることが好きでこの業界で活動しています。
          クライアント様のお困りごと、お悩みを解決するためのご提案を得意としており、
          常にクライアント様の立場に立ってお仕事することを大切にしております。
        </p>
      </div>
      <figure className={classes.thumb}>
        <Image
          src="/images/webp/about_thumb.webp"
          width={550}
          height={367}
          alt=""
        />
      </figure>
    </div>
  );
};