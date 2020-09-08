import React from 'react';

export const ImgWithFallback = ({
    src,
    alt,
    fallback,
    type = 'image/webp',
    ...delegated
}) => {
    return (
        <picture className="img">
            <source srcSet={src} type={type} />
            <img 
                src={fallback} 
                loading='lazy'
                alt={alt} 
                {...delegated} 
            />
        </picture>
    )
};