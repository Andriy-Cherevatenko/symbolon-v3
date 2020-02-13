import { useMutation } from '@apollo/react-hooks';
import UPDATE_CARDS_MUTATION from '../../graphql/queries/UPDATE_CARDS_MUTATION';
import symbolonCacheUpdater from '../cacheUpdaters';

const useUpdateCards = (zodiacName) => {
    const [updateCards] = useMutation(UPDATE_CARDS_MUTATION, {
        update: (cache) => symbolonCacheUpdater(cache, zodiacName),
    });
    return updateCards;
};

export default useUpdateCards;
