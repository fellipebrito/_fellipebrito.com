import React from 'react';

import { Author } from '../components/'

const textModifier = (obj) => {
    let modifier;

    if (obj.bold) {
        modifier = 'bold';
    }

    if (obj.italic) {
        modifier = 'italic';
    }

    if (obj.underline) {
        modifier = 'underline';
    }

    return modifier;
}

const newLocal = (index, text, obj, type) => {
    let modifiedText = text;
    let modifier = textModifier(obj)

    if (obj.bold || obj.italic || obj.underline) {
        modifiedText = (<span className={modifier} key={index}>{text}</span>);
    }

    switch (type) {
        case 'paragraph':
            return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
        case 'iframe':
            return <iframe key={index} className="object-top w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg" height="400" src={obj.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>;
        case 'image':
            return (
                <img key={index} alt={obj.title} height={obj.height} width={obj.width} src={obj.src} />
            );
        default:
            return modifiedText;
    }
};

const PostDetail = ({ post }) => {
    const getContentFragment = newLocal;

    return (
        <>
            <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
                <div className="relative overflow-hidden shadow-md mb-6">
                    <img src={post.featuredImage.url} alt="" className="object-top h-full w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg" />
                </div>
                <div className="px-4 lg:px-0">
                    <div className="flex items-center mb-8 w-full">
                        <div className="hidden md:flex items-center justify-center lg:mb-0 lg:w-auto mr-8 items-center">
                            <Author post={post} />
                        </div>
                    </div>
                    <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>
                    {post.content.raw.children.map((typeObj, index) => {
                        const children = typeObj.children.map((item, itemindex) => getContentFragment(itemindex, item.text, item));

                        return getContentFragment(index, children, typeObj, typeObj.type);
                    })}
                </div>
            </div>
        </>
    );
};

export default PostDetail;