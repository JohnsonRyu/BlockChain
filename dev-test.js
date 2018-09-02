const Block = require('./block');

const GHBlock = Block.mineBlock(Block.genesis(), 'GH');
console.log(GHBlock.toString());