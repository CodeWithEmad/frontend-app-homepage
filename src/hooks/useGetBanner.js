import { getConfig } from '@edx/frontend-platform';
import { useQuery } from 'react-query';

const useGetBanner = () => {
  const fetchBanner = async () => {
    const apiRes = await fetch(`${getConfig().LMS_BASE_URL}/admin-console/api/welcome-section/`);

    if (!apiRes.ok) {
      throw new Error('fetch not ok');
    }

    return apiRes.json();
  };
  const { data, isLoading } = useQuery('banner', fetchBanner);

  return {
    title: data?.title,
    highlightedWord: data?.highlight_word,
    description: data?.description,
    image: data?.image,
    isLoading,
  };
};
export default useGetBanner;
