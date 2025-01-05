<script lang="ts">
    import {Calendar} from 'lucide-svelte';

    export let value: Date | null = null;

    function handleInput(event: Event) {
        const input = event.target as HTMLInputElement;
        value = input.value ? new Date(input.value) : null;
    }
</script>

<div class="form-control w-full max-w-xs mx-auto">
    <label class="label" for="birthdate">
    <span class="label-text flex items-center gap-2">
      <Calendar class="text-primary"/>
      Select your birth date
    </span>
    </label>
    <input
            id="birthdate"
            type="date"
            class="input input-bordered w-full"
            on:input={handleInput}
            max={new Date().toISOString().split('T')[0]}
    />
</div>
