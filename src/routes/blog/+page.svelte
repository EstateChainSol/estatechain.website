<script>
  let articles = [
    {
      title: 'The Future of Real Estate Investment is Here',
      date: 'March 15, 2024',
      excerpt: 'Discover how blockchain technology and tokenization are revolutionizing the real estate market, making premium properties accessible to everyone.',
      readTime: '5 min read',
      category: 'Industry Insights'
    },
    {
      title: 'Why We Chose Solana for Real Estate Tokenization',
      date: 'March 10, 2024',
      excerpt: 'Learn about the technical advantages of Solana blockchain and how its speed, low costs, and scalability benefit real estate investors.',
      readTime: '4 min read',
      category: 'Technology'
    },
    {
      title: 'Understanding Property Tokenization: A Complete Guide',
      date: 'March 5, 2024',
      excerpt: 'Everything you need to know about how property tokenization works, from legal structure to technical implementation.',
      readTime: '7 min read',
      category: 'Education'
    },
    {
      title: 'Real Estate Investment Strategies in the Digital Age',
      date: 'February 28, 2024',
      excerpt: 'Explore new investment strategies made possible by fractional ownership and instant liquidity in the real estate market.',
      readTime: '6 min read',
      category: 'Investment'
    }
  ];
</script>

<div class="min-h-screen bg-gradient-to-b from-secondary to-secondary-dark text-white py-20">
  <div class="container mx-auto px-4">
    <h1 class="text-5xl font-bold mb-12 text-center">Latest Updates</h1>
    
    <div class="max-w-4xl mx-auto">
      <div class="grid gap-8">
        {#each articles as article}
          <div class="bg-black/30 p-8 rounded-2xl backdrop-blur-lg border border-accent/10 hover:border-accent/30 transition-all">
            <div class="flex items-center space-x-4 mb-4">
              <span class="text-accent text-sm">{article.date}</span>
              <span class="text-gray-400 text-sm">•</span>
              <span class="text-gray-400 text-sm">{article.readTime}</span>
              <span class="text-gray-400 text-sm">•</span>
              <span class="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">{article.category}</span>
            </div>
            <h2 class="text-2xl font-bold mb-4 hover:text-accent transition-colors">
              <a href="#">{article.title}</a>
            </h2>
            <p class="text-gray-300 leading-relaxed mb-6">{article.excerpt}</p>
            <a href="#" class="text-accent hover:text-accent-dark transition-colors inline-flex items-center">
              Read More
              <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div> 