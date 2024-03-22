import style from "@/styles/404.module.scss";

const Custom404 = () => {
  return (
    <div className={style.error}>
      <img src="/404.png" alt="404" className={style.error__image} />
      <div>404 - Page Not Found</div>
    </div>
  );
};

export default Custom404;
