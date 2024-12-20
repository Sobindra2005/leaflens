import React from 'react';

const variants = {
    primary: 'bg-green-600 text-white hover:bg-green-700',
    secondary: 'bg-purple-600 text-white hover:bg-purple-700',
    outline: 'border-2 border-green-600 text-green-600 hover:bg-green-50'
};

const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
};

const Button = ({ variant = 'primary', size = 'md', className, children, ...rest }) => {
    return (
        <button
            className={[
                'rounded-md font-medium transition-colors',
                variants[variant],
                sizes[size],
                className
            ].join(' ')}
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;