<script>
  import { onMount } from 'svelte';
  
  let stats = [
    { label: 'Target Properties at Launch', value: '50+' },
    { label: 'Minimum Investment', value: '100 USDC' },
    { label: 'Transaction Speed', value: '<1s' },
    { label: 'Launch Date', value: 'Q2 2024' }
  ];

  let features = [
    {
      title: 'Powered by Solana',
      description: "Lightning-fast transactions and minimal fees thanks to Solana's powerful blockchain",
      icon: '⚡'
    },
    {
      title: 'Fractional Ownership',
      description: 'Access premium real estate investments starting from just 100 USDC',
      icon: '🏢'
    },
    {
      title: 'Instant Liquidity',
      description: 'Trade your property tokens anytime through our Solana-based DEX',
      icon: '💱'
    },
    {
      title: 'DAO Governance',
      description: 'Shape the future of real estate investment through community governance',
      icon: '🏛️'
    }
  ];
</script>

<div class="min-h-screen bg-gradient-to-b from-secondary to-secondary-dark text-white">
  <!-- Hero Section -->
  <header class="container mx-auto px-4 py-20">
    <nav class="flex justify-between items-center mb-16">
      <div class="text-2xl font-bold text-accent">EstateChain</div>
      <div class="space-x-8">
        <a href="#features" class="hover:text-accent">Features</a>
        <a href="/roadmap" class="hover:text-accent">Roadmap</a>
        <a href="#how-it-works" class="hover:text-accent">How it Works</a>
        <button class="bg-primary hover:bg-primary-dark px-6 py-2 rounded-lg">
          Join Waitlist
        </button>
      </div>
    </nav>

    <div class="max-w-4xl">
      <div class="mb-6 inline-block px-4 py-1 bg-accent/10 rounded-full text-accent text-sm font-medium">
        Launching Q2 2024 on Solana 🚀
      </div>
      <h1 class="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary">
        The Future of Real Estate Investment is Almost Here
      </h1>
      <p class="text-xl text-gray-300 mb-8">
        Be among the first to access our revolutionary platform that democratizes real estate investment through Solana blockchain technology. 
        Experience lightning-fast transactions, minimal fees, and true ownership of premium properties.
      </p>
      <div class="flex space-x-4">
        <button class="bg-primary hover:bg-primary-dark px-8 py-4 rounded-lg text-lg">
          Join Waitlist
        </button>
        <button class="border border-accent hover:bg-accent/10 px-8 py-4 rounded-lg text-lg">
          Learn More
        </button>
      </div>
    </div>
  </header>

  <!-- Stats Section -->
  <section class="py-20 bg-black/30">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-4 gap-8">
        {#each stats as stat}
          <div class="text-center">
            <div class="text-4xl font-bold text-accent mb-2">{stat.value}</div>
            <div class="text-gray-400">{stat.label}</div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Features Section -->
  <section id="features" class="py-20">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-16">Revolutionary Features Coming Soon</h2>
      <div class="grid grid-cols-2 gap-8">
        {#each features as feature}
          <div class="bg-black/30 p-8 rounded-2xl backdrop-blur-lg border border-accent/10 hover:border-accent/30 transition-all">
            <div class="text-4xl mb-4">{feature.icon}</div>
            <h3 class="text-2xl font-bold mb-4">{feature.title}</h3>
            <p class="text-gray-400">{feature.description}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- How it Works -->
  <section id="how-it-works" class="py-20 bg-black/30">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-16">How It Will Work</h2>
      <div class="grid grid-cols-3 gap-8">
        <div class="text-center">
          <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl mx-auto mb-6">1</div>
          <h3 class="text-xl font-bold mb-4">Connect Solana Wallet</h3>
          <p class="text-gray-400">Link your Phantom or other Solana wallet to access tokenized properties</p>
        </div>
        <div class="text-center">
          <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl mx-auto mb-6">2</div>
          <h3 class="text-xl font-bold mb-4">Invest in Properties</h3>
          <p class="text-gray-400">Use USDC on Solana to invest in premium real estate opportunities</p>
        </div>
        <div class="text-center">
          <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl mx-auto mb-6">3</div>
          <h3 class="text-xl font-bold mb-4">Earn Returns</h3>
          <p class="text-gray-400">Receive automated rental distributions through smart contracts</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="py-20">
    <div class="container mx-auto px-4 text-center">
      <div class="inline-block px-4 py-1 bg-accent/10 rounded-full text-accent text-sm font-medium mb-8">
        Early Access Coming Soon
      </div>
      <h2 class="text-4xl font-bold mb-8">Be First in Line</h2>
      <p class="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
        Join our waitlist to get early access to the platform and be notified when we launch. Early supporters will receive exclusive benefits and priority access to our Solana-powered real estate platform.
      </p>
      <button class="bg-primary hover:bg-primary-dark px-8 py-4 rounded-lg text-lg">
        Join Waitlist
      </button>
    </div>
  </section>

  <!-- Footer -->
  <footer class="py-12 bg-black/30">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-4 gap-8">
        <div>
          <div class="text-2xl font-bold text-accent mb-4">EstateChain</div>
          <p class="text-gray-400">The future of real estate investment on Solana</p>
        </div>
        <div>
          <h4 class="font-bold mb-4">Platform</h4>
          <ul class="space-y-2 text-gray-400">
            <li><a href="#features" class="hover:text-accent">Features</a></li>
            <li><a href="#how-it-works" class="hover:text-accent">How it Works</a></li>
            <li><a href="/roadmap" class="hover:text-accent">Roadmap</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold mb-4">Resources</h4>
          <ul class="space-y-2 text-gray-400">
            <li><a href="/faq" class="hover:text-accent">FAQ</a></li>
            <li><a href="/blog" class="hover:text-accent">Blog</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold mb-4">Connect</h4>
          <ul class="space-y-2 text-gray-400">
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="hover:text-accent">Twitter</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</div>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }
</style>
