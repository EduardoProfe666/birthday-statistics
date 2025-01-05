import { writable } from 'svelte/store';

export const currentTime = writable(new Date());

// Update the store every second
setInterval(() => {
  currentTime.set(new Date());
}, 1000);