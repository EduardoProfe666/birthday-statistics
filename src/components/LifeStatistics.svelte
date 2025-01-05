<script lang="ts">
  import { Activity, Heart, Wind, Droplet, Apple, Coffee, Moon, Thermometer, Brain, Dna } from 'lucide-svelte';
  import { differenceInHours } from 'date-fns';
  import { currentTime } from '../stores/timeStore';
  import { DAILY_AVERAGES } from '../utils/averagesConstants';
  import { getLifeStage } from '../utils/lifeStageUtils';
  
  export let birthDate: Date;
  
  $: hours = differenceInHours($currentTime, birthDate);
  $: days = hours / 24;
  $: age = Math.floor(days / 365.25);
  $: lifeStage = getLifeStage(age);
  
  $: statistics = {
    heartbeats: Math.floor(days * DAILY_AVERAGES.heartbeats),
    breaths: Math.floor(days * DAILY_AVERAGES.breaths),
    oxygen: Math.floor(days * DAILY_AVERAGES.oxygenLiters),
    calories: Math.floor(days * DAILY_AVERAGES.calories),
    food: (days * DAILY_AVERAGES.foodKg).toFixed(1),
    water: (days * DAILY_AVERAGES.waterLiters).toFixed(1),
    urine: (days * DAILY_AVERAGES.urineLiters).toFixed(1),
    feces: (days * DAILY_AVERAGES.fecesKg).toFixed(1),
    sleep: Math.floor(days * DAILY_AVERAGES.sleepHours),
    sweat: (days * DAILY_AVERAGES.sweatLiters).toFixed(1),
    bloodFiltered: Math.floor(days * DAILY_AVERAGES.bloodFiltered),
    deadSkin: (days * DAILY_AVERAGES.deadSkinGrams / 1000).toFixed(1)
  };
</script>

<section class="stats-card p-6">
  <h2 class="stats-title">
    <Activity class="text-primary" />
    Life Statistics
  </h2>
  
  <div class="mb-4">
    <div class="stat-item">
      <Brain class="text-purple-500" />
      <div>
        <div class="text-sm opacity-75">Life Stage</div>
        <div class="stat-value">{lifeStage}</div>
      </div>
    </div>
  </div>
  
  <div class="stats-grid">
    <div class="stat-item">
      <Heart class="text-red-500" />
      <div>
        <div class="text-sm opacity-75">Total Heartbeats</div>
        <div class="stat-value">{statistics.heartbeats.toLocaleString()}</div>
        <div class="text-xs opacity-50">{DAILY_AVERAGES.heartbeats.toLocaleString()} per day</div>
      </div>
    </div>
    
    <div class="stat-item">
      <Wind class="text-blue-500" />
      <div>
        <div class="text-sm opacity-75">Total Breaths</div>
        <div class="stat-value">{statistics.breaths.toLocaleString()}</div>
        <div class="text-xs opacity-50">{DAILY_AVERAGES.breaths.toLocaleString()} per day</div>
      </div>
    </div>
    
    <div class="stat-item">
      <Wind class="text-cyan-500" />
      <div>
        <div class="text-sm opacity-75">Oxygen Consumed (L)</div>
        <div class="stat-value">{statistics.oxygen.toLocaleString()}</div>
        <div class="text-xs opacity-50">{DAILY_AVERAGES.oxygenLiters.toLocaleString()} L per day</div>
      </div>
    </div>
    
    <div class="stat-item">
      <Activity class="text-orange-500" />
      <div>
        <div class="text-sm opacity-75">Energy Spent (kcal)</div>
        <div class="stat-value">{statistics.calories.toLocaleString()}</div>
        <div class="text-xs opacity-50">{DAILY_AVERAGES.calories.toLocaleString()} kcal per day</div>
      </div>
    </div>
    
    <div class="stat-item">
      <Apple class="text-green-500" />
      <div>
        <div class="text-sm opacity-75">Food Consumed (kg)</div>
        <div class="stat-value">{statistics.food}</div>
        <div class="text-xs opacity-50">{DAILY_AVERAGES.foodKg} kg per day</div>
      </div>
    </div>
    
    <div class="stat-item">
      <Droplet class="text-blue-500" />
      <div>
        <div class="text-sm opacity-75">Water Consumed (L)</div>
        <div class="stat-value">{statistics.water}</div>
        <div class="text-xs opacity-50">{DAILY_AVERAGES.waterLiters} L per day</div>
      </div>
    </div>
    
    <div class="stat-item">
      <Coffee class="text-yellow-500" />
      <div>
        <div class="text-sm opacity-75">Urine Produced (L)</div>
        <div class="stat-value">{statistics.urine}</div>
        <div class="text-xs opacity-50">{DAILY_AVERAGES.urineLiters} L per day</div>
      </div>
    </div>
    
    <div class="stat-item">
      <Activity class="text-brown-500" />
      <div>
        <div class="text-sm opacity-75">Feces Produced (kg)</div>
        <div class="stat-value">{statistics.feces}</div>
        <div class="text-xs opacity-50">{DAILY_AVERAGES.fecesKg} kg per day</div>
      </div>
    </div>
    
    <div class="stat-item">
      <Moon class="text-indigo-500" />
      <div>
        <div class="text-sm opacity-75">Hours Slept</div>
        <div class="stat-value">{statistics.sleep.toLocaleString()}</div>
        <div class="text-xs opacity-50">{DAILY_AVERAGES.sleepHours} hours per day</div>
      </div>
    </div>
    
    <div class="stat-item">
      <Thermometer class="text-orange-500" />
      <div>
        <div class="text-sm opacity-75">Sweat Produced (L)</div>
        <div class="stat-value">{statistics.sweat}</div>
        <div class="text-xs opacity-50">{DAILY_AVERAGES.sweatLiters} L per day</div>
      </div>
    </div>
    
    <div class="stat-item">
      <Dna class="text-red-500" />
      <div>
        <div class="text-sm opacity-75">Blood Filtered (L)</div>
        <div class="stat-value">{statistics.bloodFiltered.toLocaleString()}</div>
        <div class="text-xs opacity-50">{DAILY_AVERAGES.bloodFiltered} L per day</div>
      </div>
    </div>
    
    <div class="stat-item">
      <Activity class="text-pink-500" />
      <div>
        <div class="text-sm opacity-75">Dead Skin (kg)</div>
        <div class="stat-value">{statistics.deadSkin}</div>
        <div class="text-xs opacity-50">{DAILY_AVERAGES.deadSkinGrams} g per day</div>
      </div>
    </div>
  </div>
</section>