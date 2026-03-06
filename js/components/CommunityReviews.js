/**
 * Star Rating Component
 */
window.StarRating = function (rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const stars = [];

    for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
            stars.push(window.Utils.createElement('span', { style: 'color: #f59e0b;' }, '★'));
        } else if (i === fullStars && hasHalfStar) {
            stars.push(window.Utils.createElement('span', { style: 'color: #f59e0b;' }, '½')); // Simplified half star
        } else {
            stars.push(window.Utils.createElement('span', { style: 'color: var(--border-color);' }, '★'));
        }
    }

    return window.Utils.createElement('div', { className: 'star-rating' }, ...stars);
};

/**
 * Review Item Component
 */
window.ReviewItem = function (review) {
    return window.Utils.createElement('div', {
        className: 'review-item',
        style: 'background: #fff; padding: 20px; border-radius: 8px; border: 1px solid var(--border-color);'
    },
        window.Utils.createElement('div', { className: 'flex justify-between items-center', style: 'margin-bottom: 12px;' },
            window.Utils.createElement('div', { className: 'flex items-center gap-12' },
                window.Utils.createElement('div', {
                    style: 'width: 40px; height: 40px; border-radius: 50%; background: var(--primary-color); color: #fff; display: flex; align-items: center; justify-content: center; font-weight: 700;'
                }, review.user.charAt(0)),
                window.Utils.createElement('div', {},
                    window.Utils.createElement('strong', { style: 'display: block;' }, review.user),
                    window.Utils.createElement('span', { className: 'text-xs text-muted' }, review.date)
                )
            ),
            window.StarRating(review.rating)
        ),
        window.Utils.createElement('p', { style: 'color: var(--text-color-muted); line-height: 1.5; margin: 0;' }, review.comment)
    );
};
