const posts = []

const images = [
    'https://dr.savee-cdn.com/things/6/3/46e47a9bc36aa3ec62cf94.webp',
    'https://dr.savee-cdn.com/things/5/a/06bd2daca7a45d9d7a7f82.webp',
    'https://dr.savee-cdn.com/things/6/1/ad4eb56ebd63ad933804eb.webp',
    'https://dr.savee-cdn.com/things/6/3/4234ea591831722c9f7f4c.webp',
    'https://dr.savee-cdn.com/things/6/2/9dfef10c4f56f52a8c765f.webp',
    'https://dr.savee-cdn.com/things/6/3/190fd37c1a2cbfb8e4a31f.webp',
    'https://dr.savee-cdn.com/things/6/3/04bf6b38eb9e39ffd11866.webp',
    'https://dr.savee-cdn.com/things/6/2/ffb5753573a1ee2c769d87.webp',
    'https://dr.savee-cdn.com/things/6/2/fae9d40118a8e11f0b1b72.webp'


]

let imageIndex = 0;

for(let i = 1; i <= 80; i++){
    let item = {
        id: i,
        title: `Post ${i}`,
        date: `${i < 10 ? 0 : ''}${i}/10/2021 `,
        image: images[imageIndex]
    }
    posts.push(item);
    imageIndex++;
    if (imageIndex > images.length - 1) imageIndex = 0;
}

console.log(posts)