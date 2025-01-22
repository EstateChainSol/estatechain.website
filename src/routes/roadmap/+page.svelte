<script>
  let milestones = [
    {
      quarter: 'Q1 2024',
      title: 'Platform Development',
      items: [
        'Smart contract development and auditing',
        'Property tokenization framework',
        'Integration with Solana infrastructure',
        'User interface development'
      ],
      status: 'In Progress'
    },
    {
      quarter: 'Q2 2024',
      title: 'Platform Launch',
      items: [
        'Security audits completion',
        'Initial property listings',
        'Public platform launch',
        'First property tokenizations'
      ],
      status: 'Upcoming'
    },
    {
      quarter: 'Q3 2024',
      title: 'Platform Expansion',
      items: [
        'Additional property types',
        'Enhanced analytics dashboard',
        'Mobile app release',
        'International market expansion'
      ],
      status: 'Planned'
    },
    {
      quarter: 'Q4 2024',
      title: 'Advanced Features',
      items: [
        'Secondary market launch',
        'Advanced portfolio tools',
        'Property management integration',
        'Cross-chain bridges'
      ],
      status: 'Planned'
    }
  ];
</script>

<div class="min-h-screen bg-gradient-to-b from-secondary to-secondary-dark text-white py-20">
  <div class="container mx-auto px-4">
    <h1 class="text-5xl font-bold mb-12 text-center">Platform Roadmap</h1>
    
    <div class="max-w-4xl mx-auto">
      <div class="space-y-12">
        {#each milestones as milestone}
          <div class="bg-black/30 p-8 rounded-2xl backdrop-blur-lg border border-accent/10">
            <div class="flex justify-between items-center mb-6">
              <div>
                <div class="text-accent font-medium mb-2">{milestone.quarter}</div>
                <h2 class="text-2xl font-bold">{milestone.title}</h2>
              </div>
              <div class="px-4 py-1 rounded-full text-sm font-medium
                {milestone.status === 'In Progress' ? 'bg-primary/20 text-primary' :
                 milestone.status === 'Upcoming' ? 'bg-accent/20 text-accent' :
                 'bg-gray-500/20 text-gray-400'}">
                {milestone.status}
              </div>
            </div>
            <ul class="space-y-3">
              {#each milestone.items as item}
                <li class="flex items-start">
                  <span class="text-accent mr-3">•</span>
                  <span class="text-gray-300">{item}</span>
                </li>
              {/each}
            </ul>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div> 