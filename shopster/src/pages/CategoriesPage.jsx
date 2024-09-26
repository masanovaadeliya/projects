import House from "../assets/images/categories/house (1).svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function CategoriesPage() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function fetchCategories() {
            try {
                const response = await axios.get(`https://55addcd9572aaefb.mokky.dev/category`);
                setCategories(response.data);
            } catch(e) {
                console.log(e);
            }
        }
        fetchCategories();
    }, []);


    return (
        <section class="mobile-block">
            <div class="mobile-block__header is-secondary">
                Каталог
            </div>
            <div class="container">
                <div class="category-row">
                    <Link to="/" class="category-item">
                        <img src={House} alt="House" class="category-item__img" />
                        <span class="category-item__title">Главная</span>
                    </Link>
                    {categories.map((category) => (
                            <Link to={`/category/posts/${category.id}`} class="category-item">
                                <img src={category.imageUrl} alt={category.name} class="category-item__img" />
                                <span class="category-item__title">{category.name}</span>
                            </Link>
                    ))}
            </div>
        </div>
    </section>
    );
}

export default CategoriesPage;