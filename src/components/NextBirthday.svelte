<script lang="ts">
  import { Gift, Calendar } from 'lucide-svelte';
  import { differenceInDays } from 'date-fns';
  import { currentTime } from '../stores/timeStore';
  
  export let birthDate: Date;
  
  $: nextBirthday = new Date($currentTime.getFullYear(), birthDate.getMonth(), birthDate.getDate());
  $: {
    if (nextBirthday < $currentTime) {
      nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
    }
  }
  $: daysUntilBirthday = differenceInDays(nextBirthday, $currentTime);
</script>

<section class="stats-card p-6">
  <h2 class="stats-title">
    <Gift class="text-primary" />
    Next Birthday
  </h2>
  
  <div class="stats-grid">
    <div class="stat-item">
      <Calendar class="text-pink-500" />
      <div>
        <div class="text-sm opacity-75">Days Until Next Birthday</div>
        <div class="stat-value">{daysUntilBirthday}</div>
      </div>
    </div>
  </div>
</section>