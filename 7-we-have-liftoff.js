function liftoff(instructions){
  /*
  1) sort array descending
  2) join it with ' '
  3) add ' liftoff!' and return
  */

  const sorted = instructions.sort(function(a,b){
    return b - a;
  });
  const joined = sorted.join(' ');
  return joined + ' liftoff!';
}