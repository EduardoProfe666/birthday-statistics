<script lang="ts">
  import { Scale, Flag, Calendar } from 'lucide-svelte';
  import { differenceInYears, differenceInDays } from 'date-fns';
  import { currentTime } from '../stores/timeStore';
  
  export let birthDate: Date;
  
  const LEGAL_AGES = {
    'United States': 18,
    'Japan': 20,
    'United Kingdom': 18,
    'Spain': 18,
    'Germany': 18,
    'France': 18,
    'Italy': 18,
    'Canada': 18,
    'Australia': 18,
    'Brazil': 18
  };
  
  let selectedCountry = 'United States';
  
  $: age = differenceInYears($currentTime, birthDate);
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
          <div class="stat-value">{daysUntilLegal}</div>
        </div>
      </div>
    {/if}
  </div>
</section>