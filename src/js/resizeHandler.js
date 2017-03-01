export default function (context) {
  const [h, w] = [window.innerHeight, window.innerWidth];
  console.log('resize')
  if (context.isFullscreen) {
    context.layer.style.width = `${w - 2}px`;
    context.layer.style.height = `${h}px`;
    context.layer.style.left = '0';
    context.layer.style.top = '0';
    context.layer.style.zIndex = '2147483647';
    const controlLayer = document.getElementById(context.controlLayerId);
    controlLayer.style.width = `${w - 30}px`;
  } else {
    context.layer.style.width = context.player.style.width;
    context.layer.style.height = context.player.style.height;
    context.layer.style.left = `${context.player.offsetLeft}px`;
    context.layer.style.top = `${context.player.offsetTop}px`;
    document.getElementById(context.controlLayerId).style.width = `${context.layer.clientWidth - 30}px`;
  }
}
