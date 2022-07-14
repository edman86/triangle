import React from 'react';
import MyButton from './component/MyButton';
import MySelect from './component/MySelect';
import store from './store/store';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { listSelector } from './store/listSlice';

const options = [
    'title',
    'id'
];

const App = () => {
    // const posts = useSelector(listSelector);
    const posts = [{id: 1, title: 'legolas'}]
    const [option, setOption] = React.useState('');

    // const sortPosts = (opt) => {
    //     setOption(opt);

    //     const newPosts = [...posts];

    //     newPosts.sort((a, b) => {
    //         return a[opt].localeCompare(b[opt]);
    //     });

    //     // setPosts(newPosts);
    // };

    return (
        <>
            <Provider store={store}>
                <div>
                    <MyButton onClick={() => console.log('click')}>Clcik</MyButton>
                    {/* <MySelect
                        value={option}
                        onChange={sortPosts}
                        options={options}
                        defaultValue={'select'}
                    /> */}
                    <div>
                        {posts.map(post => {
                            return (
                                <div key={post.id}>
                                    <h3>{post.id}</h3>
                                    <h2>{post.title}</h2>
                                    <hr />
                                </div>
                            );
                        })}
                    </div>
                    <button style={{color: 'red'}}>TEST BRANCH</button>
                </div>
            </Provider>
        </>
    );
};

export default App;