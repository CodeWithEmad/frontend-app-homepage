import { getConfig } from '@edx/frontend-platform';
import { useQuery } from 'react-query';
import { IAllPartners } from './interfaces/APIResponsesInterfaces';

const useGetPopularPartners = () => {
  const fetchPopularPartners = async () => {
    const apiRes = await fetch(
      `${getConfig().LMS_BASE_URL}/admin-console/api/partner-list/?popular=true`,
    );

    if (!apiRes.ok) {
      throw new Error('fetch not ok');
    }

    return apiRes.json();
  };
  const { isLoading, data } = useQuery<IAllPartners>({
    queryKey: ['PopularPartners'],
    queryFn: () => fetchPopularPartners(),
    keepPreviousData: true,
  });
  return {
    PopularPartners: data?.results.filter((org) => org.featured).slice(0, 5),
    loading: isLoading,
  };
};
export default useGetPopularPartners;
