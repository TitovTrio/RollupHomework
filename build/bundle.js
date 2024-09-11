
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
'use strict';

var e = [],
  t = [];
function n(n, r) {
  if (n && "undefined" != typeof document) {
    var a,
      s = !0 === r.prepend ? "prepend" : "append",
      d = !0 === r.singleTag,
      i = "string" == typeof r.container ? document.querySelector(r.container) : document.getElementsByTagName("head")[0];
    if (d) {
      var u = e.indexOf(i);
      -1 === u && (u = e.push(i) - 1, t[u] = {}), a = t[u] && t[u][s] ? t[u][s] : t[u][s] = c();
    } else a = c();
    65279 === n.charCodeAt(0) && (n = n.substring(1)), a.styleSheet ? a.styleSheet.cssText += n : a.appendChild(document.createTextNode(n));
  }
  function c() {
    var e = document.createElement("style");
    if (e.setAttribute("type", "text/css"), r.attributes) for (var t = Object.keys(r.attributes), n = 0; n < t.length; n++) e.setAttribute(t[n], r.attributes[t[n]]);
    var a = "prepend" === s ? "afterbegin" : "beforeend";
    return i.insertAdjacentElement(a, e), e;
  }
}

var css = "body {\r\n    background-color: black;\r\n}\r\n\r\n.JSLove {\r\n    color: yellow;\r\n}";
n(css,{});

var img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVwAAAFcBAMAAAB2OBsfAAAAGFBMVEUFBwf04R7u7+/////y3QX27Ij/9R+FexNqhCatAAAGTElEQVR42u3dUWvbMBAHcA9C/NpAUd839gW2L9DClr6P7b0Cc3l1INhff26TNLGlO0lBti7w11vaZv5VU+TT6axWP4/tx9djU/6yAhdccMEFF1xwwQW3NPf0hW+nryh/CS644IILLrjggnsD9/s/Ze2PyP37S1n7PeGOI8u/G2XttxiegwsuuOCCCy644IK7PHcS76rjyuE5uOCCCy644IILLriLcxGegwsuuOCCCy644IKbxEV4Di644IILLrjgggtuEhfhObjgggsuuOCCCy64SVyE5+CCCy644IILLrjgJnERnoMLLrjgggsuuOCCm8RFeA4uuOCCCy644IILbhIX4Tm44IILLrgKucbQsdmiXDtqLJZo89oP7fAyiMtxx0DD/BTZ17Y6t/5F6OGZubvqun1huvZ19FNVvSUdXF+3GdtW07YnrVzTuFreO3MGMsj1awevLRGeB7nk11ZVZxVy6bnimtHHNTtWW9WkjmtbnusdDkW55kHQeru3KNdWYvN0b0mu3Lne7i3JDXSur3sLcqVp4dS9qrhtFexeRdwmqHVnvnJc8xbmVqSH20ZwOzVcG6GtVnbRDKTA3cVwK6skPA/dI/yjoRy3vSsuRWmn9+FiXHfWrft+2uO10TJ2d+5qcmiTlZsTNBTjTm8S3cd/ux2t3dz1ZSnudGI4f+s667AiNXmG6cRAbpzmXU3o4F5953M4bK1abueGwd5EQzEuH3kdu3dFmnJkxC8bPiLLmnSl9ITAq3m/P+jKQDbyqqizujKQjxL3Yc/lz0uF5424ouez54W4j+G0+t30rj7uJpD/UMa198U1Ealyvdzuvrgrq5zb3jQatHAjp7Ji3OkO1daq5j7E7EvpuU28Vbd4i3HdjN6K0rmLheeefOmKguO3XErPmxGzarm+DKSTE9PD9eZ3hbqWslwue96RTi63N7EnlVw2fX4glVx2X02YgAtWOvG7liuNdWTCZkqtsI5M2mVdkTquuG+5InVc8yx496SNO0nlxNS9FeXKO5cxyf5lC7OauyrMkkevb7lZuAbS3k+l03gXLW44FC+IfU7q3tJcuWpTUelQ1Oww7d7i3MDwJW3cDT0lFLeU54reSV5dA1f0bvVxJe/a6uMK3lojd0NNGzMatHCHlWYbMTeUq4F05l/m/jbaZSn/RNXF648faqXcYQC/hp6mUcX1TxCdWq7Xu9bL9Xmv36WN6/HWmrnuA3e6ue5yUzfXide3qrnOcFDOnW7Adsq5zX1x+WrZe+CulWQgh6DRW9Qy2dFcawnPqe0iPmuzcQ3ZFO4wY/lLnHbLcKm3kdf9TOdROe5w/S6eewxmumJc8zRNC/CD8PNe6y1/XGLsflx/fHX+I37JPG49/9IC3NP1jbD30PnWvb4zJp5n556vv466PV2v0k3KXS0X9xxGjR+B4G7+10HXOrTBMgP3kiPY8rHK1r8jYQIBb36ueYopxTP+9dh0u9oI8W4W7qg/DBtnW2a5MN6BcL5tMnPH2yGX7m38a8RHefvXWVvazFzyPyE5ve7np9CTFb08XievhDNkIB3Wdoh0LDkZr3M449to3x8PyhpipFZKQeYIz93Ey2G47GPLZY+8VS31y/uJZNdHZ82VdIp7Wv1qQmJ2/uo6mI/OwbWR3C03U8ktd8I09uqWiXwSDhjJwn1LvW6TwM2f7I8bvFexQcpoGMVMWbjUJn3SYs6Y4TaqcnDjxqK54dPpbANmSYvsUq8b/2H7MgM3ZjSMw9rmprGQiRszN0zWZM+3jIVcOTKbet3Y7p3nbJHwWOzk5ePCZ4sEu5duunV3VubeulYLdW9qxRtT95ZtJWwTOzdqOpl2bsY8wy6x+pKtCFimqFDqLH/pe3A4uAmT7Emn+ErnQAXZ3CcV8p3Fnl8gen3vypkw5S4uPGUiePezHwrqv7j4ECXrZSr78yb7d2lPHG24iizuubXMOz9OmqDehx74NPTUur8iM9pzb1QZeuyvsAeKeDyVaJxd6M2Ch3W85zb6vq77/rAhSnvP8K73k8/5zc1ZtgFPB8STueE9wmHuG/wlmmW5+IsI4IILLrjgggsuuOAmcRGeg8txfylrMvf7P2Xtj8j9qfwluOCCCy644Erccbz7VflLcMEFF1xwwQUXXHCLcxGeg3t++R9DfEOK+aPL3gAAAABJRU5ErkJggg==";

const JSLoveTitle = document.createElement('h1');
JSLoveTitle.innerText = "I love JavaScript";
JSLoveTitle.classList.add('JSLove');
const JSimg = document.createElement('img');
JSimg.src = img;
document.body.append(JSLoveTitle);
document.body.append(JSimg);
console.log("keklol");
