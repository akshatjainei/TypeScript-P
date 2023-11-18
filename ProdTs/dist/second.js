"use strict";
class Instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
class YouTube {
    constructor(cameraMode, filter, burst, views) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.views = views;
    }
    createStory() {
        console.log('Story Was Created');
    }
}
