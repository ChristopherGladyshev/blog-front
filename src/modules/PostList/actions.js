import {
    postsApi
} from 'utils/api';

const PostsListACtions = {
    setItems: (items) => ({
        type: 'POSTS:SET_ITEMS',
        payload: items,
    }),
    fetchItems: () => dispatch => {
        postsApi.get().then(({ data }) => {
            dispatch(PostsListACtions.setItems(data))
        });

    }
};

export default PostsListACtions;