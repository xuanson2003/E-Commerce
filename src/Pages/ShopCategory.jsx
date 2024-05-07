import React, { useContext } from 'react';
import './CSS/ShopCategory.scss';
import { ShopContext } from '~/Context/ShopContext';
import men_banner from '~/Components/Assets/banner_mens.png';
import women_banner from '~/Components/Assets/banner_women.png';
import kid_banner from '~/Components/Assets/banner_kids.png';
import dropdown_icon from '~/Components/Assets/dropdown_icon.png';
import Item from '~/Components/Item/Item';

const ShopCategory = (props) => {
    const { all_product } = useContext(ShopContext);
    const categoryImages = {
        men: men_banner,
        women: women_banner,
        kid: kid_banner,
    };

    const srcImg = categoryImages[props.category] || men_banner;

    return (
        <div className="shop-category">
            <img className="shop-category-banner" src={srcImg} alt="" />
            <div className="shop-category-indexSort">
                <p>
                    <span>Showing 1-12</span> out of 36 products
                </p>
                <div className="shop-category-sort">
                    Sort by <img src={dropdown_icon} alt="" />
                </div>
            </div>
            <div className="shop-category-products">
                {all_product.map((item, index) => {
                    if (props.category === item.category) {
                        return <Item key={index} data={item} />;
                    } else {
                        return null;
                    }
                })}
            </div>
            <div className="shop-category-loadmore">Explore More</div>
        </div>
    );
};

export default ShopCategory;
