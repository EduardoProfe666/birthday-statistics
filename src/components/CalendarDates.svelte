<script lang="ts">
  import { Calendar } from 'lucide-svelte';
  import { getGregorianDate, getChineseDate, getIslamicDate, getHebrewDate } from '../utils/calendarUtils';
  
  export let birthDate: Date;
  
  $: gregorianDate = getGregorianDate(birthDate);
  $: chineseDate = getChineseDate(birthDate);
  $: islamicDate = getIslamicDate(birthDate);
  $: hebrewDate = getHebrewDate(birthDate);
</script>

<section class="stats-card p-6">
  <h2 class="stats-title">
    <Calendar class="text-primary" />
    Calendar Dates
  </h2>
  
  <div class="stats-grid">
    <div class="stat-item">
      <Calendar class="text-blue-500" />
      <div>
        <div class="text-sm opacity-75">Gregorian</div>
        <div class="stat-value">{gregorianDate}</div>
      </div>
    </div>
    
    <div class="stat-item">
      <Calendar class="text-red-500" />
      <div>
        <div class="text-sm opacity-75">Chinese</div>
        <div class="stat-value">{chineseDate}</div>
      </div>
    </div>
    
    <div class="stat-item">
      <Calendar class="text-green-500" />
      <div>
        <div class="text-sm opacity-75">Islamic</div>
        <div class="stat-value">{islamicDate}</div>
      </div>
    </div>
    
    <div class="stat-item">
      <Calendar class="text-purple-500" />
      <div>
        <div class="text-sm opacity-75">Hebrew</div>
        <div class="stat-value">{hebrewDate}</div>
      </div>
    </div>
  </div>
</section>