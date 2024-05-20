const { ndown } = require("nayan-media-downloader");

export async function Download() {
  let URL = await ndown(
    "https://www.facebook.com/100000959749712/posts/pfbid0288xi44nvodK9d7r3wf4LHeM3dtEsVghQXmz5t59axwz7KdLStYyg4qfvTVrAL27Ll/?app=fbl"
  );
  console.log(URL);
}
Download();
