async function fetchData(url) {
  // <-- start
  const result = await fetch(url);
  if (result.status === 200) {
    const data = await result.json();
    document.writeln(data.name);
  } else {
    console.log(result.statusText);
  }
  // end -->
}

const URL = 'http://localhost:3000/api';
fetchData(URL);
