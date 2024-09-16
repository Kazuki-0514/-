// ローカルストレージからレビューを取得する関数
function getReviews() {
    return JSON.parse(localStorage.getItem('reviews') || '[]');
}

// ローカルストレージにレビューを保存する関数
function saveReviews(reviews) {
    localStorage.setItem('reviews', JSON.stringify(reviews));
}

// レビューをページに追加する関数
function addReviewToPage(name, comment, rating) {
    const reviewList = document.getElementById('reviewList');
    const reviewItem = document.createElement('li');
    reviewItem.innerHTML = `<strong>${name}</strong> - 評価: ${rating}/5<br>${comment}`;
    reviewList.appendChild(reviewItem);
}

// ローカルストレージからレビューを読み込み、表示する関数
function loadReviews() {
    const reviews = getReviews();
    reviews.forEach(review => {
        addReviewToPage(review.name, review.comment, review.rating);
    });
}

// レビューをローカルストレージに保存する関数
function saveReview(name, comment, rating) {
    let reviews = getReviews();
    reviews.push({ name, comment, rating });
    saveReviews(reviews);
}

// フォーム送信時の処理
document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;
    const rating = document.getElementById('rating').value;
    
    addReviewToPage(name, comment, rating);
    saveReview(name, comment, rating);
    
    // フォームのクリア
    document.getElementById('reviewForm').reset();
});

// アプリの初期化
document.addEventListener('DOMContentLoaded', function() {
    loadReviews();
});
