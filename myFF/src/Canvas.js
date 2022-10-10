import { useEffect, useRef } from "react";

function Canvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if(!canvasRef) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = 200;
    canvas.height = 200;
    const image = new Image();
    image.src = "https://www.google.co.kr/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";
    image.onload = function(){

      //이미지 크기
      let imgW = image.width;
      let imgH = image.height;
      console.log(imgW, imgH);

      //캔버스 크기
      let canW = canvas.width;
      let canH = canvas.height;
      console.log(canW, canH);

      //이미지 크기 조정
      let ratioW = canW/imgW;
      let ratioH = canH/imgH;
      console.log(ratioW, ratioH);

      if(canW >= imgW)


      ctx.drawImage(image,0,0);
    };

  }, [canvasRef]);

  return (
    <div className="Canvas">
      <canvas ref={canvasRef}/>
    </div>
  );
}

export default Canvas;
