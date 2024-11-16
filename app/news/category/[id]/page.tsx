import Category from "@/_components/Category";
import NewsList from "@/_components/NewsList";
import Pagination from "@/_components/Pagination";
import { NEWS_LIST_LIMIT } from "@/_constants";
import { getCategoryDetail, getNewsList } from "@/_libs/microcms";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
    current: string;
    totalCount: string;
  };
};

export default async function Page({ params }: Props) {
  const category = await getCategoryDetail(params.id).catch(notFound);
  const current = parseInt(params.current, 10);
  const { contents: news, totalCount } = await getNewsList({
    filters: `category[equals]${category.id}`,
    limit: NEWS_LIST_LIMIT,
    offset: NEWS_LIST_LIMIT * (current - 1),
  });
  return (
    <>
      <p>
        <Category category={category} />
        の一覧
      </p>
      <NewsList news={news} />
      <Pagination
        totalCount={totalCount}
        basePath={`/news/category/${category.id}`}
      />
    </>
  );
}
