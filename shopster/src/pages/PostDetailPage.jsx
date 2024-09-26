import backicon from "../assets/images/back-button-svgrepo-com (1) 1.svg";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


function PostDetailPage() {

    const {id} = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        async function fetchPost() {
            try {
                const response = await axios.get(`https://55addcd9572aaefb.mokky.dev/post/${id}`);
                setPost(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchPost();
    }, [id]);

        return(
            <section class="mobile-block absolute-top">
                <Link to="/" class="back-button">
                    <div class="container">
                        <img src={backicon} alt="Back icon" />
                        <span>Назад</span>
                    </div>
                </Link>
                <div class="container">
                    <div class="post-detail-block">
                        <h3 class="news-card__title">{post.title}</h3>
                        <img src={post.imageUrl} alt={post.title} />
                    </div>
                </div>
                    <div class="formdetail">
                    <span class="title-description">Описание</span>
                        <p class="description">    
                        {post.description}
                        </p>
                    </div>
                    <div class="formdetail">
                        <span class="title-for">Подходит для:</span>
                        <span class="post-detail-for">1. Студенты и офисные работники</span>
                        <span class="post-detail-for">2. Геймеры на начальном уровне</span>
                        <span class="post-detail-for">3. Творческие специалисты</span>
                        <span class="post-detail-for">4. Разработчики и IT- специалисты</span>
                    </div>
            </section>
    );
}

export default PostDetailPage;