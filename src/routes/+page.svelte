<script lang="ts">
	const socialLinks = [
		{
			label: 'GitHub',
			href: 'https://github.com/jNaimXIII',
			icon: 'github'
		},
		{
			label: 'Discord',
			href: 'https://discord.gg/fNQ9EbhVPX',
			icon: 'discord'
		},
		{
			label: 'LinkedIn',
			href: 'https://linkedin.com/in/jNaimXIII',
			icon: 'linkedin'
		},
		{
			label: 'Twitter',
			href: 'https://twitter.com/jNaimXIII',
			icon: 'twitter'
		},
		{
			label: 'YouTube',
			href: 'https://youtube.com/@jNaimXIII',
			icon: 'youtube'
		},
		{
			label: 'Facebook',
			href: 'https://facebook.com/jNaimXD',
			icon: 'facebook'
		},
		{
			label: 'Spotify',
			href: 'https://open.spotify.com/user/31mgij355hfrhnxov6d777p4n2ya?si=b50e4916e9824e9d',
			icon: 'spotify'
		}
	];
</script>

<svelte:head>
	<title>Jannatin Naim</title>
</svelte:head>

<section class="flex flex-col items-center justify-center min-h-screen">
	<h1 class="text-6xl">Jannatin Naim</h1>
	<p class="mb-8">Heyo! How's it going?</p>

	<nav>
		<ul class="flex gap-4">
			{#each socialLinks as socialLink}
				<li class="w-6">
					<a
						title={socialLink.label}
						href={socialLink.href}
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src="socials/{socialLink.icon}.svg" alt={socialLink.label} />
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</section>
