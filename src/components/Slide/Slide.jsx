import './Slide.css';

const Slide = ({
    children,
    className = '',
    variant = 'default',
    withNetflixN = false,
    nPosition = 'right'
}) => {
    return (
        <div className={`slide slide--${variant} ${className}`}>
            {withNetflixN && (
                <div className={`netflix-n netflix-n--${nPosition}`}>
                    <svg viewBox="0 0 111 30" className="netflix-n-svg">
                        <path
                            fill="#E50914"
                            d="M105.062 14.28L111 30c-1.75-.25-3.499-.563-5.28-.845l-3.345-8.686-3.437 7.969c-1.687-.282-3.344-.376-5.031-.595l6.031-13.75L94.468 0h5.063l3.062 7.874L105.875 0h5.124l-5.937 14.28zM90.47 0h-4.594v27.25c1.5.094 3.062.156 4.594.343V0zm-8.563 26.937c-4.187-.281-8.375-.53-12.656-.625V0h4.687v21.875c2.688.062 5.375.28 7.969.405v4.657zM64.25 10.657v4.687h-6.406V26H53.22V0h13.125v4.687h-8.5v5.97h6.406zM45.313 26.125h-4.563V4.688H33.5V0h19.156v4.688h-7.344v21.437zM28.375 9.5h.156c.719-2.781 2.281-6.156 6.969-6.156V8.5c-4.531.094-5.656 3.156-5.656 6.937v10.688h-4.594V3.937h3.125V9.5zm-12 16.03c-3.532.188-7.156.376-10.688.563V0h4.594v21.562c2.094-.062 4.094-.187 6.094-.218v4.186zM0 27.5V0h4.5v27.5H0z"
                        />
                    </svg>
                </div>
            )}
            <div className="slide-content">
                {children}
            </div>
        </div>
    );
};

export default Slide;
