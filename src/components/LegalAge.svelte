<script lang="ts">
  import { Scale, Flag, Calendar } from 'lucide-svelte';
  import { differenceInYears, differenceInDays } from 'date-fns';
  import { currentTime } from '../stores/timeStore';
  
  export let birthDate: Date;

  const LEGAL_AGES = {
    'Albania': 18,
    'Argentina': 18,
    'Armenia': 18,
    'Australia': 18,
    'Austria': 18,
    'Azerbaijan': 18,
    'Belgium': 16,
    'Bolivia': 18,
    'Brazil': 18,
    'Canada': 18,
    'Chile': 18,
    'China': 18,
    'Colombia': 18,
    'Costa Rica': 18,
    'Cuba': 18,
    'Cyprus': 17,
    'Czech Republic': 18,
    'Denmark': 16,
    'Dominican Republic': 18,
    'Egypt': 21,
    'Estonia': 18,
    'Finland': 18,
    'France': 18,
    'Georgia': 18,
    'Germany': 18,
    'Greece': 18,
    'Hungary': 18,
    'Iceland': 20,
    'Ireland': 18,
    'Israel': 18,
    'Italy': 18,
    'Japan': 20,
    'Kazakhstan': 21,
    'Kenya': 18,
    'Latvia': 18,
    'Lithuania': 20,
    'Luxembourg': 16,
    'Malaysia': 18,
    'Moldova': 18,
    'Netherlands': 18,
    'New Zealand': 18,
    'Norway': 18,
    'Peru': 18,
    'Philippines': 18,
    'Poland': 18,
    'Portugal': 16,
    'Romania': 18,
    'Russia': 18,
    'Singapore': 18,
    'Slovakia': 18,
    'Slovenia': 18,
    'South Africa': 18,
    'South Korea': 19,
    'Spain': 18,
    'Sweden': 18,
    'Switzerland': 16,
    'Taiwan': 18,
    'Thailand': 20,
    'United Kingdom': 18,
    'United States': 21
  };


  let selectedCountry = 'United States';
  
  $: age = differenceInYears($currentTime, birthDate);
  // @ts-ignore
  $: legalAge = LEGAL_AGES[selectedCountry];
  $: isLegal = age >= legalAge;
  $: {
    const futureDate = new Date(birthDate);
    futureDate.setFullYear(birthDate.getFullYear() + legalAge);
    daysUntilLegal = isLegal ? 0 : differenceInDays(futureDate, $currentTime);
  }
  let daysUntilLegal: number;
</script>

<section class="stats-card p-6">
  <h2 class="stats-title">
    <Scale class="text-primary" />
    Legal Age Status
  </h2>
  
  <div class="mb-4">
    <select 
      bind:value={selectedCountry}
      class="select select-bordered w-full max-w-xs"
    >
      {#each Object.keys(LEGAL_AGES) as country}
        <option value={country}>{country}</option>
      {/each}
    </select>
  </div>
  
  <div class="stats-grid">
    <div class="stat-item">
      <Scale class="text-blue-500" />
      <div>
        <div class="text-sm opacity-75">Legal Age</div>
        <div class="stat-value">{legalAge}</div>
      </div>
    </div>
    
    <div class="stat-item">
      <Flag class={isLegal ? "text-green-500" : "text-red-500"} />
      <div>
        <div class="text-sm opacity-75">Status</div>
        <div class="stat-value">{isLegal ? "Legal Age" : "Underage"}</div>
      </div>
    </div>
    
    {#if !isLegal}
      <div class="stat-item">
        <Calendar class="text-purple-500" />
        <div>
          <div class="text-sm opacity-75">Days Until Legal Age</div>
          <div class="stat-value">{daysUntilLegal.toLocaleString('en-US')}</div>
        </div>
      </div>
    {/if}
  </div>
</section>