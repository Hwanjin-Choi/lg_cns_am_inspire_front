const urlFetch = async () => {
  let url =
    "https://api.themoviedb.org/3/search/movie?api_key=cba95d401a14ab806ffc13a5052aab89&query=%EC%84%9C%EC%9A%B8";

  const res = await fetch(url).then((res) => {
    return res.json();
  });
  let component = "";
  res.results.forEach((item) => {
    console.log(item.original_title);
    component += `<h2>${item.original_title}<h2>`;
  });

  document.querySelector("div").innerHTML = component;
};
