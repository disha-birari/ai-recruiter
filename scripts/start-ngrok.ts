import ngrok from 'ngrok';

const PORT = process.env.PORT || 3000;

async function startNgrok() {
  try {
    const url = await ngrok.connect({
      addr: PORT,
      // Authtoken is loaded from ngrok.yml config file
    });
    
    console.log('\n🚀 Ngrok tunnel established!');
    console.log(`📡 Public URL: ${url}`);
    console.log(`🏠 Local server: http://localhost:${PORT}`);
    console.log('\n💡 Use this URL for webhooks (e.g., Clerk webhooks)');
    console.log('   Press Ctrl+C to stop the tunnel\n');

    // Handle graceful shutdown
    process.on('SIGINT', async () => {
      console.log('\n🛑 Shutting down ngrok tunnel...');
      await ngrok.disconnect();
      await ngrok.kill();
      process.exit(0);
    });

  } catch (error) {
    console.error('❌ Failed to start ngrok:', error);
    process.exit(1);
  }
}

startNgrok();
