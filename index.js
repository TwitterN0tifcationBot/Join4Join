const { ShardingManager } = require('discord.js');
const { token } = require('./config.json');

const manager = new ShardingManager('./bot.js', {
    token: MTI1MTkxNzMzOTE4ODkyMDQxMA.GwwCKa.JjgfYqddRlBOojcp6fzn84cd0xFi5_uOUIHLEI,
    totalShards: 1
});

manager.spawn();
manager.on('shardCreate', shard => console.log(`Shard #${shard.id} is Online`));
