<script lang="ts">
  import { Star, Sparkles, Flame } from 'lucide-svelte';
  import { getWesternZodiac, getChineseZodiac, getZodiacElement } from '../utils/astrologicalUtils';
  
  export let birthDate: Date;
  
  $: westernZodiac = getWesternZodiac(birthDate);
  $: chineseZodiac = getChineseZodiac(birthDate);
  $: element = getZodiacElement(westernZodiac);
</script>

<section class="stats-card p-6">
  <h2 class="stats-title">
    <Star class="text-primary" />
    Astrological Profile
  </h2>
  
  <div class="stats-grid">
    <div class="stat-item">
      <Star class="text-yellow-500" />
      <div>
        <div class="text-sm opacity-75">Western Zodiac</div>
        <div class="stat-value">{westernZodiac}</div>
      </div>
    </div>
    
    <div class="stat-item">
      <Sparkles class="text-red-500" />
      <div>
        <div class="text-sm opacity-75">Chinese Zodiac</div>
        <div class="stat-value">{chineseZodiac}</div>
      </div>
    </div>
    
    <div class="stat-item">
      <Flame class="text-orange-500" />
      <div>
        <div class="text-sm opacity-75">Element</div>
        <div class="stat-value">{element}</div>
      </div>
    </div>
  </div>
</section>