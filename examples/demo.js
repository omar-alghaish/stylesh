/**
 * Complete Demo - Shows all Stylesh features
 */

import 'stylesh';
import { ThemeManager, animator } from 'stylesh';

async function runDemo() {
  console.log('\n' + '='.repeat(50));
  console.log('✨ STYLESH v2.0 - COMPLETE DEMO ✨'.gradient(['cyan', 'blue', 'purple', 'magenta']));
  console.log('='.repeat(50) + '\n');

  // ========== FIXED BORDERS ==========
  console.log('1️⃣  FIXED BORDERS\n'.color('yellow'));

  const banner = `✨ Welcome to Stylesh ✨
Powerful • Flexible • Beautiful`
    .gradient(['cyan', 'blue', 'magenta'])
    .border('double', 'cyan', 'all', 'center');
  console.log(banner);

  const warningBox = `⚠️  SYSTEM WARNING ⚠️
Your disk space is almost full.
Please clean up unnecessary files.`
    .color('yellow')
    .bg('red')
    .border('rounded', 'yellow', 'all', 'center');
  console.log('\n' + warningBox);

  const successBox = `✅ OPERATION SUCCESSFUL ✅
All tasks completed without errors.
Great job, developer!`
    .color('white')
    .bg('darkGreen')
    .border('solid', 'green', 'all', 'center');
  console.log('\n' + successBox + '\n');

  // ========== CUSTOM GRADIENTS ==========
  console.log('2️⃣  CUSTOM GRADIENTS\n'.color('yellow'));

  console.log('Rainbow Gradient:'.color('white'));
  console.log('STYLESH IS AMAZING!'.gradient(['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'purple']) + '\n');

  console.log('Fire Gradient:'.color('white'));
  console.log('BLAZING FAST 🔥'.gradient(['darkRed', 'red', 'orange', 'yellow']) + '\n');

  console.log('Ocean Gradient:'.color('white'));
  console.log('DEEP OCEAN WAVES 🌊'.gradient(['darkBlue', 'blue', 'cyan', 'aqua']) + '\n');

  console.log('Sunset Gradient:'.color('white'));
  console.log('BEAUTIFUL SUNSET 🌅'.gradient(['purple', 'pink', 'orange', 'yellow']) + '\n');

  // ========== THEMES ==========
  console.log('3️⃣  PREDEFINED THEMES\n'.color('yellow'));

  console.log('Error Theme:'.color('white'));
  console.log('Critical System Error'.themeBox('error') + '\n');

  console.log('Success Theme:'.color('white'));
  console.log('Task Completed Successfully'.themeBox('success') + '\n');

  console.log('Warning Theme:'.color('white'));
  console.log('Please Review Settings'.themeBox('warning') + '\n');

  console.log('Info Theme:'.color('white'));
  console.log('System Information'.themeBox('info') + '\n');

  console.log('Danger Theme:'.color('white'));
  console.log('DANGER: High Temperature!'.themeBox('danger') + '\n');

  // ========== CUSTOM THEMES ==========
  console.log('4️⃣  CUSTOM THEMES\n'.color('yellow'));

  // Register custom theme
  ThemeManager.register('ocean', {
    textColor: 'white',
    backgroundColor: 'darkBlue',
    borderStyle: 'rounded',
    borderColor: 'cyan',
    alignment: 'center',
  });

  console.log('Custom Ocean Theme:'.color('white'));
  console.log('Deep Blue Sea 🌊'.themeBox('ocean') + '\n');

  // Register another custom theme with gradient
  ThemeManager.register('fire', {
    gradient: 'red',
    borderStyle: 'double',
    borderColor: 'orange',
    alignment: 'center',
  });

  console.log('Custom Fire Theme:'.color('white'));
  console.log('Blazing Fire 🔥'.themeBox('fire') + '\n');


  // ========== ANIMATIONS ==========
  console.log('6️⃣  ANIMATIONS\n'.color('yellow'));

  // Typing animation
  console.log('Typing Animation:'.color('white'));
  await animator.typing('Hello, I am being typed...', (text) => text.color('green'), { speed: 'fast' });
  await new Promise(resolve => setTimeout(resolve, 500));

  // Spinner
  console.log('\nSpinner Animation:'.color('white'));
  const stopSpinner = animator.spinner('Loading data...', { speed: 'fast' });
  await new Promise(resolve => setTimeout(resolve, 3000));
  stopSpinner();
  console.log('✓ Loading complete!\n'.color('green'));

  // Progress bar
  console.log('Progress Bar Animation:'.color('white'));
  const updateProgress = await animator.progressBar(100, { width: 40, speed: 'fast' });
  for (let i = 0; i <= 100; i += 5) {
    updateProgress(i);
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  console.log();

  // Blinking
  console.log('\nBlinking Animation (3 times):'.color('white'));
  const stopBlink = animator.blink('⚠️  ATTENTION ⚠️', (text) => text.color('red'), { speed: 'normal', iterations: 3 });
  await new Promise(resolve => setTimeout(resolve, 4000));
  console.log();

  // Rainbow cycling
  console.log('Rainbow Animation (5 seconds):'.color('white'));
  const stopRainbow = animator.rainbow('🌈 RAINBOW TEXT 🌈', { speed: 'normal' });
  await new Promise(resolve => setTimeout(resolve, 5000));
  stopRainbow();

  // Pulse animation
  console.log('\nPulse Animation (5 seconds):'.color('white'));
  const stopPulse = animator.pulse('💓 HEARTBEAT 💓', 'red', 'darkRed', { speed: 'normal' });
  await new Promise(resolve => setTimeout(resolve, 5000));
  stopPulse();

  // Wave animation
  console.log('Wave Animation (5 seconds):'.color('white'));
  const stopWave = animator.wave('~~ WAVE EFFECT ~~', { speed: 'fast' });
  await new Promise(resolve => setTimeout(resolve, 5000));
  stopWave();

  // ========== COMPLEX EXAMPLES ==========
  console.log('\n7️⃣  COMPLEX EXAMPLES\n'.color('yellow'));

  // Dashboard-like output
  console.log('Dashboard:'.color('white'));
  console.log('SYSTEM DASHBOARD'.color('white').bg('blue').border('double', 'cyan', 'all', 'center'));
  console.log('Status: '.color('gray') + 'Online'.color('green'));
  console.log('CPU: '.color('gray') + '45%'.color('yellow'));
  console.log('Memory: '.color('gray') + '2.1GB / 8GB'.color('cyan'));
  console.log('Disk: '.color('gray') + '89%'.color('red') + ' ⚠️'.color('yellow'));
  console.log('─'.repeat(40).color('darkGray') + '\n');

  // Card with header and content
  const cardHeader = 'NOTIFICATION CENTER';
  const cardContent = `You have 3 new messages
2 pending tasks
1 system update available`;
  
  console.log('Notification Card:'.color('white'));
  console.log(
    (cardHeader + '\n' + cardContent)
      .color('white')
      .bg('darkBlue')
      .border('rounded', 'cyan', 'all', 'left')
  );
  console.log();

  // Alert boxes
  console.log('Alert Examples:'.color('white'));
  console.log('[INFO] '.color('blue') + 'Starting backup process...'.color('white'));
  console.log('[WARN] '.color('yellow') + 'Backup taking longer than expected'.color('white'));
  console.log('[ERROR] '.color('red') + 'Backup failed: Connection timeout'.color('white'));
  console.log('[SUCCESS] '.color('green') + 'Retry successful!'.color('white'));
  console.log();

  // ========== LIST ALL THEMES ==========
  console.log('8️⃣  AVAILABLE THEMES\n'.color('yellow'));
  console.log('Available themes:'.color('white'));
  ThemeManager.listThemes().forEach(theme => {
    console.log(`  • ${theme}`.color('cyan'));
  });

  // ========== FINAL MESSAGE ==========
  console.log('\n' + '='.repeat(50));
  console.log(
    `🎉 DEMO COMPLETE 🎉
Thank you for using Stylesh!`
      .gradient(['green', 'cyan', 'blue'])
      .border('double', 'magenta', 'all', 'center')
  );
  console.log('='.repeat(50) + '\n');

  // Stop all animations
  animator.stopAll();
}

// Run the demo
runDemo().catch(console.error);