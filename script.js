(async function() {
  const searchbox = document.querySelector(".searchinput");
  const searchbtn = document.querySelector(".googlesearch");
  const sleep = time => new Promise(resolve => setTimeout(resolve, time));
  const type = async text => {
    for (const letter of text.split("")) {
      searchbox.value += letter;
      await sleep(125 + Math.floor(Math.random() * 50));
    }
    await sleep(300);
  }
  if (location.hash?.length > 1) {
    const query = atob(location.hash.substr(1));
    await type(query);
    location.href = `https://google.com/search?q=${encodeURIComponent(query)}`;
  } else {
    searchbox.addEventListener('input', e => (location.hash = btoa(e.target.value)));
    searchbox.addEventListener('input', e => {
      searchbtn.innerText = "Copy Link";
      searchbtn.style.width = searchbtn.getBoundingClientRect().width + "px";
      searchbtn.addEventListener("click", async e => {
        await navigator.clipboard.writeText(location.href);
        const originalText = searchbtn.innerText;
        searchbtn.innerText = "Copied!";
        setTimeout(() => (searchbtn.innerText = originalText), 1000);
      });
    }, { once: true })
  }
})();
