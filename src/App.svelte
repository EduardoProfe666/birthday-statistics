<script lang="ts">
  import { onMount } from 'svelte';
  import BirthDetails from './components/BirthDetails.svelte';
  import CalendarDates from './components/CalendarDates.svelte';
  import AstrologicalProfile from './components/AstrologicalProfile.svelte';
  import TimeElapsed from './components/TimeElapsed.svelte';
  import CosmicJourney from './components/CosmicJourney.svelte';
  import NextBirthday from './components/NextBirthday.svelte';
  import LegalAge from './components/LegalAge.svelte';
  import LifeStatistics from './components/LifeStatistics.svelte';
  import DateInput from './components/DateInput.svelte';
  import GithubButton from './components/GithubButton.svelte';
  import { Moon } from 'lucide-svelte';

  let birthDate: Date | null = null;
  let updateInterval: number;
  let currentYear = new Date().getFullYear();

  $: if (birthDate) {
    if (updateInterval) clearInterval(updateInterval);
    updateInterval = setInterval(() => {
      birthDate = birthDate;
    }, 1000);
  }

  onMount(() => {
    return () => {
      if (updateInterval) clearInterval(updateInterval);
    };
  });
</script>

<main class="min-h-screen bg-base-200 p-4">
  <div class="max-w-7xl mx-auto">
    <header class="text-center mb-8">
      <h1 class="text-4xl font-bold flex items-center justify-center gap-2 mb-2">
        <Moon class="text-primary" />
        Life Statistics Calculator
      </h1>
      <DateInput bind:value={birthDate} />
    </header>

    {#if birthDate}
      <div class="space-y-8">
        <BirthDetails {birthDate} />
        <CalendarDates {birthDate} />
        <AstrologicalProfile {birthDate} />
        <TimeElapsed {birthDate} />
        <CosmicJourney {birthDate} />
        <NextBirthday {birthDate} />
        <LegalAge {birthDate} />
        <LifeStatistics {birthDate} />
      </div>
    {:else}
      <div class="card bg-base-100 p-8 text-center">
        <p class="text-xl">Please enter your birth date to see your life statistics</p>
      </div>
    {/if}
  </div>
</main>

<footer class="footer footer-center p-4 bg-base-300 text-base-content">
  <div>
    <p>© {currentYear} - 
      <a 
        href="https://eduardoprofe666.github.io" 
        target="_blank" 
        rel="noopener noreferrer"
        class="font-medium hover:text-primary transition-colors duration-300 inline-flex items-center gap-1"
      >
        EduardoProfe666 
        <span class="hover:animate-bounce">🎩</span>
      </a>
    </p>
  </div>
</footer>

<GithubButton />