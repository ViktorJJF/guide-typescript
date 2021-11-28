(() => {
  enum AudioLevel {
    min = 3,
    medium,
    max = 10,
  }

  let currentAudio: AudioLevel = AudioLevel.max;

  console.log(AudioLevel);
})();
