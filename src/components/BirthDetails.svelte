<script lang="ts">
  import { Calendar, Sunrise, Moon, Leaf } from 'lucide-svelte';
  import { format } from 'date-fns';
  import { getMoonPhase } from '../utils/lunarUtils';
  
  export let birthDate: Date;
  
  $: isLeapYear = new Date(birthDate).getFullYear() % 4 === 0;
  $: dayOfWeek = format(birthDate, 'EEEE');
  $: moonPhase = getMoonPhase(birthDate);
  
  function getSeason(date: Date): string {
    const month = date.getMonth();
    if (month >= 2 && month <= 4) return 'Spring';
    if (month >= 5 && month <= 7) return 'Summer';
    if (month >= 8 && month <= 10) return 'Fall';
    return 'Winter';
  }
</script>

<section class="stats-card p-6">
  <h2 class="stats-title">
    <Calendar class="text-primary" />
    Birth Details
  </h2>
  
  <div class="stats-grid">
    <div class="stat-item">
      <Calendar class="text-blue-500" />
      <div>
        <div class="text-sm opacity-75">Date</div>
        <div class="stat-value">{format(birthDate, 'PP')}</div>
      </div>
    </div>
    
    <div class="stat-item">
      <Sunrise class="text-yellow-500" />
      <div>
        <div class="text-sm opacity-75">Leap Year</div>
        <div class="stat-value">{isLeapYear ? 'Yes' : 'No'}</div>
      </div>
    </div>
    
    <div class="stat-item">
      <Calendar class="text-green-500" />
      <div>
        <div class="text-sm opacity-75">Day of Week</div>
        <div class="stat-value">{dayOfWeek}</div>
      </div>
    </div>
    
    <div class="stat-item">
      <Moon class="text-purple-500" />
      <div>
        <div class="text-sm opacity-75">Moon Phase</div>
        <div class="stat-value">{moonPhase}</div>
      </div>
    </div>
    
    <div class="stat-item">
      <Leaf class="text-orange-500" />
      <div>
        <div class="text-sm opacity-75">Season</div>
        <div class="stat-value">{getSeason(birthDate)}</div>
      </div>
    </div>
  </div>
</section>