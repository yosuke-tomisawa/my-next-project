import Image from "next/image";
import styles from "./index.module.css";
import { News } from "@/_libs/microcms";
import classNames from "classnames/bind";
import Category from "../Category";
import Date from "../Date";
import Link from "next/link";

type Props = {
  data: News;
};

export default function Article({ data }: Props) {
  return (
    <main>
      <h1 className="{style.title}">{data.title}</h1>
      <p className="{style.description}">{data.description}</p>
      <div className="{style.meta}">
        <Link
          href={`/news/category/${data.category.id}`}
          className="{styles.categoryLink}"
        >
          <Category category={data.category} />
        </Link>
        <Date date="{data.publishedAt ?? data.createdAt}" />
      </div>
      {data.thumbnail && (
        <Image
          src={data.thumbnail.url}
          alt=""
          className={styles.thumbnail}
          width={data.thumbnail.width}
          height={data.thumbnail.height}
        />
      )}
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: data.content }}
      />
    </main>
  );
}
