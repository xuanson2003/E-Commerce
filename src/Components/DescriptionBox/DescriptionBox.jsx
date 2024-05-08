import React from 'react';
import './DescriptionBox.scss';

const DescriptionBox = () => {
    return (
        <div className="description-box">
            <div className="description-box-navigator">
                <div className="description-box-nav-box">Description</div>
                <div className="description-box-nav-box fade">Reviews (122)</div>
            </div>

            <div className="description-box-description">
                <p>
                    An e-commerce website offers numerous advantages for both businesses and consumers. For businesses,
                    it provides a global platform to showcase products, reach a wider audience, and reduce overhead
                    costs associated with traditional retail. Customers benefit from the convenience of shopping
                    anytime, anywhere, a wide variety of products to choose from, competitive pricing, and the ease of
                    comparing products and reading reviews before making a purchase decision. Additionally, e-commerce
                    platforms often offer personalized recommendations based on browsing history, enhancing the shopping
                    experience further.
                </p>
                <p>
                    Furthermore, e-commerce websites typically feature user-friendly interfaces, secure payment
                    gateways, and efficient order management systems. They enable customers to track their orders,
                    receive notifications about discounts and promotions, and provide hassle-free return and refund
                    processes, enhancing customer satisfaction and loyalty.
                </p>
            </div>
        </div>
    );
};

export default DescriptionBox;
