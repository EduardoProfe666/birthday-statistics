<script lang="ts">
    import {Activity, Heart, Wind, Droplet, Apple, Coffee, Moon, Thermometer, Brain, Dna} from 'lucide-svelte';
    import {differenceInHours, differenceInMinutes, differenceInSeconds} from 'date-fns';
    import {currentTime} from '../stores/timeStore';
    import {DAILY_AVERAGES, HOURLY_AVERAGES, MINUTES_AVERAGES, SECONDS_AVERAGE} from '../utils/averagesConstants';
    import {getLifeStage} from '../utils/lifeStageUtils';

    export let birthDate: Date;

    $: seconds = differenceInSeconds($currentTime, birthDate);
    $: minutes = differenceInMinutes($currentTime, birthDate);
    $: hours = differenceInHours($currentTime, birthDate);
    $: days = seconds / (24 * 3600);
    $: age = Math.floor(days / 365.25);
    $: lifeStage = getLifeStage(age);

    $: statistics = {
        heartbeats: Math.floor(seconds * SECONDS_AVERAGE.heartbeats),
        breaths: Math.floor(seconds * SECONDS_AVERAGE.breaths),
        oxygen: (seconds * SECONDS_AVERAGE.oxygenLiters),
        calories: (seconds * SECONDS_AVERAGE.calories),
        food: (minutes * MINUTES_AVERAGES.foodKg),
        water: (minutes * MINUTES_AVERAGES.waterLiters),
        urine: (minutes * MINUTES_AVERAGES.urineLiters),
        feces: (minutes * MINUTES_AVERAGES.fecesKg),
        sleep: Math.floor(days * DAILY_AVERAGES.sleepHours),
        sweat: (hours * HOURLY_AVERAGES.sweatLiters),
        bloodFiltered: (hours * HOURLY_AVERAGES.bloodFiltered),
        deadSkin: (hours * HOURLY_AVERAGES.deadSkinGrams)
    };
</script>

<section class="stats-card p-6">
    <h2 class="stats-title">
        <Activity class="text-primary"/>
        Life Statistics
    </h2>

    <div class="mb-4">
        <div class="stat-item">
            <Brain class="text-purple-500"/>
            <div>
                <div class="text-sm opacity-75">Life Stage</div>
                <div class="stat-value">{lifeStage}</div>
            </div>
        </div>
    </div>

    <div class="stats-grid">
        <div class="stat-item">
            <Heart class="text-red-500"/>
            <div>
                <div class="text-sm opacity-75">Total Heartbeats</div>
                <div class="stat-value">{statistics.heartbeats.toLocaleString('en-US', {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 3
                })}</div>
                <div class="text-xs opacity-50">{SECONDS_AVERAGE.heartbeats.toLocaleString('en-US', {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 12
                })} per second</div>
            </div>
        </div>

        <div class="stat-item">
            <Wind class="text-blue-500"/>
            <div>
                <div class="text-sm opacity-75">Total Breaths</div>
                <div class="stat-value">{statistics.breaths.toLocaleString('en-US', {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 3
                })}</div>
                <div class="text-xs opacity-50">{SECONDS_AVERAGE.breaths.toLocaleString('en-US', {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 12
                })} per second</div>
            </div>
        </div>

        <div class="stat-item">
            <Wind class="text-cyan-500"/>
            <div>
                <div class="text-sm opacity-75">Oxygen Consumed (L)</div>
                <div class="stat-value">{statistics.oxygen.toLocaleString('en-US', {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 3
                })}</div>
                <div class="text-xs opacity-50">{SECONDS_AVERAGE.oxygenLiters.toLocaleString('en-US', {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 12
                })} L per second</div>
            </div>
        </div>

        <div class="stat-item">
            <Activity class="text-orange-500"/>
            <div>
                <div class="text-sm opacity-75">Energy Spent (kcal)</div>
                <div class="stat-value">{statistics.calories.toLocaleString('en-US', {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 3
                })}</div>
                <div class="text-xs opacity-50">{SECONDS_AVERAGE.calories.toLocaleString('en-US', {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 12
                })} kcal per second</div>
            </div>
        </div>

        <div class="stat-item">
            <Apple class="text-green-500"/>
            <div>
                <div class="text-sm opacity-75">Food Consumed (kg)</div>
                <div class="stat-value">{statistics.food.toLocaleString('en-US', {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 3
                })}</div>
                <div class="text-xs opacity-50">{MINUTES_AVERAGES.foodKg.toLocaleString('en-US', {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 12
                })} kg per minute</div>
            </div>
        </div>

        <div class="stat-item">
            <Droplet class="text-blue-500"/>
            <div>
                <div class="text-sm opacity-75">Water Consumed (L)</div>
                <div class="stat-value">{statistics.water.toLocaleString('en-US', {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 3
                })}</div>
                <div class="text-xs opacity-50">{MINUTES_AVERAGES.waterLiters.toLocaleString('en-US', {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 12
                })} L per minute</div>
            </div>
        </div>

        <div class="stat-item">
            <Coffee class="text-yellow-500"/>
            <div>
                <div class="text-sm opacity-75">Urine Produced (L)</div>
                <div class="stat-value">{statistics.urine.toLocaleString('en-US', {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 3
                })}</div>
                <div class="text-xs opacity-50">{MINUTES_AVERAGES.urineLiters.toLocaleString('en-US', {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 12
                })} L per minute</div>
            </div>
        </div>

        <div class="stat-item">
            <Activity class="text-brown-500"/>
            <div>
                <div class="text-sm opacity-75">Feces Produced (kg)</div>
                <div class="stat-value">{statistics.feces.toLocaleString('en-US', {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 3
                })}</div>
                <div class="text-xs opacity-50">{MINUTES_AVERAGES.fecesKg.toLocaleString('en-US', {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 12
                })} kg per minute</div>
            </div>
        </div>

        <div class="stat-item">
            <Moon class="text-indigo-500"/>
            <div>
                <div class="text-sm opacity-75">Hours Slept</div>
                <div class="stat-value">{statistics.sleep.toLocaleString('en-US', {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 3
                })}</div>
                <div class="text-xs opacity-50">{DAILY_AVERAGES.sleepHours.toLocaleString('en-US', {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 12
                })} hours per day</div>
            </div>
        </div>

        <div class="stat-item">
            <Thermometer class="text-orange-500"/>
            <div>
                <div class="text-sm opacity-75">Sweat Produced (L)</div>
                <div class="stat-value">{statistics.sweat.toLocaleString('en-US', {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 3
                })}</div>
                <div class="text-xs opacity-50">{HOURLY_AVERAGES.sweatLiters.toLocaleString('en-US', {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 12
                })} L per hour</div>
            </div>
        </div>

        <div class="stat-item">
            <Dna class="text-red-500"/>
            <div>
                <div class="text-sm opacity-75">Blood Filtered (L)</div>
                <div class="stat-value">{statistics.bloodFiltered.toLocaleString('en-US', {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 3
                })}</div>
                <div class="text-xs opacity-50">{HOURLY_AVERAGES.bloodFiltered.toLocaleString('en-US', {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 12
                })} L per hour</div>
            </div>
        </div>

        <div class="stat-item">
            <Activity class="text-pink-500"/>
            <div>
                <div class="text-sm opacity-75">Dead Skin (g)</div>
                <div class="stat-value">{statistics.deadSkin.toLocaleString('en-US', {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 3
                })}</div>
                <div class="text-xs opacity-50">{HOURLY_AVERAGES.deadSkinGrams.toLocaleString('en-US', {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 12
                })} g per hour</div>
            </div>
        </div>
    </div>
</section>