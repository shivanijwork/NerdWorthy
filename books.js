function showReview(book) {
  let content = "";
  if (book === "yogi") {
    content = `
      <h3 class="pb-4 mb-4 fst-italic border-bottom">
        Autobiography Of A Yogi - Paramahansa Yogananda
      </h3>
      <p class="blog-post-meta">May 24, 2025 by <a href="#">Shivani</a></p>
      <p><em>“The story of a yogi’s journey to self-realization and spiritual awakening.”</em></p>
      <blockquote class="blockquote">
        <p>"The season of failure is the best time for sowing the seeds of success."</p>
      </blockquote>
      <p>This classic spiritual autobiography takes you on a journey through the life of Paramahansa Yogananda, his encounters with saints and sages, and his quest for truth. It’s a must-read for anyone interested in yoga, meditation, or the spiritual path.</p>
      <h3>Why You Should Read It</h3>
      <ul>
        <li>Inspiring real-life stories</li>
        <li>Deep spiritual insights</li>
        <li>Accessible to all readers</li>
      </ul>
      <h3>Rating</h3>
      <p>🌟🌟🌟🌟⭐ (4.5/5)</p>
    `;
  } else if (book === "power_of_now") {
    content = `
      <h3 class="pb-4 mb-4 fst-italic border-bottom">
        The Power of Now - Eckhart Tolle
      </h3>
      <p class="blog-post-meta">May 24, 2025 by <a href="#">Shivani</a></p>
      <p><em>“Realize deeply that the present moment is all you ever have.”</em></p>
      <blockquote class="blockquote">
        <p>"You are not your mind."</p>
      </blockquote>
      <p>This book is a spiritual guide to help you discover your true self and find peace in the present moment. Tolle’s teachings are simple yet profound, making this a must-read for anyone seeking mindfulness and clarity.</p>
      <h3>Why You Should Read It</h3>
      <ul>
        <li>Practical mindfulness advice</li>
        <li>Easy to understand</li>
        <li>Life-changing perspective</li>
      </ul>
      <h3>Rating</h3>
      <p>🌟🌟🌟🌟⭐ (4.5/5)</p>
    `;
  }
  // Add more else if blocks for other books...
  else {
    content = `<p>Select a book review from the sidebar!</p>`;
  }
  document.getElementById("main-content").innerHTML = content;
}