import "./index.css";
import JS_IMG from './assets/image.png';

const JSLoveTitle = document.createElement('h1');
JSLoveTitle.innerText = "I love JavaScript";
JSLoveTitle.classList.add('JSLove');
const JSimg = document.createElement('img');
JSimg.src = JS_IMG;
document.body.append(JSLoveTitle);
document.body.append(JSimg);
