"use client";
import css from "./NotFound.module.css";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const NotFoundClient = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => router.push("/"), 5000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>404 - Page not found</h1>
      <p className={css.description}>
        Sorry, the page you are looking for does not exist. <br />
        You will be redirected to the homepage in 5 seconds.
      </p>
    </div>
  );
};

export default NotFoundClient;
