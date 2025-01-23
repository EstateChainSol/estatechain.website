<script>
	import { onMount } from 'svelte';

	let stats = [
		{ label: 'Property Types', value: '4' },
		{ label: 'Min Investment', value: '100 USDC' },
		{ label: 'Network', value: 'Solana' },
		{ label: 'Supported Wallets', value: '3+' }
	];

	let features = [
		{
			title: 'Powered by Solana',
			description:
				"Experience the speed and efficiency of Solana's blockchain technology for real estate investment",
			icon: '⚡'
		},
		{
			title: 'Fractional Ownership',
			description: 'Access real estate investments through tokenized property shares',
			icon: '🏢'
		},
		{
			title: 'Smart Contracts',
			description:
				'Automated rental distributions and ownership management through blockchain technology',
			icon: '📋'
		},
		{
			title: 'Property Portfolio',
			description: 'Track and manage your real estate investments in one place',
			icon: '📊'
		}
	];
</script>

<svelte:head>
	<title>EstateChain - Tokenized Real Estate on Solana</title>
</svelte:head>

<div
	class="min-h-screen bg-gradient-to-b from-secondary to-secondary-dark text-white overflow-x-hidden"
>
	<!-- Hero Section -->
	<header class="container mx-auto px-4 pt-8 pb-20">
		<nav class="flex justify-between items-center mb-16">
			<div class="text-2xl font-bold text-accent">EstateChain</div>
			<div class="space-x-8">
				<a href="#features" class="hover:text-accent">Features</a>
				<a href="#how-it-works" class="hover:text-accent">How it Works</a>
				<a href="/estatechain.website/faq" class="hover:text-accent">FAQ</a>
				<a
					href="https://estatechainsol.github.io/estatechain.platform"
					target="_blank"
					class="bg-primary hover:bg-primary-dark px-6 py-2 rounded-lg"
				>
					View Demo
				</a>
				<button class="bg-accent hover:bg-accent-dark px-6 py-2 rounded-lg"> Coming Soon </button>
			</div>
		</nav>

		<div class="max-w-4xl">
			<div
				class="mb-6 inline-block px-4 py-1 bg-primary/20 rounded-full text-primary text-sm font-medium"
			>
				Platform Coming Soon • <a
					href="https://estatechainsol.github.io/estatechain.platform"
					target="_blank"
					class="font-bold hover:text-primary-dark">Try Demo</a
				>
			</div>
			<h1
				class="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary"
			>
				Tokenized Real Estate Investment
			</h1>
			<p class="text-xl text-gray-300 mb-8">
				EstateChain is bringing real estate investment to the Solana blockchain. Stay tuned for the
				launch of our platform featuring tokenization, smart contracts, and decentralized
				technology.
			</p>
			<div class="flex space-x-4">
				<a
					href="https://estatechainsol.github.io/estatechain.docs"
					class="bg-accent hover:bg-accent-dark px-8 py-4 rounded-lg text-lg"
				>
					Documentation
				</a>
				<a
					href="https://estatechainsol.github.io/estatechain.platform"
					target="_blank"
					class="bg-primary hover:bg-primary-dark px-8 py-4 rounded-lg text-lg"
				>
					View Demo
				</a>
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
			<h2 class="text-4xl font-bold text-center mb-16">Planned Platform Features</h2>
			<div class="grid grid-cols-2 gap-8">
				{#each features as feature}
					<div
						class="bg-black/30 p-8 rounded-2xl backdrop-blur-lg border border-accent/10 hover:border-accent/30 transition-all"
					>
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
					<div
						class="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl mx-auto mb-6"
					>
						1
					</div>
					<h3 class="text-xl font-bold mb-4">Connect Solana Wallet</h3>
					<p class="text-gray-400">Use Phantom, Solflare, or other Solana wallets</p>
				</div>
				<div class="text-center">
					<div
						class="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl mx-auto mb-6"
					>
						2
					</div>
					<h3 class="text-xl font-bold mb-4">Select Properties</h3>
					<p class="text-gray-400">Browse tokenized real estate opportunities</p>
				</div>
				<div class="text-center">
					<div
						class="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl mx-auto mb-6"
					>
						3
					</div>
					<h3 class="text-xl font-bold mb-4">Manage Portfolio</h3>
					<p class="text-gray-400">Track investments and receive distributions</p>
				</div>
			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<section class="py-20">
		<div class="container mx-auto px-4 text-center">
			<div
				class="inline-block px-4 py-1 bg-primary/20 rounded-full text-primary text-sm font-medium mb-8"
			>
				Platform Under Development
			</div>
			<h2 class="text-4xl font-bold mb-8">Experience It Today</h2>
			<p class="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
				Try our demo platform to explore the future of tokenized real estate on Solana, and read our
				documentation to learn more about the technology.
			</p>
			<div class="flex justify-center space-x-4">
				<a
					href="https://estatechainsol.github.io/estatechain.platform"
					target="_blank"
					class="bg-primary hover:bg-primary-dark px-8 py-4 rounded-lg text-lg"
				>
					View Demo
				</a>
				<a
					href="https://estatechainsol.github.io/estatechain.docs"
					class="bg-accent hover:bg-accent-dark px-8 py-4 rounded-lg text-lg"
				>
					Documentation
				</a>
			</div>
		</div>
	</section>

	<!-- Footer -->
	<footer class="py-12 bg-black/30">
		<div class="container mx-auto px-4">
			<div class="grid grid-cols-3 gap-8">
				<div>
					<div class="text-2xl font-bold text-accent mb-4">EstateChain</div>
					<p class="text-gray-400">Real estate investment on Solana - Coming Soon</p>
				</div>
				<div>
					<h4 class="font-bold mb-4">Platform</h4>
					<ul class="space-y-2 text-gray-400">
						<li><a href="#features" class="hover:text-accent">Features</a></li>
						<li><a href="#how-it-works" class="hover:text-accent">How it Works</a></li>
						<li><a href="/estatechain.website/faq" class="hover:text-accent">FAQ</a></li>
					</ul>
				</div>
				<div>
					<h4 class="font-bold mb-4">Connect</h4>
					<ul class="space-y-2 text-gray-400">
						<li>
							<a
								href="https://twitter.com"
								target="_blank"
								rel="noopener noreferrer"
								class="hover:text-accent">Twitter</a
							>
						</li>
						<li>
							<a
								href="https://github.com/EstateChainSol/estatechain.platform"
								target="_blank"
								rel="noopener noreferrer"
								class="hover:text-accent flex items-center"
							>
								GitHub
								<svg
									class="w-4 h-4 ml-1"
									fill="currentColor"
									viewBox="0 0 24 24"
									aria-hidden="true"
								>
									<path
										fill-rule="evenodd"
										d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
										clip-rule="evenodd"
									/>
								</svg>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</footer>
</div>
