import PostCard from "./PostCard";
import { useState, useEffect } from "react";
import axios from "axios";

function PostList (){

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await axios.get('https://55addcd9572aaefb.mokky.dev/post');
                setPosts(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchPosts();
    }, []);

    return(
        <div class="all-news-block">
            {posts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
}

export default PostList;