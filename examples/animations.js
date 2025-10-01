/**
 * Animation Examples Demo
 */

import 'stylesh';
import { animator } from 'stylesh';

async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function runAnimationDemo() {
  console.clear();
  
  console.log('\n' + '='.repeat(60));
  console.log('🎬 STYLESH ANIMATIONS DEMO'.color('cyan').toString());
  console.log('='.repeat(60) + '\n');

  // 1. Typing Animation
  console.log('1️⃣  Typing Animation:'.color('yellow'));
  await animator.typing('Hello, I am being typed character by character...', 
    (text) => text.color('green'), 
    { speed: 'fast' }
  );
  await delay(1000);

  // 2. Spinner
  console.log('\n2️⃣  Spinner Animation:'.color('yellow'));
  const stopSpinner = animator.spinner('Loading data from server', { speed: 'fast' });
  await delay(3000);
  stopSpinner();
  console.log('✓ Data loaded successfully!'.color('green') + '\n');
  await delay(500);

  // 3. Progress Bar
  console.log('3️⃣  Progress Bar Animation:'.color('yellow'));
  const updateProgress = await animator.progressBar(100, { width: 50, char: '█', speed: 'fast' });
  for (let i = 0; i <= 100; i += 2) {
    updateProgress(i);
    await delay(50);
  }
  await delay(500);

  // 4. Blinking
  console.log('\n4️⃣  Blinking Animation (5 blinks):'.color('yellow'));
  const stopBlink = animator.blink(
    '⚠️  IMPORTANT NOTICE ⚠️', 
    (text) => text.color('red').bg('yellow'), 
    { speed: 'normal', iterations: 5 }
  );
  await delay(6000);
  await delay(500);

  // 5. Rainbow
  console.log('5️⃣  Rainbow Animation (5 seconds):'.color('yellow'));
  const stopRainbow = animator.rainbow('🌈 COLORFUL RAINBOW TEXT 🌈', { speed: 'normal' });
  await delay(5000);
  stopRainbow();
  await delay(500);

  // 6. Pulse
  console.log('6️⃣  Pulse Animation (5 seconds):'.color('yellow'));
  const stopPulse = animator.pulse('💓 HEARTBEAT EFFECT 💓', 'red', 'darkRed', { speed: 'normal' });
  await delay(5000);
  stopPulse();
  await delay(500);

  // 7. Wave
  console.log('7️⃣  Wave Animation (5 seconds):'.color('yellow'));
  const stopWave = animator.wave('~~ WAVE EFFECT ACROSS TEXT ~~', { speed: 'fast' });
  await delay(5000);
  stopWave();
  await delay(500);

  // 8. Matrix Effect
  console.log('8️⃣  Matrix Animation (3 seconds):'.color('yellow'));
  const stopMatrix = animator.matrix('MATRIX_CODE_EFFECT', { speed: 'fast', iterations: 50 });
  await delay(3000);
  await delay(500);

  // 9. Glitch Effect
  console.log('9️⃣  Glitch Animation (3 seconds):'.color('yellow'));
  const stopGlitch = animator.glitch('⚡ GLITCH EFFECT ⚡', { speed: 'fast', iterations: 40 });
  await delay(3000);
  await delay(500);

  // 10. Real-world example: Deployment simulation
  console.log('\n🔟 Real-World Example - Deployment Process:'.color('yellow'));
  console.log('─'.repeat(60).color('darkGray') + '\n');

  console.log('Starting deployment process...'.color('cyan'));
  await delay(500);

  // Building
  const stopBuild = animator.spinner('Building application', { speed: 'fast' });
  await delay(2000);
  stopBuild();
  console.log('✓ Build complete'.color('green'));
  await delay(500);

  // Testing
  const stopTest = animator.spinner('Running tests', { speed: 'fast' });
  await delay(2000);
  stopTest();
  console.log('✓ All tests passed (24/24)'.color('green'));
  await delay(500);

  // Deploying
  console.log('\nDeploying to production:'.color('cyan'));
  const deployProgress = await animator.progressBar(100, { width: 40 });
  for (let i = 0; i <= 100; i += 5) {
    deployProgress(i);
    await delay(100);
  }
  await delay(500);

  // Success message
  console.log('\n' + '─'.repeat(60).color('darkGray'));
  console.log(
    `✅ DEPLOYMENT SUCCESSFUL ✅
Application is live!
URL: https://myapp.com`
      .color('white')
      .bg('darkGreen')
      .border('rounded', 'green', 'all', 'center')
  );

  // Final blinking alert
  console.log('\n');
  const finalBlink = animator.blink(
    '🎉 Your app is now live! 🎉',
    (text) => text.color('green'),
    { speed: 'slow', iterations: 3 }
  );
  await delay(4000);

  console.log('\n' + '='.repeat(60));
  console.log('Demo Complete! 🎬'.color('cyan'));
  console.log('='.repeat(60) + '\n');

  // Clean up
  animator.stopAll();
}

// Run the demo
runAnimationDemo().catch(console.error);