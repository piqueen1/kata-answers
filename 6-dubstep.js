function songDecoder(song){
  /* 
  1) repluce WUB with ' '
  2) trim to one space between words, none before or after
  */
  const wublessSong = song.split('WUB').join(' ').trim();
  const singleSpaceWubless = wublessSong.replace(/ +(?= )/g,'');
  
  return singleSpaceWubless;
}