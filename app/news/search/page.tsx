import { getNewsList } from "@/_libs/microcms";
import { NEWS_LIST_LIMIT } from "@/_constants";
import NewsList from "@/_components/NewsList";
import SearchField from "@/_components/SearchField";

type Props = {
  searchParams: {
    q?: string;
  };
};

export default async function Page({ searchParams }: Props) {
  const { contents: news } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    q: searchParams.q,
  });
  return (
    <>
      <SearchField />
      <NewsList news={news} />
    </>
  );
}
