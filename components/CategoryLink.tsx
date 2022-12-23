import React from 'react';
import Link from 'next/link'

const CategoryLink = ({ category, style }) => {
    console.log(style)
    return (
        <Link key={category.slug} href={`/category/${category.slug}`}>
            <span className={style}>
                {category.name}
            </span>
        </Link>
    )
};

export default CategoryLink;
