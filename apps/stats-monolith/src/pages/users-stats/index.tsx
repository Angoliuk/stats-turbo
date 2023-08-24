import { List, PageWrapper, UserCard } from "@stats/components";
import { api } from "@stats/utils/api";
import { type NextPage } from "next";

const UsersStats: NextPage = () => {
  const {
    data: users,
    error,
    isLoading: isFirstLoading,
    isFetching: isFetchingMore,
    isError,
    isRefetching,
  } = api.stats.getUsers.useQuery({});
  return (
    <PageWrapper>
      <List
        keyExtractor={({ item }) => item.id}
        data={users}
        isError={isError}
        isFetchingMore={isFetchingMore}
        isFirstLoading={isFirstLoading}
        isRefetching={isRefetching}
        error={error?.message}
        listItem={({ item }) => <UserCard user={item} />}
      />
    </PageWrapper>
  );
};

export default UsersStats;
