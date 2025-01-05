<script lang="ts">
  import { Rocket, Sun, Globe2, Leaf } from 'lucide-svelte';
  import { getCosmicMetrics } from '../utils/cosmicUtils';
  import { currentTime } from '../stores/timeStore';
  import { differenceInYears } from 'date-fns';
  
  export let birthDate: Date;
  
  $: metrics = getCosmicMetrics(birthDate, $currentTime);
  $: seasonsExperienced = differenceInYears($currentTime, birthDate) * 4;
</script>

<section class="stats-card p-6">
  <h2 class="stats-title">
    <Rocket class="text-primary" />
    Cosmic Journey
  </h2>
  
  <div class="stats-grid">
    <div class="stat-item">
      <Sun class="text-yellow-500" />
      <div>
        <div class="text-sm opacity-75">Solar Orbits</div>
        <div class="stat-value">{metrics.solarOrbits}</div>
      </div>
    </div>
    
    <div class="stat-item">
      <Globe2 class="text-blue-500" />
      <div>
        <div class="text-sm opacity-75">Earth Rotations</div>
        <div class="stat-value">{metrics.earthRotations.toLocaleString()}</div>
      </div>
    </div>
    
    <div class="stat-item">
      <Rocket class="text-purple-500" />
      <div>
        <div class="text-sm opacity-75">Distance Traveled (billion km)</div>
        <div class="stat-value">{metrics.distanceTraveled.toFixed(2)}</div>
      </div>
    </div>

    <div class="stat-item">
      <Leaf class="text-green-500" />
      <div>
        <div class="text-sm opacity-75">Seasons Experienced</div>
        <div class="stat-value">{seasonsExperienced}</div>
      </div>
    </div>
  </div>
</section>