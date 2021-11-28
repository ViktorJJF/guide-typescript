"use strict";
(function () {
    var AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 3] = "min";
        AudioLevel[AudioLevel["medium"] = 4] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    var currentAudio = AudioLevel.max;
    console.log(AudioLevel);
})();
