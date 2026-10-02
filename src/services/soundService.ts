// Web Audio API Synthesizer for 963 Hz Sacred Frequency & Bell Chimes

class SoundService {
  private audioCtx: AudioContext | null = null;
  private isTonePlaying = false;
  private toneOscillator1: OscillatorNode | null = null;
  private toneOscillator2: OscillatorNode | null = null;
  private toneGain: GainNode | null = null;

  private initContext() {
    if (!this.audioCtx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.audioCtx = new AudioCtx();
    }
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  // Play gentle Tibetan singing bowl chime on click
  playChime(freq = 528) {
    try {
      this.initContext();
      if (!this.audioCtx) return;

      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);
      // Subtle pitch envelope for bell resonance
      osc.frequency.exponentialRampToValueAtTime(freq * 0.995, this.audioCtx.currentTime + 1.2);

      gain.gain.setValueAtTime(0.001, this.audioCtx.currentTime);
      gain.gain.linearRampToValueAtTime(0.08, this.audioCtx.currentTime + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + 1.5);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start();
      osc.stop(this.audioCtx.currentTime + 1.5);
    } catch {
      // Audio not permitted without interaction or unsupported
    }
  }

  // Toggle 963 Hz pure resonance drone
  toggle963HzTone(onStateChange?: (playing: boolean) => void): boolean {
    try {
      this.initContext();
      if (!this.audioCtx) return false;

      if (this.isTonePlaying) {
        this.stop963HzTone();
        onStateChange?.(false);
        return false;
      } else {
        // Start 963 Hz Solfeggio frequency + 481.5 Hz warm sub-harmonic
        const now = this.audioCtx.currentTime;

        const osc1 = this.audioCtx.createOscillator();
        const osc2 = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();

        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(963, now); // Solfeggio 963 Hz

        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(481.5, now); // Octave below for warmth

        gain.gain.setValueAtTime(0.001, now);
        gain.gain.linearRampToValueAtTime(0.05, now + 1.0); // Gentle fade-in

        osc1.connect(gain);
        osc2.connect(gain);
        gain.connect(this.audioCtx.destination);

        osc1.start();
        osc2.start();

        this.toneOscillator1 = osc1;
        this.toneOscillator2 = osc2;
        this.toneGain = gain;
        this.isTonePlaying = true;

        onStateChange?.(true);
        return true;
      }
    } catch {
      return false;
    }
  }

  stop963HzTone() {
    if (!this.audioCtx || !this.isTonePlaying) return;
    try {
      const now = this.audioCtx.currentTime;
      if (this.toneGain) {
        this.toneGain.gain.linearRampToValueAtTime(0.0001, now + 0.6);
      }
      setTimeout(() => {
        this.toneOscillator1?.stop();
        this.toneOscillator2?.stop();
        this.toneOscillator1?.disconnect();
        this.toneOscillator2?.disconnect();
        this.toneGain?.disconnect();
        this.toneOscillator1 = null;
        this.toneOscillator2 = null;
        this.toneGain = null;
        this.isTonePlaying = false;
      }, 650);
    } catch {
      this.isTonePlaying = false;
    }
  }

  isPlaying(): boolean {
    return this.isTonePlaying;
  }
}

export const soundService = new SoundService();
