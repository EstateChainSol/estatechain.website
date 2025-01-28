<script>
  let faqs = [
    {
      question: 'What is EstateChain?',
      answer: 'EstateChain is a revolutionary real estate investment platform built on the Solana blockchain that allows anyone to invest in premium properties with as little as 100 USDC. Our platform tokenizes real estate assets, making them easily tradeable and accessible to all investors.'
    },
    {
      question: 'How does property tokenization work?',
      answer: 'Each property on our platform is converted into digital tokens that represent fractional ownership. These tokens are backed by the actual real estate asset and are secured on the Solana blockchain. When you own tokens, you own a proportional share of the property and its rental income.'
    },
    {
      question: 'What are the minimum investment requirements?',
      answer: 'You can start investing with as little as 100 USDC. This low minimum investment allows anyone to build a diversified real estate portfolio, regardless of their budget.'
    },
    {
      question: 'How do I receive rental income?',
      answer: 'Rental income is automatically distributed to token holders through smart contracts. The distributions are made in USDC directly to your Solana wallet, proportional to your ownership percentage.'
    },
    {
      question: 'How can I sell my investment?',
      answer: 'Our platform will feature an integrated DEX where you can trade your property tokens 24/7. This provides instant liquidity, allowing you to exit your investment whenever you choose.'
    },
    {
      question: 'Is my investment secure?',
      answer: 'Security is our top priority. All smart contracts undergo rigorous audits, properties are legally structured through regulated entities, and the platform implements industry-leading security measures.'
    },
    {
      question: 'Which wallets are supported?',
      answer: 'At launch, we will support all major Solana wallets including Phantom, Solflare, and other popular options. We recommend Phantom wallet for the best user experience.'
    },
    {
      question: 'What types of properties are available for investment?',
      answer: 'Our platform offers a diverse range of properties including residential homes, apartment complexes, commercial offices, retail spaces, and vacation rentals. Each property is carefully vetted to ensure quality investment opportunities.'
    },
    {
      question: 'How are property values determined?',
      answer: 'Property values are determined through professional third-party appraisals, market analysis, and regular revaluations. We ensure transparent and accurate pricing through multiple independent sources.'
    },
    {
      question: 'What are the fees involved?',
      answer: 'Our platform charges minimal fees to ensure maximum returns for investors. This includes a small transaction fee for buying/selling tokens and a management fee for property maintenance and platform operations. All fees are transparently disclosed before investment.'
    },
    {
      question: 'How is property maintenance handled?',
      answer: 'Professional property management companies handle all aspects of maintenance, tenant relations, and day-to-day operations. These companies are selected through our DAO governance system and are regularly evaluated for performance.'
    },
    {
      question: 'What happens if I want to sell my entire investment?',
      answer: 'You can sell your entire investment at any time through our integrated DEX. The platform provides instant liquidity, allowing you to exit your position partially or completely whenever you choose.'
    }
  ];
</script>

<svelte:head>
  <title>FAQ - EstateChain</title>
</svelte:head>

<div class="min-h-screen bg-gradient-to-b from-secondary to-secondary-dark text-white py-20">
  <div class="container mx-auto px-4">
    <h1 class="text-5xl font-bold mb-12 text-center">Frequently Asked Questions</h1>
    
    <div class="max-w-3xl mx-auto">
      <div class="space-y-8">
        {#each faqs as faq}
          <div class="bg-black/30 p-8 rounded-2xl backdrop-blur-lg border border-accent/10">
            <h2 class="text-2xl font-bold mb-4">{faq.question}</h2>
            <p class="text-gray-300 leading-relaxed">{faq.answer}</p>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div> 