import { PageWrapper, List, UserCard } from "@stats/shared-web/components";
import { trpc } from "@stats/shared-web/utils";
import { type FC, memo } from "react";

export const UsersStats: FC = memo(() => {
  const {
    data: users,
    error,
    isLoading: isFirstLoading,
    isFetching: isFetchingMore,
    isError,
    isRefetching,
  } = trpc.stats.getUsers.useQuery({});
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
});
