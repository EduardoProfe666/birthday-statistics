<script lang="ts">
  import { Clock, Calendar, Sun, Watch } from 'lucide-svelte';
  import { getTimeMetrics } from '../utils/timeUtils';
  import { currentTime } from '../stores/timeStore';
  
  export let birthDate: Date;
  
  $: metrics = getTimeMetrics(birthDate, $currentTime);
</script>

<section class="stats-card p-6">
  <h2 class="stats-title">
    <Clock class="text-primary" />
    Time Elapsed
  </h2>
  
  <div class="stats-grid">
    <div class="stat-item">
      <Calendar class="text-purple-500" />
      <div>
        <div class="text-sm opacity-75">Centuries</div>
        <div class="stat-value">{metrics.centuries.toLocaleString('en-US')}</div>
      </div>
    </div>
    
    <div class="stat-item">
      <Calendar class="text-blue-500" />
      <div>
        <div class="text-sm opacity-75">Decades</div>
        <div class="stat-value">{metrics.decades.toLocaleString('en-US')}</div>
      </div>
    </div>
    
    <div class="stat-item">
      <Calendar class="text-green-500" />
      <div>
        <div class="text-sm opacity-75">Quinquenniums</div>
        <div class="stat-value">{metrics.quinquenniums.toLocaleString('en-US')}</div>
      </div>
    </div>
    
    <div class="stat-item">
      <Calendar class="text-yellow-500" />
      <div>
        <div class="text-sm opacity-75">Years</div>
        <div class="stat-value">{metrics.years.toLocaleString('en-US')}</div>
      </div>
    </div>
    
    <div class="stat-item">
      <Calendar class="text-red-500" />
      <div>
        <div class="text-sm opacity-75">Months</div>
        <div class="stat-value">{metrics.months.toLocaleString('en-US')}</div>
      </div>
    </div>
    
    <div class="stat-item">
      <Calendar class="text-indigo-500" />
      <div>
        <div class="text-sm opacity-75">Weeks</div>
        <div class="stat-value">{metrics.weeks.toLocaleString('en-US')}</div>
      </div>
    </div>
    
    <div class="stat-item">
      <Sun class="text-orange-500" />
      <div>
        <div class="text-sm opacity-75">Days</div>
        <div class="stat-value">{metrics.days.toLocaleString('en-US')}</div>
      </div>
    </div>
    
    <div class="stat-item">
      <Clock class="text-teal-500" />
      <div>
        <div class="text-sm opacity-75">Hours</div>
        <div class="stat-value">{metrics.hours.toLocaleString('en-US')}</div>
      </div>
    </div>
    
    <div class="stat-item">
      <Watch class="text-pink-500" />
      <div>
        <div class="text-sm opacity-75">Minutes</div>
        <div class="stat-value">{metrics.minutes.toLocaleString('en-US')}</div>
      </div>
    </div>
    
    <div class="stat-item">
      <Watch class="text-cyan-500" />
      <div>
        <div class="text-sm opacity-75">Seconds</div>
        <div class="stat-value">{metrics.seconds.toLocaleString('en-US')}</div>
      </div>
    </div>
  </div>
</section>