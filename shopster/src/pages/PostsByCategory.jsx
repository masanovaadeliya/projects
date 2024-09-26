import PostCard from "../components/PostCard";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function PostsByCategory() {

    const {id} = useParams();
    const [category, setCategory] = useState({});
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchCategory() {
            try {
                const response = await axios.get(`https://55addcd9572aaefb.mokky.dev/category/${id}`)
                setCategory(response.data);
            } catch(e) {
                console.log(e);
            }
            
        }
        async function fetchPosts() {
            try {
                const response = await axios.get('https://55addcd9572aaefb.mokky.dev/post');
                setPosts(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchPosts();
        fetchCategory()
    }, [id]);


    return(
        <section class="mobile-block">
            <div class="mobile-block__header is-secondary">
                {category.name}
            </div>
                <div class="all-news-block">
                        {posts.map((post) => {
                            return post.category === category.name ? (
                                <PostCard key={post.id} post={post} />
                            ) : null
                        })}
                </div>
        </section>
    );
}

export default PostsByCategory;