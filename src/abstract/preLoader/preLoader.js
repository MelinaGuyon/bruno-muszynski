const $dom = document.getElementById('loader');

function show () {
  return new Promise((resolve) => {
    // $dom.style.display = 'block';
    resolve();
  });
}

function hide () {
  return new Promise((resolve) => {
    $dom.style.display = 'none';
    resolve();
  });
}

export default {
  show,
  hide
}
