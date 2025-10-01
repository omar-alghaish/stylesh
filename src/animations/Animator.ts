/**
 * Animator - Create animated text effects
 */

import { StringStyler } from '../core/StringStyler';

export type AnimationSpeed = 'slow' | 'normal' | 'fast';

export interface AnimationOptions {
  speed?: AnimationSpeed;
  iterations?: number; // -1 for infinite
  clearOnComplete?: boolean;
}

const SPEEDS = {
  slow: 200,
  normal: 100,
  fast: 50,
};

export class Animator {
  private timers: NodeJS.Timeout[] = [];

  /**
   * Stop all running animations
   */
  stopAll(): void {
    this.timers.forEach(timer => clearInterval(timer));
    this.timers = [];
  }

  /**
   * Typing animation - reveals text character by character
   */
  async typing(
    text: string,
    styler?: (text: string) => StringStyler,
    options: AnimationOptions = {}
  ): Promise<void> {
    const { speed = 'normal', clearOnComplete = false } = options;
    const delay = SPEEDS[speed];

    return new Promise((resolve) => {
      let index = 0;
      const interval = setInterval(() => {
        if (index <= text.length) {
          const partial = text.substring(0, index);
          const output = styler ? styler(partial).toString() : partial;
          
          // Clear line and write new content
          process.stdout.write('\r' + output + ' '.repeat(Math.max(0, text.length - index)));
          index++;
        } else {
          clearInterval(interval);
          const timerIndex = this.timers.indexOf(interval);
          if (timerIndex > -1) {
            this.timers.splice(timerIndex, 1);
          }
          
          if (clearOnComplete) {
            process.stdout.write('\r' + ' '.repeat(text.length) + '\r');
          } else {
            process.stdout.write('\n');
          }
          resolve();
        }
      }, delay);

      this.timers.push(interval);
    });
  }

  /**
   * Blinking animation - toggles visibility
   */
  blink(
    text: string,
    styler?: (text: string) => StringStyler,
    options: AnimationOptions = {}
  ): () => void {
    const { speed = 'normal', iterations = -1 } = options;
    const delay = SPEEDS[speed] * 5;
    let visible = true;
    let count = 0;

    const interval = setInterval(() => {
      if (iterations !== -1 && count >= iterations * 2) {
        clearInterval(interval);
        const timerIndex = this.timers.indexOf(interval);
        if (timerIndex > -1) {
          this.timers.splice(timerIndex, 1);
        }
        process.stdout.write('\n');
        return;
      }

      const output = visible 
        ? (styler ? styler(text).toString() : text)
        : ' '.repeat(text.length);
      
      process.stdout.write('\r' + output);
      visible = !visible;
      count++;
    }, delay);

    this.timers.push(interval);

    // Return stop function
    return () => {
      clearInterval(interval);
      const timerIndex = this.timers.indexOf(interval);
      if (timerIndex > -1) {
        this.timers.splice(timerIndex, 1);
      }
      process.stdout.write('\n');
    };
  }

  /**
   * Rainbow animation - cycles through colors
   */
  rainbow(
    text: string,
    options: AnimationOptions = {}
  ): () => void {
    const { speed = 'normal', iterations = -1 } = options;
    const delay = SPEEDS[speed] * 3;
    const colors = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'purple', 'magenta'];
    let colorIndex = 0;
    let count = 0;

    const interval = setInterval(() => {
      if (iterations !== -1 && count >= iterations * colors.length) {
        clearInterval(interval);
        const timerIndex = this.timers.indexOf(interval);
        if (timerIndex > -1) {
          this.timers.splice(timerIndex, 1);
        }
        process.stdout.write('\n');
        return;
      }

      const color = colors[colorIndex % colors.length];
      const output = new StringStyler(text).color(color).toString();
      
      process.stdout.write('\r' + output);
      colorIndex++;
      count++;
    }, delay);

    this.timers.push(interval);

    return () => {
      clearInterval(interval);
      const timerIndex = this.timers.indexOf(interval);
      if (timerIndex > -1) {
        this.timers.splice(timerIndex, 1);
      }
      process.stdout.write('\n');
    };
  }

  /**
   * Pulse animation - fades between two colors
   */
  pulse(
    text: string,
    color1: string = 'white',
    color2: string = 'gray',
    options: AnimationOptions = {}
  ): () => void {
    const { speed = 'normal', iterations = -1 } = options;
    const delay = SPEEDS[speed] * 3;
    let useColor1 = true;
    let count = 0;

    const interval = setInterval(() => {
      if (iterations !== -1 && count >= iterations * 2) {
        clearInterval(interval);
        const timerIndex = this.timers.indexOf(interval);
        if (timerIndex > -1) {
          this.timers.splice(timerIndex, 1);
        }
        process.stdout.write('\n');
        return;
      }

      const color = useColor1 ? color1 : color2;
      const output = new StringStyler(text).color(color).toString();
      
      process.stdout.write('\r' + output);
      useColor1 = !useColor1;
      count++;
    }, delay);

    this.timers.push(interval);

    return () => {
      clearInterval(interval);
      const timerIndex = this.timers.indexOf(interval);
      if (timerIndex > -1) {
        this.timers.splice(timerIndex, 1);
      }
      process.stdout.write('\n');
    };
  }

  /**
   * Loading spinner animation
   */
  spinner(
    text: string,
    options: AnimationOptions = {}
  ): () => void {
    const { speed = 'normal' } = options;
    const delay = SPEEDS[speed];
    const frames = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
    let frameIndex = 0;

    const interval = setInterval(() => {
      const frame = frames[frameIndex % frames.length];
      const output = new StringStyler(`${frame} ${text}`).color('cyan').toString();
      process.stdout.write(`\r${output}`);
      frameIndex++;
    }, delay);

    this.timers.push(interval);

    return () => {
      clearInterval(interval);
      const timerIndex = this.timers.indexOf(interval);
      if (timerIndex > -1) {
        this.timers.splice(timerIndex, 1);
      }
      process.stdout.write('\r' + ' '.repeat(text.length + 2) + '\r');
    };
  }

  /**
   * Progress bar animation
   */
  async progressBar(
    total: number,
    options: AnimationOptions & { width?: number; char?: string } = {}
  ): Promise<(current: number) => void> {
    const { width = 30, char = '█' } = options;

    return (current: number) => {
      const percentage = Math.min(100, Math.round((current / total) * 100));
      const filled = Math.round((width * current) / total);
      const empty = width - filled;
      
      const bar = char.repeat(filled) + '░'.repeat(empty);
      const color = percentage < 50 ? 'red' : percentage < 80 ? 'yellow' : 'green';
      
      const output = new StringStyler(`${bar} ${percentage}%`).color(color).toString();
      process.stdout.write('\r' + output);

      if (current >= total) {
        process.stdout.write('\n');
      }
    };
  }

  /**
   * Wave animation - creates a wave effect across text
   */
  wave(
    text: string,
    options: AnimationOptions = {}
  ): () => void {
    const { speed = 'normal', iterations = -1 } = options;
    const delay = SPEEDS[speed];
    let position = 0;
    let count = 0;

    const interval = setInterval(() => {
      if (iterations !== -1 && count >= iterations * text.length) {
        clearInterval(interval);
        const timerIndex = this.timers.indexOf(interval);
        if (timerIndex > -1) {
          this.timers.splice(timerIndex, 1);
        }
        process.stdout.write('\n');
        return;
      }

      const chars = text.split('').map((char, index) => {
        if (index === position % text.length) {
          return new StringStyler(char).color('cyan').toString();
        }
        return char;
      });

      process.stdout.write('\r' + chars.join(''));
      position++;
      count++;
    }, delay);

    this.timers.push(interval);

    return () => {
      clearInterval(interval);
      const timerIndex = this.timers.indexOf(interval);
      if (timerIndex > -1) {
        this.timers.splice(timerIndex, 1);
      }
      process.stdout.write('\n');
    };
  }

  /**
   * Matrix-style falling text animation
   */
  matrix(
    text: string,
    options: AnimationOptions = {}
  ): () => void {
    const { speed = 'fast', iterations = -1 } = options;
    const delay = SPEEDS[speed];
    let count = 0;

    const interval = setInterval(() => {
      if (iterations !== -1 && count >= iterations) {
        clearInterval(interval);
        const timerIndex = this.timers.indexOf(interval);
        if (timerIndex > -1) {
          this.timers.splice(timerIndex, 1);
        }
        process.stdout.write('\n');
        return;
      }

      const chars = text.split('').map(() => {
        const randomChar = String.fromCharCode(33 + Math.floor(Math.random() * 94));
        return new StringStyler(randomChar).color('green').toString();
      });

      process.stdout.write('\r' + chars.join(''));
      count++;
    }, delay);

    this.timers.push(interval);

    return () => {
      clearInterval(interval);
      const timerIndex = this.timers.indexOf(interval);
      if (timerIndex > -1) {
        this.timers.splice(timerIndex, 1);
      }
      process.stdout.write('\r' + text + '\n');
    };
  }

  /**
   * Glitch effect animation
   */
  glitch(
    text: string,
    options: AnimationOptions = {}
  ): () => void {
    const { speed = 'fast', iterations = -1 } = options;
    const delay = SPEEDS[speed];
    const colors = ['red', 'cyan', 'magenta', 'yellow', 'white'];
    let count = 0;

    const interval = setInterval(() => {
      if (iterations !== -1 && count >= iterations) {
        clearInterval(interval);
        const timerIndex = this.timers.indexOf(interval);
        if (timerIndex > -1) {
          this.timers.splice(timerIndex, 1);
        }
        process.stdout.write('\r' + text + '\n');
        return;
      }

      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      const offset = Math.random() > 0.5 ? ' ' : '';
      const output = new StringStyler(offset + text).color(randomColor).toString();
      
      process.stdout.write('\r' + output + ' ');
      count++;
    }, delay);

    this.timers.push(interval);

    return () => {
      clearInterval(interval);
      const timerIndex = this.timers.indexOf(interval);
      if (timerIndex > -1) {
        this.timers.splice(timerIndex, 1);
      }
      process.stdout.write('\r' + text + '\n');
    };
  }
}

// Export singleton instance
export const animator = new Animator();